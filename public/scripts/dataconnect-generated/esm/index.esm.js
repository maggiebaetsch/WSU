import { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-data-connect.js";

export const BuildingType = {
  RESIDENTIAL: "RESIDENTIAL",
  OFFICE: "OFFICE",
  HOTEL: "HOTEL",
  GOVERNMENTAL: "GOVERNMENTAL",
  SCHOOL: "SCHOOL",
  HOSPITAL: "HOSPITAL",
  RETAIL: "RETAIL",
  AGED_CARE: "AGED_CARE",
  INDUSTRIAL: "INDUSTRIAL",
}

export const Climate = {
  TROPICAL: "TROPICAL",
  DRY_ARID_SEMIARID: "DRY_ARID_SEMIARID",
  TEMPERATE: "TEMPERATE",
  CONTINENTAL: "CONTINENTAL",
  POLAR_ALPINE: "POLAR_ALPINE",
}

export const EnvelopeType = {
  HIGH_MASS: "HIGH_MASS",
  LOW_MASS: "LOW_MASS",
  GLAZED: "GLAZED",
}

export const connectorConfig = {
  connector: 'example',
  service: 'wsu',
  location: 'us-east4'
};
export const getEnergyResultByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnergyResultById', inputVars);
}
getEnergyResultByIdRef.operationName = 'GetEnergyResultById';

export function getEnergyResultById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getEnergyResultByIdRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getEnergyResultsByBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnergyResultsByBuildingParameters', inputVars);
}
getEnergyResultsByBuildingParametersRef.operationName = 'GetEnergyResultsByBuildingParameters';

export function getEnergyResultsByBuildingParameters(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getEnergyResultsByBuildingParametersRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getEnergyResultsByBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnergyResultsByBuilding', inputVars);
}
getEnergyResultsByBuildingRef.operationName = 'GetEnergyResultsByBuilding';

export function getEnergyResultsByBuilding(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getEnergyResultsByBuildingRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getAllBuildingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllBuildings');
}
getAllBuildingsRef.operationName = 'GetAllBuildings';

export function getAllBuildings(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllBuildingsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getBuildingByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetBuildingById', inputVars);
}
getBuildingByIdRef.operationName = 'GetBuildingById';

export function getBuildingById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getBuildingByIdRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getAllBuildingParametersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllBuildingParameters');
}
getAllBuildingParametersRef.operationName = 'GetAllBuildingParameters';

export function getAllBuildingParameters(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllBuildingParametersRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getFullBuildingDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFullBuildingDetails', inputVars);
}
getFullBuildingDetailsRef.operationName = 'GetFullBuildingDetails';

export function getFullBuildingDetails(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getFullBuildingDetailsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getWindowSizesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWindowSizes', inputVars);
}
getWindowSizesRef.operationName = 'GetWindowSizes';

export function getWindowSizes(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getWindowSizesRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getInsulationRoofsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInsulationRoofs', inputVars);
}
getInsulationRoofsRef.operationName = 'GetInsulationRoofs';

export function getInsulationRoofs(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getInsulationRoofsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getInsulationWallsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInsulationWalls', inputVars);
}
getInsulationWallsRef.operationName = 'GetInsulationWalls';

export function getInsulationWalls(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getInsulationWallsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getWindowGlazingsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWindowGlazings', inputVars);
}
getWindowGlazingsRef.operationName = 'GetWindowGlazings';

export function getWindowGlazings(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getWindowGlazingsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getOrientationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetOrientations', inputVars);
}
getOrientationsRef.operationName = 'GetOrientations';

export function getOrientations(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getOrientationsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getOccupanciesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetOccupancies', inputVars);
}
getOccupanciesRef.operationName = 'GetOccupancies';

export function getOccupancies(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getOccupanciesRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const getWindowShadingsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWindowShadings', inputVars);
}
getWindowShadingsRef.operationName = 'GetWindowShadings';

export function getWindowShadings(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getWindowShadingsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}

export const updateBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBuilding', inputVars);
}
updateBuildingRef.operationName = 'UpdateBuilding';

export function updateBuilding(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateBuildingRef(dcInstance, inputVars));
}

export const updateBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBuildingParameters', inputVars);
}
updateBuildingParametersRef.operationName = 'UpdateBuildingParameters';

export function updateBuildingParameters(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateBuildingParametersRef(dcInstance, inputVars));
}

export const updateInsulationRoofRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInsulationRoof', inputVars);
}
updateInsulationRoofRef.operationName = 'UpdateInsulationRoof';

export function updateInsulationRoof(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateInsulationRoofRef(dcInstance, inputVars));
}

export const updateInsulationWallRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInsulationWall', inputVars);
}
updateInsulationWallRef.operationName = 'UpdateInsulationWall';

export function updateInsulationWall(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateInsulationWallRef(dcInstance, inputVars));
}

export const updateWindowSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateWindowSize', inputVars);
}
updateWindowSizeRef.operationName = 'UpdateWindowSize';

export function updateWindowSize(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateWindowSizeRef(dcInstance, inputVars));
}

export const updateWindowGlazingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateWindowGlazing', inputVars);
}
updateWindowGlazingRef.operationName = 'UpdateWindowGlazing';

export function updateWindowGlazing(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateWindowGlazingRef(dcInstance, inputVars));
}

export const updateOrientationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateOrientation', inputVars);
}
updateOrientationRef.operationName = 'UpdateOrientation';

export function updateOrientation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateOrientationRef(dcInstance, inputVars));
}

export const updateOccupancyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateOccupancy', inputVars);
}
updateOccupancyRef.operationName = 'UpdateOccupancy';

export function updateOccupancy(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateOccupancyRef(dcInstance, inputVars));
}

export const updateWindowShadingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateWindowShading', inputVars);
}
updateWindowShadingRef.operationName = 'UpdateWindowShading';

export function updateWindowShading(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateWindowShadingRef(dcInstance, inputVars));
}

export const updateEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEnergyResult', inputVars);
}
updateEnergyResultRef.operationName = 'UpdateEnergyResult';

export function updateEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateEnergyResultRef(dcInstance, inputVars));
}

export const createBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBuilding', inputVars);
}
createBuildingRef.operationName = 'CreateBuilding';

export function createBuilding(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createBuildingRef(dcInstance, inputVars));
}

export const createBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBuildingParameters', inputVars);
}
createBuildingParametersRef.operationName = 'CreateBuildingParameters';

export function createBuildingParameters(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createBuildingParametersRef(dcInstance, inputVars));
}

export const createInsulationRoofRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationRoof', inputVars);
}
createInsulationRoofRef.operationName = 'CreateInsulationRoof';

export function createInsulationRoof(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationRoofRef(dcInstance, inputVars));
}

export const createInsulationWallRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationWall', inputVars);
}
createInsulationWallRef.operationName = 'CreateInsulationWall';

export function createInsulationWall(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationWallRef(dcInstance, inputVars));
}

export const createWindowSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowSize', inputVars);
}
createWindowSizeRef.operationName = 'CreateWindowSize';

export function createWindowSize(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowSizeRef(dcInstance, inputVars));
}

export const createWindowGlazingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowGlazing', inputVars);
}
createWindowGlazingRef.operationName = 'CreateWindowGlazing';

export function createWindowGlazing(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowGlazingRef(dcInstance, inputVars));
}

export const createOrientationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrientation', inputVars);
}
createOrientationRef.operationName = 'CreateOrientation';

export function createOrientation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOrientationRef(dcInstance, inputVars));
}

export const createOccupancyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOccupancy', inputVars);
}
createOccupancyRef.operationName = 'CreateOccupancy';

export function createOccupancy(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOccupancyRef(dcInstance, inputVars));
}

export const createWindowShadingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowShading', inputVars);
}
createWindowShadingRef.operationName = 'CreateWindowShading';

export function createWindowShading(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowShadingRef(dcInstance, inputVars));
}

export const assignInsulationRoofEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignInsulationRoofEnergyResult', inputVars);
}
assignInsulationRoofEnergyResultRef.operationName = 'AssignInsulationRoofEnergyResult';

export function assignInsulationRoofEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignInsulationRoofEnergyResultRef(dcInstance, inputVars));
}

export const assignInsulationWallEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignInsulationWallEnergyResult', inputVars);
}
assignInsulationWallEnergyResultRef.operationName = 'AssignInsulationWallEnergyResult';

export function assignInsulationWallEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignInsulationWallEnergyResultRef(dcInstance, inputVars));
}

export const assignWindowSizeEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignWindowSizeEnergyResult', inputVars);
}
assignWindowSizeEnergyResultRef.operationName = 'AssignWindowSizeEnergyResult';

export function assignWindowSizeEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignWindowSizeEnergyResultRef(dcInstance, inputVars));
}

export const assignWindowGlazingEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignWindowGlazingEnergyResult', inputVars);
}
assignWindowGlazingEnergyResultRef.operationName = 'AssignWindowGlazingEnergyResult';

export function assignWindowGlazingEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignWindowGlazingEnergyResultRef(dcInstance, inputVars));
}

export const assignOrientationEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignOrientationEnergyResult', inputVars);
}
assignOrientationEnergyResultRef.operationName = 'AssignOrientationEnergyResult';

export function assignOrientationEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignOrientationEnergyResultRef(dcInstance, inputVars));
}

export const assignOccupancyEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignOccupancyEnergyResult', inputVars);
}
assignOccupancyEnergyResultRef.operationName = 'AssignOccupancyEnergyResult';

export function assignOccupancyEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignOccupancyEnergyResultRef(dcInstance, inputVars));
}

export const assignWindowShadingEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignWindowShadingEnergyResult', inputVars);
}
assignWindowShadingEnergyResultRef.operationName = 'AssignWindowShadingEnergyResult';

export function assignWindowShadingEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignWindowShadingEnergyResultRef(dcInstance, inputVars));
}

export const createInsulationRoofWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationRoofWithEnergyResult', inputVars);
}
createInsulationRoofWithEnergyResultRef.operationName = 'CreateInsulationRoofWithEnergyResult';

export function createInsulationRoofWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationRoofWithEnergyResultRef(dcInstance, inputVars));
}

export const createInsulationWallWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationWallWithEnergyResult', inputVars);
}
createInsulationWallWithEnergyResultRef.operationName = 'CreateInsulationWallWithEnergyResult';

export function createInsulationWallWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationWallWithEnergyResultRef(dcInstance, inputVars));
}

export const createWindowSizeWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowSizeWithEnergyResult', inputVars);
}
createWindowSizeWithEnergyResultRef.operationName = 'CreateWindowSizeWithEnergyResult';

export function createWindowSizeWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowSizeWithEnergyResultRef(dcInstance, inputVars));
}

export const createWindowGlazingWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowGlazingWithEnergyResult', inputVars);
}
createWindowGlazingWithEnergyResultRef.operationName = 'CreateWindowGlazingWithEnergyResult';

export function createWindowGlazingWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowGlazingWithEnergyResultRef(dcInstance, inputVars));
}

export const createOrientationWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrientationWithEnergyResult', inputVars);
}
createOrientationWithEnergyResultRef.operationName = 'CreateOrientationWithEnergyResult';

export function createOrientationWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOrientationWithEnergyResultRef(dcInstance, inputVars));
}

export const createOccupancyWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOccupancyWithEnergyResult', inputVars);
}
createOccupancyWithEnergyResultRef.operationName = 'CreateOccupancyWithEnergyResult';

export function createOccupancyWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOccupancyWithEnergyResultRef(dcInstance, inputVars));
}

export const createWindowShadingWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowShadingWithEnergyResult', inputVars);
}
createWindowShadingWithEnergyResultRef.operationName = 'CreateWindowShadingWithEnergyResult';

export function createWindowShadingWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowShadingWithEnergyResultRef(dcInstance, inputVars));
}

export const deleteBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteBuilding', inputVars);
}
deleteBuildingRef.operationName = 'DeleteBuilding';

export function deleteBuilding(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteBuildingRef(dcInstance, inputVars));
}

export const deleteBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteBuildingParameters', inputVars);
}
deleteBuildingParametersRef.operationName = 'DeleteBuildingParameters';

export function deleteBuildingParameters(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteBuildingParametersRef(dcInstance, inputVars));
}

export const deleteInsulationRoofRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteInsulationRoof', inputVars);
}
deleteInsulationRoofRef.operationName = 'DeleteInsulationRoof';

export function deleteInsulationRoof(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteInsulationRoofRef(dcInstance, inputVars));
}

export const deleteInsulationWallRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteInsulationWall', inputVars);
}
deleteInsulationWallRef.operationName = 'DeleteInsulationWall';

export function deleteInsulationWall(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteInsulationWallRef(dcInstance, inputVars));
}

export const deleteWindowSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWindowSize', inputVars);
}
deleteWindowSizeRef.operationName = 'DeleteWindowSize';

export function deleteWindowSize(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteWindowSizeRef(dcInstance, inputVars));
}

export const deleteWindowGlazingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWindowGlazing', inputVars);
}
deleteWindowGlazingRef.operationName = 'DeleteWindowGlazing';

export function deleteWindowGlazing(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteWindowGlazingRef(dcInstance, inputVars));
}

export const deleteOrientationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteOrientation', inputVars);
}
deleteOrientationRef.operationName = 'DeleteOrientation';

export function deleteOrientation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteOrientationRef(dcInstance, inputVars));
}

export const deleteOccupancyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteOccupancy', inputVars);
}
deleteOccupancyRef.operationName = 'DeleteOccupancy';

export function deleteOccupancy(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteOccupancyRef(dcInstance, inputVars));
}

export const deleteWindowShadingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWindowShading', inputVars);
}
deleteWindowShadingRef.operationName = 'DeleteWindowShading';

export function deleteWindowShading(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteWindowShadingRef(dcInstance, inputVars));
}

export const deleteEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEnergyResult', inputVars);
}
deleteEnergyResultRef.operationName = 'DeleteEnergyResult';

export function deleteEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteEnergyResultRef(dcInstance, inputVars));
}

