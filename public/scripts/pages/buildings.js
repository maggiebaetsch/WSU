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

    if (buildings.length === 0) {
      container.textContent = "No buildings found.";
      return;
    }

    // Clear the loading text before adding cards.
    container.replaceChildren();

    for (const building of buildings) {
      container.appendChild(createBuildingCard(building, parametersByBuildingId.get(building.id), container));
    }
  } catch (error) {
    container.innerHTML = `<p>Error loading buildings: ${error.message}</p>`;
  }
}

// Build a lookup from building id to its parameter record.
function buildParametersMap(buildingParameters) {
  return new Map(buildingParameters.map((item) => [item.building.id, item]));
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
    <p><b>Floor Area:</b> ${buildingParameters.floorArea}</p>
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
function createBuildingCard(building, buildingParameters, container) {
  const row = document.createElement("div");
  row.className = "card";

  const title = document.createElement("p");
  title.innerHTML = `<b>${building.name || "Unnamed Building"}</b>`;

  const buildingId = document.createElement("p");
  buildingId.textContent = `Building ID: ${building.id}`;

  const buildingParametersId = buildingParameters?.id || "Not created";

  const paramsId = document.createElement("p");
  paramsId.textContent = `Building Parameters ID: ${buildingParametersId}`;

  const paramsDetails = createParamsDetails(buildingParameters);

  const actions = document.createElement("div");
  actions.className = "button-group";

  const updateLink = document.createElement("a");
  updateLink.className = "button";
  updateLink.href = `parameters.html?buildingId=${encodeURIComponent(building.id)}`;
  updateLink.textContent = buildingParametersId === "Not created" ? "Add Parameters" : "Update Parameters";

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
      await deleteBuildingRecord(building.id);
      row.remove();

      if (!container.children.length) {
        container.textContent = EMPTY_MESSAGE;
      }
    } catch (error) {
      alert(`Failed to delete building: ${error.message}`);
      deleteButton.disabled = false;
      deleteButton.textContent = "Delete";
    }
  });

  actions.append(updateLink, improvementsLink, deleteButton);
  row.append(title, buildingId, paramsId, paramsDetails, actions);
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