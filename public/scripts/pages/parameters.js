import { dc } from "../app.js";
import {
  createBuilding,
  createBuildingParameters,
  getAllBuildingParameters,
  getBuildingById,
  updateBuilding,
  updateBuildingParameters,
} from "../dataconnect-generated/esm/index.esm.js";

// Form option labels need to be converted to the enum values stored in Data Connect.
const FORM_VALUE_MAPS = {
  climate: {
    Temperate: "TEMPERATE",
    Tropical: "TROPICAL",
    DryAridSemiarid: "DRY_ARID_SEMIARID",
    Continental: "CONTINENTAL",
    PolarAlpine: "POLAR_ALPINE",
  },
  buildingType: {
    Residential: "RESIDENTIAL",
    Office: "OFFICE",
    Hotel: "HOTEL",
    Governmental: "GOVERNMENTAL",
    School: "SCHOOL",
    Hospital: "HOSPITAL",
    Retail: "RETAIL",
    AgedCare: "AGED_CARE",
    Industrial: "INDUSTRIAL",
  },
  envelope: {
    HighMass: "HIGH_MASS",
    LowMass: "LOW_MASS",
    Glazed: "GLAZED",
  },
};

const REVERSE_FORM_VALUE_MAPS = {
  climate: reverseMap(FORM_VALUE_MAPS.climate),
  buildingType: reverseMap(FORM_VALUE_MAPS.buildingType),
  envelope: reverseMap(FORM_VALUE_MAPS.envelope),
};

document.addEventListener("DOMContentLoaded", init);

// Flip a label-to-enum map into an enum-to-label map.
function reverseMap(map) {
  return Object.fromEntries(Object.entries(map).map(([key, value]) => [value, key]));
}

// Read the current form values and convert them to stored enum values.
function getFormValues(formData) {
  return {
    name: formData.get("buildingName"),
    climate: FORM_VALUE_MAPS.climate[formData.get("climate")],
    floorArea: String(formData.get("floorArea")),
    buildingType: FORM_VALUE_MAPS.buildingType[formData.get("buildingType")],
    envelope: FORM_VALUE_MAPS.envelope[formData.get("envelope")],
    isAC: formData.get("airConditioned") === "on",
  };
}

// Fill the form with values from an existing building record.
function fillForm(building, buildingParameters) {
  document.getElementById("building-name").value = building.name || "";

  if (!buildingParameters) {
    return;
  }

  localStorage.setItem("buildingParametersId", buildingParameters.id);
  document.getElementById("climate").value =
    REVERSE_FORM_VALUE_MAPS.climate[buildingParameters.climate] || "";
  document.getElementById("floor-area").value = buildingParameters.floorArea || "";
  document.getElementById("building-type").value =
    REVERSE_FORM_VALUE_MAPS.buildingType[buildingParameters.buildingType] || "";
  document.getElementById("envelope").value =
    REVERSE_FORM_VALUE_MAPS.envelope[buildingParameters.envelope] || "";
  document.getElementById("air-conditioned").checked = Boolean(buildingParameters.isAC);
}

// Create a building if needed, or update the existing one.
async function saveBuilding(buildingId, name) {
  if (buildingId) {
    await updateBuilding(dc, { id: buildingId, name });
    return buildingId;
  }

  const buildingRes = await createBuilding(dc, { name });
  return buildingRes.data?.building_insert?.id || buildingRes.data?.building_insert?.[0]?.id;
}

async function saveBuildingParameters(buildingId, buildingParametersId, values) {
  // Building and building parameters are separate records, so they save in two steps.
  const params = {
    climate: values.climate,
    floorArea: values.floorArea,
    buildingType: values.buildingType,
    envelope: values.envelope,
    isAC: values.isAC,
  };

  if (buildingParametersId) {
    await updateBuildingParameters(dc, { id: buildingParametersId, ...params });
    return buildingParametersId;
  }

  const paramsRes = await createBuildingParameters(dc, { buildingId, ...params });
  return paramsRes.data?.buildingParameters_insert?.id || paramsRes.data?.buildingParameters_insert?.[0]?.id;
}

async function init() {
  // Find the form and page elements used in both create and update mode.
  const form = document.getElementById("building-form");
  const pageTitle = document.getElementById("page-title");
  const pageSubtitle = document.getElementById("page-subtitle");
  const backLink = document.getElementById("back-link");
  const submitButton = document.getElementById("next-button");
  const buildingIdFromUrl = new URLSearchParams(window.location.search).get("buildingId");

  let existingBuildingId = buildingIdFromUrl;
  let existingBuildingParametersId = null;

  // If a building id exists in the URL, switch the page into update mode.
  if (buildingIdFromUrl) {
    pageTitle.textContent = "Update Building Parameters";
    pageSubtitle.textContent = "Review the saved values, make your changes, and submit the update.";
    backLink.href = "buildings.html";
    backLink.textContent = "Back to Buildings";
    submitButton.textContent = "Save Changes";
    existingBuildingParametersId = await loadExistingBuilding(buildingIdFromUrl);
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Read the latest values before saving.
    const formData = new FormData(form);
    const values = getFormValues(formData);

    try {
      // Save the building first, then save its parameter record.
      const buildingId = await saveBuilding(existingBuildingId, values.name);
      const buildingParametersId = await saveBuildingParameters(
        buildingId,
        existingBuildingParametersId,
        values
      );

      existingBuildingId = buildingId;
      existingBuildingParametersId = buildingParametersId;
      localStorage.setItem("buildingParametersId", buildingParametersId);
      // Continue to the improvement list after saving.
      window.location.href = `buildingImprovements.html?buildingId=${encodeURIComponent(buildingId)}&buildingParametersId=${encodeURIComponent(buildingParametersId)}`;
    } catch (error) {
      console.error("PARAMETERS SAVE ERROR:", error);
      alert("Failed to save building. Check console.");
    }
  });
}

async function loadExistingBuilding(buildingId) {
  try {
    // Load the building row and its parameter row together.
    const [buildingResponse, parametersResponse] = await Promise.all([
      getBuildingById(dc, { id: buildingId }),
      getAllBuildingParameters(dc),
    ]);

    const building = buildingResponse.data?.building;
    const buildingParameters =
      building?.buildingParameters ||
      parametersResponse.data?.buildingParameterss?.find(
        (item) => item.building.id === buildingId
      );

    if (!building) {
      return null;
    }

    // Fill the form so the user can edit the current values.
    fillForm(building, buildingParameters);

    return buildingParameters?.id || null;
  } catch (error) {
    // Fall back to an empty form if loading fails.
    console.error("LOAD BUILDING ERROR:", error);
    return null;
  }
}