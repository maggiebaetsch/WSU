import { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

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

