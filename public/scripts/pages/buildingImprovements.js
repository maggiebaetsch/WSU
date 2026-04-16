import { dc } from "../app.js";
import {
  deleteEnergyResult,
  deleteInsulationRoof,
  deleteInsulationWall,
  deleteOccupancy,
  deleteOrientation,
  deleteWindowGlazing,
  deleteWindowShading,
  deleteWindowSize,
  getAllBuildingParameters,
  getEnergyResultsByBuildingParameters,
  getFullBuildingDetails,
  getInsulationRoofs,
  getInsulationWalls,
  getOccupancies,
  getOrientations,
  getWindowGlazings,
  getWindowShadings,
  getWindowSizes,
} from "../dataconnect-generated/esm/index.esm.js";

const ENERGY_HEADERS = ["Cooling", "Heating", "Total", "Carbon", "Cost"];

// Pick the right delete mutation for each improvement type.
const DELETE_FUNCTIONS = {
  roof: deleteInsulationRoof,
  wall: deleteInsulationWall,
  "window-size": deleteWindowSize,
  "window-glazing": deleteWindowGlazing,
  orientation: deleteOrientation,
  occupancy: deleteOccupancy,
  "window-shading": deleteWindowShading,
};

// Reuse one renderer for every improvement section.
const SECTION_CONFIGS = [
  {
    kind: "roof",
    title: "Roof Insulation",
    itemKey: "insulationRoofs",
    energyKey: "roofResults",
    relationKey: "insulationRoof",
    headers: ["ID", "Type", "Thickness", "R-Value"],
    getValues(item) {
      return [item.id, item.type, item.thickness, item.rValue];
    },
  },
  {
    kind: "wall",
    title: "Wall Insulation",
    itemKey: "insulationWalls",
    energyKey: "wallResults",
    relationKey: "insulationWall",
    headers: ["ID", "Type", "Thickness", "R-Value"],
    getValues(item) {
      return [item.id, item.type, item.thickness, item.rValue];
    },
  },
  {
    kind: "window-size",
    title: "Window Size",
    itemKey: "windowSizes",
    energyKey: "windowSizeResults",
    relationKey: "windowSize",
    headers: ["ID", "Area"],
    getValues(item) {
      return [item.id, item.area];
    },
  },
  {
    kind: "window-glazing",
    title: "Window Glazing",
    itemKey: "windowGlazings",
    energyKey: "windowGlazingResults",
    relationKey: "windowGlazing",
    headers: ["ID", "Type", "R-Value", "SHGC"],
    getValues(item) {
      return [item.id, item.type, item.rValue, item.shgc];
    },
  },
  {
    kind: "orientation",
    title: "Orientation",
    itemKey: "orientations",
    energyKey: "orientationResults",
    relationKey: "orientation",
    headers: ["ID", "Direction"],
    getValues(item) {
      return [item.id, item.direction];
    },
  },
  {
    kind: "occupancy",
    title: "Occupancy",
    itemKey: "occupancies",
    energyKey: "occupancyResults",
    relationKey: "occupancy",
    headers: ["ID", "Number Of People"],
    getValues(item) {
      return [item.id, item.numberOfPeople];
    },
  },
  {
    kind: "window-shading",
    title: "Window Shading",
    itemKey: "windowShadings",
    energyKey: "windowShadingResults",
    relationKey: "windowShading",
    headers: ["ID", "Type", "External"],
    getValues(item) {
      return [item.id, item.type, item.isExternal ? "Yes" : "No"];
    },
  },
];

document.addEventListener("DOMContentLoaded", init);

// Show a fallback when a value is missing.
function formatValue(value) {
  return value ?? "-";
}

// Show a clearer message when no linked energy result exists.
function formatEnergyValue(value) {
  return value == null ? "-NULL-" : String(value);
}

// Pull the energy result fields into table cells.
function createEnergyCells(energyResult) {
  const result = energyResult || {};

  return [
    formatEnergyValue(result.cooling),
    formatEnergyValue(result.heating),
    formatEnergyValue(result.total),
    formatEnergyValue(result.carbon),
    formatEnergyValue(result.cost),
  ];
}

// Build a quick lookup from improvement id to its energy result row.
function buildEnergyResultMap(items, relationKey) {
  return new Map(
    (items || [])
      .filter((item) => item?.[relationKey]?.id)
      .map((item) => [item[relationKey].id, item])
  );
}

// Use an embedded energy result if it exists, otherwise fall back to the lookup map.
function getLinkedEnergyResult(item, energyResultMap) {
  return item.energyResult || energyResultMap.get(item.id);
}

// Turn enum values into text.
function formatEnum(value) {
  return String(value || "")
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // WEST - West
    .join(" ");
}

function renderSection(container, title, headers, rows, createHref) {
  // Build one section card and table.
  const card = document.createElement("div");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "section-header";

  const heading = document.createElement("h2");
  heading.textContent = title;
  header.appendChild(heading);

  if (createHref) {
    const addLink = document.createElement("a");
    addLink.className = "button";
    addLink.href = createHref;
    addLink.textContent = "Add Improvement";
    header.appendChild(addLink);
  }

  card.appendChild(header);

  // Show a simple message when a section has no saved rows yet.
  if (!rows.length) {
    const empty = document.createElement("p");
    empty.textContent = "No records found.";
    card.appendChild(empty);
    container.appendChild(card);
    return;
  }

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-wrap";

  const table = document.createElement("table");
  table.className = "improvements-table";

  // Build the table header from the section config.
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  for (const headerText of headers) {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  }
  thead.appendChild(headerRow);

  // Fill one table row for each saved improvement.
  const tbody = document.createElement("tbody");
  for (const rowValues of rows) {
    const row = document.createElement("tr");
    for (const value of rowValues) {
      const td = document.createElement("td");
      if (value instanceof Node) {
        td.appendChild(value);
      } else {
        td.textContent = formatValue(value);
      }
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }

  table.append(thead, tbody);
  tableWrap.appendChild(table);
  card.appendChild(tableWrap);
  container.appendChild(card);
}

// Create the edit page link for one improvement row.
function buildEditHref(buildingId, buildingParametersId, kind, itemId) {
  return `addImprovement.html?buildingId=${encodeURIComponent(buildingId)}&buildingParametersId=${encodeURIComponent(buildingParametersId || "")}&kind=${encodeURIComponent(kind)}&itemId=${encodeURIComponent(itemId)}`;
}

// Build the Edit and Delete buttons shown in each table row.
function createActionButtons(editHref, onDelete) {
  const wrap = document.createElement("div");
  wrap.className = "row-actions";

  const editLink = document.createElement("a");
  editLink.className = "button";
  editLink.href = editHref;
  editLink.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async () => {
    // Lock the button while the delete request runs.
    deleteButton.disabled = true;
    deleteButton.textContent = "Deleting...";

    try {
      await onDelete();
    } catch (error) {
      deleteButton.disabled = false;
      deleteButton.textContent = "Delete";
      alert(`Failed to delete improvement: ${error.message}`);
    }
  });

  wrap.append(editLink, deleteButton);
  return wrap;
}

async function deleteImprovementRecord(kind, improvementId, energyResultId) {
  // Delete the linked energy result first.
  if (energyResultId) {
    await deleteEnergyResult(dc, { id: energyResultId });
  }

  // Then delete the improvement row itself.
  const deleteFn = DELETE_FUNCTIONS[kind];
  if (!deleteFn) {
    throw new Error("Unknown improvement type.");
  }

  await deleteFn(dc, { id: improvementId });
}

async function loadImprovementData(buildingParametersId) {
  // Return empty lists if the building has no parameters yet.
  if (!buildingParametersId) {
    return {
      insulationRoofs: [],
      insulationWalls: [],
      windowSizes: [],
      windowGlazings: [],
      orientations: [],
      occupancies: [],
      windowShadings: [],
      roofResults: [],
      wallResults: [],
      windowSizeResults: [],
      windowGlazingResults: [],
      orientationResults: [],
      occupancyResults: [],
      windowShadingResults: [],
    };
  }

  const [
    insulationRoofsResponse,
    insulationWallsResponse,
    windowSizesResponse,
    windowGlazingsResponse,
    orientationsResponse,
    occupanciesResponse,
    windowShadingsResponse,
    energyResultsResponse,
  ] = await Promise.all([
    // Load all sections at the same time.
    getInsulationRoofs(dc, { buildingParametersId }),
    getInsulationWalls(dc, { buildingParametersId }),
    getWindowSizes(dc, { buildingParametersId }),
    getWindowGlazings(dc, { buildingParametersId }),
    getOrientations(dc, { buildingParametersId }),
    getOccupancies(dc, { buildingParametersId }),
    getWindowShadings(dc, { buildingParametersId }),
    getEnergyResultsByBuildingParameters(dc, { buildingParametersId }),
  ]);

  // Return one combined object that matches the section config keys.
  return {
    insulationRoofs: insulationRoofsResponse.data?.insulationRoofs || [],
    insulationWalls: insulationWallsResponse.data?.insulationWalls || [],
    windowSizes: windowSizesResponse.data?.windowSizes || [],
    windowGlazings: windowGlazingsResponse.data?.windowGlazings || [],
    orientations: orientationsResponse.data?.orientations || [],
    occupancies: occupanciesResponse.data?.occupancies || [],
    windowShadings: windowShadingsResponse.data?.windowShadings || [],
    roofResults: energyResultsResponse.data?.roofResults || [],
    wallResults: energyResultsResponse.data?.wallResults || [],
    windowSizeResults: energyResultsResponse.data?.windowSizeResults || [],
    windowGlazingResults: energyResultsResponse.data?.windowGlazingResults || [],
    orientationResults: energyResultsResponse.data?.orientationResults || [],
    occupancyResults: energyResultsResponse.data?.occupancyResults || [],
    windowShadingResults: energyResultsResponse.data?.windowShadingResults || [],
  };
}

// Check whether any energy result rows exist for this building.
function hasAnyEnergyResults(improvementData) {
  return SECTION_CONFIGS.some(
    (section) => (improvementData[section.energyKey] || []).length > 0
  );
}

// Show one note card when no energy data has been saved yet.
function renderNoEnergyResultsCard(list) {
  const noteCard = document.createElement("div");
  noteCard.className = "card";
  noteCard.innerHTML =
    "<p><b>Energy results:</b> No energy result records are currently linked to this building's improvements.</p>";
  list.appendChild(noteCard);
}

function createRows(items, section, buildingId, buildingParametersId, improvementData) {
  // Match each improvement with its linked energy result.
  const energyMap = buildEnergyResultMap(
    improvementData[section.energyKey],
    section.relationKey
  );

  return items.map((item) => {
    // Pull the linked energy result for this specific improvement row.
    const energyResult = getLinkedEnergyResult(item, energyMap);

    return [
      ...section.getValues(item),
      ...createEnergyCells(energyResult),
      createActionButtons(
        buildEditHref(buildingId, buildingParametersId, section.kind, item.id),
        async () => {
          // Ask before deleting a saved improvement.
          const confirmed = window.confirm(
            `Delete this ${section.kind.replace("-", " ")} record?`
          );

          if (!confirmed) {
            return;
          }

          await deleteImprovementRecord(section.kind, item.id, energyMap.get(item.id)?.id);
          window.location.reload();
        }
      ),
    ];
  });
}

async function init() {
  // Read the selected building from the URL.
  const params = new URLSearchParams(window.location.search);
  const buildingId = params.get("buildingId");
  const buildingParametersIdFromUrl = params.get("buildingParametersId");
  const list = document.getElementById("improvements-list");
  const title = document.getElementById("page-title");
  const subtitle = document.getElementById("page-subtitle");

  if (!buildingId) {
    list.innerHTML = "<p>Missing building ID.</p>";
    return;
  }

  try {
    // Load the building and its parameter record together.
    const [detailsResponse, parametersResponse] = await Promise.all([
      getFullBuildingDetails(dc, { buildingId }),
      getAllBuildingParameters(dc),
    ]);
    const data = detailsResponse.data || {};
    const building = data.building;
    const buildingParameters =
      building?.buildingParameters ||
      parametersResponse.data?.buildingParameterss?.find(
        (item) => item.id === buildingParametersIdFromUrl || item.building.id === buildingId
      );
    const buildingParametersId = buildingParameters?.id || buildingParametersIdFromUrl;

    // Stop early if the selected building does not exist.
    if (!building) {
      list.innerHTML = "<p>Building not found.</p>";
      return;
    }

    // Clear the page before rebuilding it.
    title.textContent = "Building Improvements";
    subtitle.textContent = `Viewing improvement records for ${building.name || "this building"}.`;
    list.replaceChildren();

    // Always show the saved building parameters first.
    renderParametersCard(list, building, buildingParameters);

    // Load every improvement section before rendering the tables.
    const improvementData = await loadImprovementData(buildingParametersId);

    if (!hasAnyEnergyResults(improvementData)) {
      renderNoEnergyResultsCard(list);
    }

    // Render one table section for each improvement type.
    for (const section of SECTION_CONFIGS) {
      const items = improvementData[section.itemKey];
      const rows = createRows(
        items,
        section,
        buildingId,
        buildingParametersId,
        improvementData
      );

      renderSection(
        list,
        section.title,
        [...section.headers, ...ENERGY_HEADERS, "Actions"],
        rows,
        `addImprovement.html?buildingId=${encodeURIComponent(buildingId)}&buildingParametersId=${encodeURIComponent(buildingParametersId || "")}&kind=${section.kind}`
      );
    }
  } catch (error) {
    // Show a simple page message if any request fails.
    list.innerHTML = `<p>Error loading improvements: ${error.message}</p>`;
  }
}

function renderParametersCard(list, building, buildingParameters) {
  // Show the saved building parameters above the tables.
  const parametersCard = document.createElement("div");
  parametersCard.className = "card";

  const parametersHeading = document.createElement("h2");
  parametersHeading.textContent = "Building Parameters";
  parametersCard.appendChild(parametersHeading);

  // Render the saved parameter values in a small summary table.
  if (buildingParameters) {
    const parametersTableWrap = document.createElement("div");
    parametersTableWrap.className = "table-wrap";

    const parametersTable = document.createElement("table");
    parametersTable.className = "improvements-table";
    parametersTable.innerHTML = `
      <thead>
        <tr>
          <th>Building Name</th>
          <th>Building Parameters ID</th>
          <th>Climate</th>
          <th>Floor Area</th>
          <th>Building Type</th>
          <th>Envelope</th>
          <th>Air Conditioned</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${formatValue(building.name || "Unnamed Building")}</td>
          <td>${formatValue(buildingParameters.id)}</td>
          <td>${formatValue(formatEnum(buildingParameters.climate))}</td>
          <td>${formatValue(buildingParameters.floorArea)}</td>
          <td>${formatValue(formatEnum(buildingParameters.buildingType))}</td>
          <td>${formatValue(formatEnum(buildingParameters.envelope))}</td>
          <td>${buildingParameters.isAC ? "Yes" : "No"}</td>
        </tr>
      </tbody>
    `;

    parametersTableWrap.appendChild(parametersTable);
    parametersCard.appendChild(parametersTableWrap);
  } else {
    // Show a message when parameters do not exist yet.
    const empty = document.createElement("p");
    empty.textContent = "No building parameters found for this building.";
    parametersCard.appendChild(empty);
  }

  list.appendChild(parametersCard);
}