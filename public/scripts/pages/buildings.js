import { dc } from "../app.js";
import {
  deleteBuilding,
  deleteBuildingParameters,
  deleteInsulationRoof,
  deleteInsulationWall,
  deleteOccupancy,
  deleteOrientation,
  deleteWindowGlazing,
  deleteWindowShading,
  deleteWindowSize,
  getAllBuildings,
  getAllBuildingParameters,
  getFullBuildingDetails,
} from "../dataconnect-generated/esm/index.esm.js";

const EMPTY_MESSAGE = "No buildings found.";
const FILTER_EMPTY_MESSAGE = "No buildings match the current search or filter.";
const FLOOR_AREA_RANGES = [
  { label: "0-100 m²", min: 0, max: 100 },
  { label: "101-250 m²", min: 101, max: 250 },
  { label: "251-500 m²", min: 251, max: 500 },
  { label: "501-1000 m²", min: 501, max: 1000 },
  { label: "1000+ m²", min: 1001, max: Infinity },
];
const FILTER_CONFIGS = [
  {
    elementId: "climate-filter",
    defaultLabel: "All Climates",
    getValue(buildingParameters) {
      return buildingParameters?.climate || "";
    },
    getLabel(value) {
      return formatEnum(value);
    },
    sortValues(values) {
      return values.sort((left, right) => formatEnum(left).localeCompare(formatEnum(right)));
    },
  },
  {
    elementId: "floor-area-filter",
    defaultLabel: "All Floor Areas",
    getValue(buildingParameters) {
      return getFloorAreaRangeLabel(buildingParameters?.floorArea);
    },
    getLabel(value) {
      return value;
    },
    getOptions() {
      return FLOOR_AREA_RANGES.map((range) => range.label);
    },
    sortValues(values) {
      return values;
    },
  },
  {
    elementId: "building-type-filter",
    defaultLabel: "All Building Types",
    getValue(buildingParameters) {
      return buildingParameters?.buildingType || "";
    },
    getLabel(value) {
      return formatEnum(value);
    },
    sortValues(values) {
      return values.sort((left, right) => formatEnum(left).localeCompare(formatEnum(right)));
    },
  },
  {
    elementId: "envelope-filter",
    defaultLabel: "All Envelopes",
    getValue(buildingParameters) {
      return buildingParameters?.envelope || "";
    },
    getLabel(value) {
      return formatEnum(value);
    },
    sortValues(values) {
      return values.sort((left, right) => formatEnum(left).localeCompare(formatEnum(right)));
    },
  },
  {
    elementId: "air-conditioned-filter",
    defaultLabel: "Any",
    getValue(buildingParameters) {
      if (!buildingParameters) {
        return "";
      }

      return String(Boolean(buildingParameters.isAC));
    },
    getLabel(value) {
      return value === "true" ? "Yes" : "No";
    },
    sortValues(values) {
      return values.sort();
    },
  },
];

// This maps each improvement list in the query result to its delete mutation.
const DELETE_GROUPS = [
  ["insulationRoofs", deleteInsulationRoof],
  ["insulationWalls", deleteInsulationWall],
  ["windowSizes", deleteWindowSize],
  ["windowGlazings", deleteWindowGlazing],
  ["orientations", deleteOrientation],
  ["occupancies", deleteOccupancy],
  ["windowShadings", deleteWindowShading],
];

document.addEventListener("DOMContentLoaded", init);

// Turn enum values into readable text.
function formatEnum(value) {
  return String(value || "")
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function init() {
  // Container saved building cards.
  const container = document.getElementById("buildings-list");
  const searchInput = document.getElementById("building-search");
  const filterElements = Object.fromEntries(
    FILTER_CONFIGS.map((config) => [config.elementId, document.getElementById(config.elementId)])
  );
  if (!container) {
    return;
  }

  try {
    // Load buildings and parameter records together.
    const [buildingsRes, paramsRes] = await Promise.all([
      getAllBuildings(dc),
      getAllBuildingParameters(dc),
    ]);

    const buildings = buildingsRes?.data?.buildings ?? [];
    const parametersByBuildingId = buildParametersMap(
      paramsRes?.data?.buildingParameterss ?? []
    );
    const buildingRecords = buildings.map((building) => ({
      building,
      buildingParameters: parametersByBuildingId.get(building.id),
    }));

    if (buildingRecords.length === 0) {
      container.textContent = EMPTY_MESSAGE;
      return;
    }

    const render = () => {
      populateFilterOptions(buildingRecords, filterElements);

      const searchTerm = searchInput?.value || "";
      const filters = getActiveFilters(filterElements);

      renderBuildingsList(
        container,
        getFilteredBuildingRecords(buildingRecords, searchTerm, filters),
        hasActiveFilters(searchTerm, filters),
        async (buildingId) => {
          await deleteBuildingRecord(buildingId);

          const recordIndex = buildingRecords.findIndex(
            (record) => record.building.id === buildingId
          );

          if (recordIndex >= 0) {
            buildingRecords.splice(recordIndex, 1);
          }

          render();
        }
      );
    };

    searchInput?.addEventListener("input", render);
    Object.values(filterElements).forEach((element) => {
      element?.addEventListener("change", render);
    });

    // Clear the loading text before adding cards.
    render();
  } catch (error) {
    container.innerHTML = `<p>Error loading buildings: ${error.message}</p>`;
  }
}

function renderBuildingsList(container, buildingRecords, hasActiveSearch, onDelete) {
  container.replaceChildren();

  if (!buildingRecords.length) {
    container.textContent = hasActiveSearch ? FILTER_EMPTY_MESSAGE : EMPTY_MESSAGE;
    return;
  }

  for (const record of buildingRecords) {
    container.appendChild(
      createBuildingCard(record.building, record.buildingParameters, onDelete)
    );
  }
}

function getFilteredBuildingRecords(buildingRecords, searchTerm, filters) {
  const query = String(searchTerm || "").trim().toLowerCase();

  return buildingRecords.filter(({ building, buildingParameters }) => {
    if (query && !getBuildingNameText(building).includes(query)) {
      return false;
    }

    return matchesParameterFilters(buildingParameters, filters);
  });
}

function hasActiveFilters(searchTerm, filters) {
  return Boolean(String(searchTerm || "").trim()) || Object.values(filters).some(Boolean);
}

function getActiveFilters(filterElements) {
  return Object.fromEntries(
    FILTER_CONFIGS.map((config) => [config.elementId, filterElements[config.elementId]?.value || ""])
  );
}

function matchesParameterFilters(buildingParameters, filters) {
  return FILTER_CONFIGS.every((config) => {
    const expectedValue = filters[config.elementId];

    if (!expectedValue) {
      return true;
    }

    return config.getValue(buildingParameters) === expectedValue;
  });
}

// Build a lookup from building id to its parameter record.
function buildParametersMap(buildingParameters) {
  return new Map(buildingParameters.map((item) => [item.building.id, item]));
}

function getBuildingNameText(building) {
  return String(building?.name || "Unnamed Building").toLowerCase();
}

function populateFilterOptions(buildingRecords, filterElements) {
  for (const config of FILTER_CONFIGS) {
    const element = filterElements[config.elementId];
    if (!element) {
      continue;
    }

    const previousValue = element.value;
    const values = config.getOptions
      ? config.getOptions(buildingRecords)
      : config.sortValues(
          Array.from(
            new Set(
              buildingRecords
                .map((record) => config.getValue(record.buildingParameters))
                .filter(Boolean)
            )
          )
        );

    element.replaceChildren();
    element.appendChild(createFilterOption("", config.defaultLabel));

    for (const value of values) {
      element.appendChild(createFilterOption(value, config.getLabel(value)));
    }

    element.value = values.includes(previousValue) ? previousValue : "";
  }
}

function createFilterOption(value, label) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  return option;
}

// Build the small parameter summary shown on each card.
function createParamsDetails(buildingParameters) {
  const paramsDetails = document.createElement("div");

  if (!buildingParameters) {
    paramsDetails.innerHTML = "<p><b>Building Parameters:</b> Not created</p>";
    return paramsDetails;
  }

  paramsDetails.innerHTML = `
    <p><b>Climate:</b> ${formatEnum(buildingParameters.climate)}</p>
    <p><b>Floor Area:</b> ${buildingParameters.floorArea} m²</p>
    <p><b>Building Type:</b> ${formatEnum(buildingParameters.buildingType)}</p>
    <p><b>Envelope:</b> ${formatEnum(buildingParameters.envelope)}</p>
    <p><b>Air Conditioned:</b> ${buildingParameters.isAC ? "Yes" : "No"}</p>
  `;

  return paramsDetails;
}

// Build the link to the improvements page for one building.
function buildImprovementsLink(building, buildingParameters) {
  let href = `buildingImprovements.html?buildingId=${encodeURIComponent(building.id)}`;

  if (buildingParameters?.id) {
    href += `&buildingParametersId=${encodeURIComponent(buildingParameters.id)}`;
  }

  return href;
}

// Build one card for a saved building and its actions.
function createBuildingCard(building, buildingParameters, onDelete) {
  const row = document.createElement("div");
  row.className = "card";

  const title = document.createElement("p");
  title.innerHTML = `<b>${building.name || "Unnamed Building"}</b>`;

  const hasBuildingParameters = Boolean(buildingParameters?.id);

  const paramsDetails = createParamsDetails(buildingParameters);

  const actions = document.createElement("div");
  actions.className = "button-group";

  const updateLink = document.createElement("a");
  updateLink.className = "button";
  updateLink.href = `parameters.html?buildingId=${encodeURIComponent(building.id)}`;
  updateLink.textContent = hasBuildingParameters ? "Update Parameters" : "Add Parameters";

  const improvementsLink = document.createElement("a");
  improvementsLink.className = "button";
  improvementsLink.href = buildImprovementsLink(building, buildingParameters);
  improvementsLink.textContent = "View Improvements";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async () => {
    // Ask before deleting the whole building record.
    const confirmed = window.confirm(`Delete ${building.name || "this building"}?`);
    if (!confirmed) {
      return;
    }

    // Lock the button while the delete request runs.
    deleteButton.disabled = true;
    deleteButton.textContent = "Deleting...";

    try {
      await onDelete(building.id);
    } catch (error) {
      alert(`Failed to delete building: ${error.message}`);
      deleteButton.disabled = false;
      deleteButton.textContent = "Delete";
    }
  });

  actions.append(updateLink, improvementsLink, deleteButton);
  row.append(title, paramsDetails, actions);
  return row;
}

async function deleteBuildingRecord(buildingId) {
  // Load related rows first so each child record can be removed.
  const detailsRes = await getFullBuildingDetails(dc, { buildingId });
  const data = detailsRes.data || {};
  const buildingParametersId = data.building?.buildingParameters?.id;

  // Delete every improvement type before deleting the parent building.
  for (const [key, deleteFn] of DELETE_GROUPS) {
    const items = data[key] || [];
    await Promise.all(items.map((item) => deleteFn(dc, { id: item.id })));
  }

  // Remove the parameter row if it exists.
  if (buildingParametersId) {
    await deleteBuildingParameters(dc, { id: buildingParametersId });
  }

  // Delete the building last.
  await deleteBuilding(dc, { id: buildingId });
}

function getFloorAreaRangeLabel(floorArea) {
  const numericFloorArea = Number(floorArea);

  if (!Number.isFinite(numericFloorArea)) {
    return "";
  }

  const matchingRange = FLOOR_AREA_RANGES.find(
    (range) => numericFloorArea >= range.min && numericFloorArea <= range.max
  );

  return matchingRange?.label || "";
}