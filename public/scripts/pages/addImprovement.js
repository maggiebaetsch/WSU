import { dc } from "../app.js";
import {
  assignInsulationRoofEnergyResult,
  assignInsulationWallEnergyResult,
  assignOccupancyEnergyResult,
  assignOrientationEnergyResult,
  assignWindowGlazingEnergyResult,
  assignWindowShadingEnergyResult,
  assignWindowSizeEnergyResult,
  createInsulationRoofWithEnergyResult,
  createInsulationWallWithEnergyResult,
  createOccupancyWithEnergyResult,
  createOrientationWithEnergyResult,
  createWindowGlazingWithEnergyResult,
  createWindowShadingWithEnergyResult,
  createWindowSizeWithEnergyResult,
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
  updateEnergyResult,
  updateInsulationRoof,
  updateInsulationWall,
  updateOccupancy,
  updateOrientation,
  updateWindowGlazing,
  updateWindowShading,
  updateWindowSize,
} from "../dataconnect-generated/esm/index.esm.js";

const ENERGY_FIELDS = ["cooling", "heating", "total", "carbon", "cost"];

// Each improvement type defines its fields and the matching Data Connect actions.
const configByKind = {
  roof: {
    // Static page text and query keys for roof records.
    title: "Add Roof Insulation",
    editTitle: "Edit Roof Insulation",
    improvementType: "INSULATION_ROOF",
    itemKey: "insulationRoofs",
    energyKey: "roofResults",
    relationKey: "insulationRoof",
    fields: `
      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" name="type" required>
          <option value="">Select Material</option>
          <option value="XPS">XPS</option>
          <option value="Rockwool">Rockwool</option>
          <option value="Sheepwool">Sheepwool</option>
          <option value="Cork">Cork</option>
          <option value="Cladding">Cladding</option>
          <option value="WoodChips">Wood Chips</option>
          <option value="Cellulose">Cellulose</option>
          <option value="SprayFoam">Polyurethane Spray Foam</option>
          <option value="PET">PET</option>
          <option value="Glasswool">Glasswool</option>
        </select>
      </div>
      <div class="form-group">
        <label for="thickness">Thickness</label>
        <input type="number" id="thickness" name="thickness" step="1" min="0" required />
      </div>
      <div class="form-group">
        <label for="rValue">R-Value</label>
        <input type="number" id="rValue" name="rValue" step="0.01" min="0" required />
      </div>
    `,
    create: (vars) => createInsulationRoofWithEnergyResult(dc, vars),
    update: (vars) => updateInsulationRoof(dc, vars),
    assignEnergy: (vars) => assignInsulationRoofEnergyResult(dc, vars),
    // Build the payload used when creating a new roof record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        type: formData.get("type"),
        thickness: parseFloat(formData.get("thickness")),
        rValue: parseFloat(formData.get("rValue")),
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        type: formData.get("type"),
        thickness: parseFloat(formData.get("thickness")),
        rValue: parseFloat(formData.get("rValue")),
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("insulationRoofId", itemId, formData);
    },
    // Fill the form with values from the saved roof record.
    populateItem(item) {
      setFieldValue("type", item.type);
      setFieldValue("thickness", item.thickness);
      setFieldValue("rValue", item.rValue);
    },
  },
  wall: {
    // Static page text and query keys for wall records.
    title: "Add Wall Insulation",
    editTitle: "Edit Wall Insulation",
    improvementType: "INSULATION_WALL",
    itemKey: "insulationWalls",
    energyKey: "wallResults",
    relationKey: "insulationWall",
    fields: `
      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" name="type" required>
          <option value="">Select Material</option>
          <option value="XPS">XPS</option>
          <option value="Rockwool">Rockwool</option>
          <option value="Sheepwool">Sheepwool</option>
          <option value="Cork">Cork</option>
          <option value="Cladding">Cladding</option>
          <option value="WoodChips">Wood Chips</option>
          <option value="Cellulose">Cellulose</option>
          <option value="SprayFoam">Polyurethane Spray Foam</option>
          <option value="PET">PET</option>
          <option value="Glasswool">Glasswool</option>
        </select>
      </div>
      <div class="form-group">
        <label for="thickness">Thickness</label>
        <input type="number" id="thickness" name="thickness" step="1" min="0" required />
      </div>
      <div class="form-group">
        <label for="rValue">R-Value</label>
        <input type="number" id="rValue" name="rValue" step="0.01" min="0" required />
      </div>
    `,
    create: (vars) => createInsulationWallWithEnergyResult(dc, vars),
    update: (vars) => updateInsulationWall(dc, vars),
    assignEnergy: (vars) => assignInsulationWallEnergyResult(dc, vars),
    // Build the payload used when creating a new wall record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        type: formData.get("type"),
        thickness: parseFloat(formData.get("thickness")),
        rValue: parseFloat(formData.get("rValue")),
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        type: formData.get("type"),
        thickness: parseFloat(formData.get("thickness")),
        rValue: parseFloat(formData.get("rValue")),
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("insulationWallId", itemId, formData);
    },
    // Fill the form with values from the saved wall record.
    populateItem(item) {
      setFieldValue("type", item.type);
      setFieldValue("thickness", item.thickness);
      setFieldValue("rValue", item.rValue);
    },
  },
  "window-size": {
    // Static page text and query keys for window size records.
    title: "Add Window Size",
    editTitle: "Edit Window Size",
    improvementType: "WINDOW_SIZE",
    itemKey: "windowSizes",
    energyKey: "windowSizeResults",
    relationKey: "windowSize",
    fields: `
      <div class="form-group">
        <label for="area">Area (m²)</label>
        <input type="number" id="area" name="area" step="0.01" min="0" required />
      </div>
    `,
    create: (vars) => createWindowSizeWithEnergyResult(dc, vars),
    update: (vars) => updateWindowSize(dc, vars),
    assignEnergy: (vars) => assignWindowSizeEnergyResult(dc, vars),
    // Build the payload used when creating a new window size record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        area: parseFloat(formData.get("area")),
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        area: parseFloat(formData.get("area")),
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("windowSizeId", itemId, formData);
    },
    // Fill the form with values from the saved window size record.
    populateItem(item) {
      setFieldValue("area", item.area);
    },
  },
  "window-glazing": {
    // Static page text and query keys for glazing records.
    title: "Add Window Glazing",
    editTitle: "Edit Window Glazing",
    improvementType: "WINDOW_GLAZING",
    itemKey: "windowGlazings",
    energyKey: "windowGlazingResults",
    relationKey: "windowGlazing",
    fields: `
      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" name="type" required>
          <option value="">Select Glazing</option>
          <option value="sg">Single Glazed</option>
          <option value="dg">Double Glazed</option>
          <option value="tg">Triple Glazed</option>
          <option value="low-esg">Low-E Single Glazed</option>
          <option value="low-edg">Low-E Double Glazed</option>
          <option value="low-etg">Low-E Triple Glazed</option>
        </select>
      </div>
      <div class="form-group">
        <label for="rValue">R-Value</label>
        <input type="number" id="rValue" name="rValue" step="0.01" min="0" required />
      </div>
      <div class="form-group">
        <label for="shgc">SHGC</label>
        <input type="number" id="shgc" name="shgc" step="0.01" min="0" max="1" required />
      </div>
    `,
    create: (vars) => createWindowGlazingWithEnergyResult(dc, vars),
    update: (vars) => updateWindowGlazing(dc, vars),
    assignEnergy: (vars) => assignWindowGlazingEnergyResult(dc, vars),
    // Build the payload used when creating a new glazing record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        type: formData.get("type"),
        rValue: parseFloat(formData.get("rValue")),
        shgc: parseFloat(formData.get("shgc")),
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        type: formData.get("type"),
        rValue: parseFloat(formData.get("rValue")),
        shgc: parseFloat(formData.get("shgc")),
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("windowGlazingId", itemId, formData);
    },
    // Fill the form with values from the saved glazing record.
    populateItem(item) {
      setFieldValue("type", item.type);
      setFieldValue("rValue", item.rValue);
      setFieldValue("shgc", item.shgc);
    },
  },
  orientation: {
    // Static page text and query keys for orientation records.
    title: "Add Orientation",
    editTitle: "Edit Orientation",
    improvementType: "ORIENTATION",
    itemKey: "orientations",
    energyKey: "orientationResults",
    relationKey: "orientation",
    fields: `
      <div class="form-group">
        <label for="direction">Direction</label>
        <select id="direction" name="direction" required>
          <option value="North">North</option>
          <option value="East">East</option>
          <option value="South">South</option>
          <option value="West">West</option>
          <option value="Northeast">Northeast</option>
          <option value="Southeast">Southeast</option>
          <option value="Southwest">Southwest</option>
          <option value="Northwest">Northwest</option>
          <option value="North-northeast">North-northeast</option>
          <option value="East-northeast">East-northeast</option>
          <option value="East-southeast">East-southeast</option>
          <option value="South-southeast">South-southeast</option>
          <option value="South-southwest">South-southwest</option>
          <option value="West-southwest">West-southwest</option>
          <option value="West-northwest">West-northwest</option>
          <option value="North-northwest">North-northwest</option>
        </select>
      </div>
    `,
    create: (vars) => createOrientationWithEnergyResult(dc, vars),
    update: (vars) => updateOrientation(dc, vars),
    assignEnergy: (vars) => assignOrientationEnergyResult(dc, vars),
    // Build the payload used when creating a new orientation record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        direction: formData.get("direction"),
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        direction: formData.get("direction"),
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("orientationId", itemId, formData);
    },
    // Fill the form with values from the saved orientation record.
    populateItem(item) {
      setFieldValue("direction", item.direction);
    },
  },
  occupancy: {
    // Static page text and query keys for occupancy records.
    title: "Add Occupancy",
    editTitle: "Edit Occupancy",
    improvementType: "OCCUPANCY",
    itemKey: "occupancies",
    energyKey: "occupancyResults",
    relationKey: "occupancy",
    fields: `
      <div class="form-group">
        <label for="numberOfPeople">Number Of People</label>
        <input type="number" id="numberOfPeople" name="numberOfPeople" step="1" min="0" required />
      </div>
    `,
    create: (vars) => createOccupancyWithEnergyResult(dc, vars),
    update: (vars) => updateOccupancy(dc, vars),
    assignEnergy: (vars) => assignOccupancyEnergyResult(dc, vars),
    // Build the payload used when creating a new occupancy record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        numberOfPeople: parseInt(formData.get("numberOfPeople"), 10),
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        numberOfPeople: parseInt(formData.get("numberOfPeople"), 10),
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("occupancyId", itemId, formData);
    },
    // Fill the form with values from the saved occupancy record.
    populateItem(item) {
      setFieldValue("numberOfPeople", item.numberOfPeople);
    },
  },
  "window-shading": {
    // Static page text and query keys for shading records.
    title: "Add Window Shading",
    editTitle: "Edit Window Shading",
    improvementType: "WINDOW_SHADING",
    itemKey: "windowShadings",
    energyKey: "windowShadingResults",
    relationKey: "windowShading",
    fields: `
      <div class="form-group">
        <label for="type">Type</label>
        <select id="type" name="type" required>
          <option value="venetian">Venetian Blinds</option>
          <option value="roller">Roller Blinds</option>
          <option value="drapes">Drapes</option>
          <option value="shaderolls">Shade Rolls</option>
          <option value="shutters">External Shutters</option>
          <option value="awnings">Awnings</option>
          <option value="louvres">Louvres</option>
        </select>
      </div>
      <div class="form-group">
        <label for="isExternal">External</label>
        <select id="isExternal" name="isExternal" required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    `,
    create: (vars) => createWindowShadingWithEnergyResult(dc, vars),
    update: (vars) => updateWindowShading(dc, vars),
    assignEnergy: (vars) => assignWindowShadingEnergyResult(dc, vars),
    // Build the payload used when creating a new shading record.
    buildVars(formData, buildingParametersId) {
      return {
        id: crypto.randomUUID(),
        buildingParametersId,
        type: formData.get("type"),
        isExternal: formData.get("isExternal") === "true",
        ...getEnergyValues(formData),
      };
    },
    buildUpdateVars(formData, itemId) {
      return {
        id: itemId,
        type: formData.get("type"),
        isExternal: formData.get("isExternal") === "true",
      };
    },
    buildAssignEnergyVars(formData, itemId) {
      return buildAssignEnergyVars("windowShadingId", itemId, formData);
    },
    // Fill the form with values from the saved shading record.
    populateItem(item) {
      setFieldValue("type", item.type);
      setFieldValue("isExternal", String(item.isExternal));
    },
  },
};

document.addEventListener("DOMContentLoaded", init);

// Collect the shared energy inputs from the form.
function getEnergyValues(formData) {
  return Object.fromEntries(
    ENERGY_FIELDS.map((field) => [field, parseFloat(formData.get(field))])
  );
}

// Build the payload used when attaching a new energy result to an improvement.
function buildAssignEnergyVars(idKey, itemId, formData) {
  return {
    [idKey]: itemId,
    ...getEnergyValues(formData),
  };
}

// Build the payload used when an existing energy result already exists.
function buildEnergyUpdateVars(energyResultId, improvementType, formData) {
  return {
    id: energyResultId,
    improvementType,
    ...getEnergyValues(formData),
  };
}

// Set one form field if the value exists.
function setFieldValue(id, value) {
  const element = document.getElementById(id);
  if (element && value != null) {
    element.value = String(value);
  }
}

// Fill the shared energy fields when editing an existing record.
function populateEnergyFields(energyResult) {
  if (!energyResult) {
    return;
  }

  setFieldValue("cooling", energyResult.cooling);
  setFieldValue("heating", energyResult.heating);
  setFieldValue("total", energyResult.total);
  setFieldValue("carbon", energyResult.carbon);
  setFieldValue("cost", energyResult.cost);
}

// Build a lookup from improvement id to energy result row.
function buildEnergyResultMap(items, relationKey) {
  return new Map(
    (items || [])
      .filter((item) => item?.[relationKey]?.id)
      .map((item) => [item[relationKey].id, item])
  );
}

async function loadEditData(config, buildingParametersId, itemId) {
  // Edit mode needs both the improvement row and its linked energy result.
  const [itemsResponse, energyResultsResponse] = await Promise.all([
    getItemsByKind(config.itemKey, buildingParametersId),
    getEnergyResultsByBuildingParameters(dc, { buildingParametersId }),
  ]);

  const items = itemsResponse.data?.[config.itemKey] || [];
  const energyResults = energyResultsResponse.data?.[config.energyKey] || [];
  const energyMap = buildEnergyResultMap(energyResults, config.relationKey);

  // Return both pieces so the form can fill the improvement and energy fields.
  return {
    item: items.find((entry) => entry.id === itemId) || null,
    energyResult: energyMap.get(itemId) || null,
  };
}

// Pick the correct query for the selected improvement type.
function getItemsByKind(itemKey, buildingParametersId) {
  const loaders = {
    insulationRoofs: getInsulationRoofs,
    insulationWalls: getInsulationWalls,
    windowSizes: getWindowSizes,
    windowGlazings: getWindowGlazings,
    orientations: getOrientations,
    occupancies: getOccupancies,
    windowShadings: getWindowShadings,
  };

  return loaders[itemKey](dc, { buildingParametersId });
}

// Update the page text for create mode.
function showCreateMode(config, buildingName, pageTitle, pageSubtitle) {
  pageTitle.textContent = config.title;
  pageSubtitle.textContent =
    `Create a new ${config.title.replace("Add ", "").toLowerCase()} record for ${buildingName || "this building"} and attach an energy result.`;
}

// Update the page text and button label for edit mode.
function showEditMode(config, buildingName, pageTitle, pageSubtitle, submitButton) {
  pageTitle.textContent = config.editTitle;
  pageSubtitle.textContent =
    `Update this ${config.editTitle.replace("Edit ", "").toLowerCase()} record for ${buildingName || "this building"}.`;
  submitButton.textContent = "Save Changes";
}

async function init() {
  // The page switches between create and edit mode based on the URL params.
  const params = new URLSearchParams(window.location.search);
  const buildingId = params.get("buildingId");
  const buildingParametersIdFromUrl = params.get("buildingParametersId");
  const kind = params.get("kind");
  const itemId = params.get("itemId");
  const config = configByKind[kind];
  const form = document.getElementById("improvement-form");
  const dynamicFields = document.getElementById("dynamic-fields");
  const pageTitle = document.getElementById("page-title");
  const pageSubtitle = document.getElementById("page-subtitle");
  const backLink = document.getElementById("back-link");
  const submitButton = document.getElementById("submit-button");
  const isEditMode = Boolean(itemId);

  // Stop early if the page is missing the building id or improvement type.
  if (!buildingId || !config) {
    form.innerHTML = "<p>Missing building or improvement type.</p>";
    return;
  }

  // Insert the fields for the selected improvement type.
  dynamicFields.innerHTML = config.fields;
  backLink.href = `buildingImprovements.html?buildingId=${encodeURIComponent(buildingId)}${buildingParametersIdFromUrl ? `&buildingParametersId=${encodeURIComponent(buildingParametersIdFromUrl)}` : ""}`;

  try {
    // Load the building and its parameter record together.
    const [detailsResponse, parametersResponse] = await Promise.all([
      getFullBuildingDetails(dc, { buildingId }),
      getAllBuildingParameters(dc),
    ]);
    const building = detailsResponse.data?.building;
    const buildingParameters =
      (buildingParametersIdFromUrl ? { id: buildingParametersIdFromUrl } : null) ||
      building?.buildingParameters ||
      parametersResponse.data?.buildingParameterss?.find(
        (item) => item.building.id === buildingId
      );
    const buildingParametersId = buildingParameters?.id;

    // Stop early if the building cannot accept improvements yet.
    if (!building || !buildingParametersId) {
      form.innerHTML = `
        <div class="card">
          <p>This building does not have building parameters yet. Create parameters before adding improvements.</p>
        </div>
        <div class="button-group">
          <a href="parameters.html?buildingId=${encodeURIComponent(buildingId)}" class="button">Create Parameters</a>
          <a href="buildingImprovements.html?buildingId=${encodeURIComponent(buildingId)}" class="button">Back</a>
        </div>
      `;
      return;
    }

    let existingEnergyResult = null;

    // In edit mode, load the current row values before showing the form.
    if (isEditMode) {
      const existingData = await loadEditData(config, buildingParametersId, itemId);
      const existingItem = existingData.item;
      existingEnergyResult = existingData.energyResult;

      if (!existingItem) {
        form.innerHTML = "<p>Improvement not found.</p>";
        return;
      }

      showEditMode(config, building.name, pageTitle, pageSubtitle, submitButton);
      config.populateItem(existingItem);
      // Energy fields are shared, so they are filled separately.
      populateEnergyFields(existingEnergyResult);
    } else {
      showCreateMode(config, building.name, pageTitle, pageSubtitle);
    }

    form.addEventListener("submit", async (event) => {
      // Keep the page from doing a normal browser form submit.
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Read the latest form values right before saving.
      const formData = new FormData(form);
      try {
        if (isEditMode) {
          // Update the improvement first, then update or attach its energy result.
          await config.update(config.buildUpdateVars(formData, itemId));

          // Reuse the linked energy row when it already exists.
          if (existingEnergyResult?.id) {
            await updateEnergyResult(
              dc,
              buildEnergyUpdateVars(existingEnergyResult.id, config.improvementType, formData)
            );
          } else {
            // Otherwise attach a new energy result to the saved improvement row.
            await config.assignEnergy(config.buildAssignEnergyVars(formData, itemId));
          }
        } else {
          // Create both the improvement and its energy result in one call.
          await config.create(config.buildVars(formData, buildingParametersId));
        }

        // Return to the improvement list after saving.
        window.location.href = `buildingImprovements.html?buildingId=${encodeURIComponent(buildingId)}&buildingParametersId=${encodeURIComponent(buildingParametersId)}`;
      } catch (error) {
        console.error("SAVE IMPROVEMENT ERROR:", error);
        alert(`Failed to save improvement: ${error.message}`);
      }
    });
  } catch (error) {
    // Show a simple message if the page cannot load its data.
    form.innerHTML = `<p>Error loading building: ${error.message}</p>`;
  }
}