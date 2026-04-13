const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const BuildingType = {
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
exports.BuildingType = BuildingType;

const Climate = {
  TROPICAL: "TROPICAL",
  DRY_ARID_SEMIARID: "DRY_ARID_SEMIARID",
  TEMPERATE: "TEMPERATE",
  CONTINENTAL: "CONTINENTAL",
  POLAR_ALPINE: "POLAR_ALPINE",
}
exports.Climate = Climate;

const EnvelopeType = {
  HIGH_MASS: "HIGH_MASS",
  LOW_MASS: "LOW_MASS",
  GLAZED: "GLAZED",
}
exports.EnvelopeType = EnvelopeType;

const connectorConfig = {
  connector: 'example',
  service: 'wsu',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const getEnergyResultByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnergyResultById', inputVars);
}
getEnergyResultByIdRef.operationName = 'GetEnergyResultById';
exports.getEnergyResultByIdRef = getEnergyResultByIdRef;

exports.getEnergyResultById = function getEnergyResultById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getEnergyResultByIdRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getEnergyResultsByBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnergyResultsByBuildingParameters', inputVars);
}
getEnergyResultsByBuildingParametersRef.operationName = 'GetEnergyResultsByBuildingParameters';
exports.getEnergyResultsByBuildingParametersRef = getEnergyResultsByBuildingParametersRef;

exports.getEnergyResultsByBuildingParameters = function getEnergyResultsByBuildingParameters(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getEnergyResultsByBuildingParametersRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getEnergyResultsByBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetEnergyResultsByBuilding', inputVars);
}
getEnergyResultsByBuildingRef.operationName = 'GetEnergyResultsByBuilding';
exports.getEnergyResultsByBuildingRef = getEnergyResultsByBuildingRef;

exports.getEnergyResultsByBuilding = function getEnergyResultsByBuilding(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getEnergyResultsByBuildingRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getAllBuildingsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllBuildings');
}
getAllBuildingsRef.operationName = 'GetAllBuildings';
exports.getAllBuildingsRef = getAllBuildingsRef;

exports.getAllBuildings = function getAllBuildings(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllBuildingsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getBuildingByIdRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetBuildingById', inputVars);
}
getBuildingByIdRef.operationName = 'GetBuildingById';
exports.getBuildingByIdRef = getBuildingByIdRef;

exports.getBuildingById = function getBuildingById(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getBuildingByIdRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getAllBuildingParametersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllBuildingParameters');
}
getAllBuildingParametersRef.operationName = 'GetAllBuildingParameters';
exports.getAllBuildingParametersRef = getAllBuildingParametersRef;

exports.getAllBuildingParameters = function getAllBuildingParameters(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllBuildingParametersRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getFullBuildingDetailsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetFullBuildingDetails', inputVars);
}
getFullBuildingDetailsRef.operationName = 'GetFullBuildingDetails';
exports.getFullBuildingDetailsRef = getFullBuildingDetailsRef;

exports.getFullBuildingDetails = function getFullBuildingDetails(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getFullBuildingDetailsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getWindowSizesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWindowSizes', inputVars);
}
getWindowSizesRef.operationName = 'GetWindowSizes';
exports.getWindowSizesRef = getWindowSizesRef;

exports.getWindowSizes = function getWindowSizes(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getWindowSizesRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getInsulationRoofsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInsulationRoofs', inputVars);
}
getInsulationRoofsRef.operationName = 'GetInsulationRoofs';
exports.getInsulationRoofsRef = getInsulationRoofsRef;

exports.getInsulationRoofs = function getInsulationRoofs(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getInsulationRoofsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getInsulationWallsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetInsulationWalls', inputVars);
}
getInsulationWallsRef.operationName = 'GetInsulationWalls';
exports.getInsulationWallsRef = getInsulationWallsRef;

exports.getInsulationWalls = function getInsulationWalls(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getInsulationWallsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getWindowGlazingsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWindowGlazings', inputVars);
}
getWindowGlazingsRef.operationName = 'GetWindowGlazings';
exports.getWindowGlazingsRef = getWindowGlazingsRef;

exports.getWindowGlazings = function getWindowGlazings(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getWindowGlazingsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getOrientationsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetOrientations', inputVars);
}
getOrientationsRef.operationName = 'GetOrientations';
exports.getOrientationsRef = getOrientationsRef;

exports.getOrientations = function getOrientations(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getOrientationsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getOccupanciesRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetOccupancies', inputVars);
}
getOccupanciesRef.operationName = 'GetOccupancies';
exports.getOccupanciesRef = getOccupanciesRef;

exports.getOccupancies = function getOccupancies(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getOccupanciesRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const getWindowShadingsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetWindowShadings', inputVars);
}
getWindowShadingsRef.operationName = 'GetWindowShadings';
exports.getWindowShadingsRef = getWindowShadingsRef;

exports.getWindowShadings = function getWindowShadings(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getWindowShadingsRef(dcInstance, inputVars), inputOpts && inputOpts.fetchPolicy);
}
;

const updateBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBuilding', inputVars);
}
updateBuildingRef.operationName = 'UpdateBuilding';
exports.updateBuildingRef = updateBuildingRef;

exports.updateBuilding = function updateBuilding(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateBuildingRef(dcInstance, inputVars));
}
;

const updateBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateBuildingParameters', inputVars);
}
updateBuildingParametersRef.operationName = 'UpdateBuildingParameters';
exports.updateBuildingParametersRef = updateBuildingParametersRef;

exports.updateBuildingParameters = function updateBuildingParameters(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateBuildingParametersRef(dcInstance, inputVars));
}
;

const updateInsulationRoofRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInsulationRoof', inputVars);
}
updateInsulationRoofRef.operationName = 'UpdateInsulationRoof';
exports.updateInsulationRoofRef = updateInsulationRoofRef;

exports.updateInsulationRoof = function updateInsulationRoof(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateInsulationRoofRef(dcInstance, inputVars));
}
;

const updateInsulationWallRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateInsulationWall', inputVars);
}
updateInsulationWallRef.operationName = 'UpdateInsulationWall';
exports.updateInsulationWallRef = updateInsulationWallRef;

exports.updateInsulationWall = function updateInsulationWall(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateInsulationWallRef(dcInstance, inputVars));
}
;

const updateWindowSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateWindowSize', inputVars);
}
updateWindowSizeRef.operationName = 'UpdateWindowSize';
exports.updateWindowSizeRef = updateWindowSizeRef;

exports.updateWindowSize = function updateWindowSize(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateWindowSizeRef(dcInstance, inputVars));
}
;

const updateWindowGlazingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateWindowGlazing', inputVars);
}
updateWindowGlazingRef.operationName = 'UpdateWindowGlazing';
exports.updateWindowGlazingRef = updateWindowGlazingRef;

exports.updateWindowGlazing = function updateWindowGlazing(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateWindowGlazingRef(dcInstance, inputVars));
}
;

const updateOrientationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateOrientation', inputVars);
}
updateOrientationRef.operationName = 'UpdateOrientation';
exports.updateOrientationRef = updateOrientationRef;

exports.updateOrientation = function updateOrientation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateOrientationRef(dcInstance, inputVars));
}
;

const updateOccupancyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateOccupancy', inputVars);
}
updateOccupancyRef.operationName = 'UpdateOccupancy';
exports.updateOccupancyRef = updateOccupancyRef;

exports.updateOccupancy = function updateOccupancy(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateOccupancyRef(dcInstance, inputVars));
}
;

const updateWindowShadingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateWindowShading', inputVars);
}
updateWindowShadingRef.operationName = 'UpdateWindowShading';
exports.updateWindowShadingRef = updateWindowShadingRef;

exports.updateWindowShading = function updateWindowShading(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateWindowShadingRef(dcInstance, inputVars));
}
;

const updateEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateEnergyResult', inputVars);
}
updateEnergyResultRef.operationName = 'UpdateEnergyResult';
exports.updateEnergyResultRef = updateEnergyResultRef;

exports.updateEnergyResult = function updateEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateEnergyResultRef(dcInstance, inputVars));
}
;

const createBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBuilding', inputVars);
}
createBuildingRef.operationName = 'CreateBuilding';
exports.createBuildingRef = createBuildingRef;

exports.createBuilding = function createBuilding(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createBuildingRef(dcInstance, inputVars));
}
;

const createBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateBuildingParameters', inputVars);
}
createBuildingParametersRef.operationName = 'CreateBuildingParameters';
exports.createBuildingParametersRef = createBuildingParametersRef;

exports.createBuildingParameters = function createBuildingParameters(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createBuildingParametersRef(dcInstance, inputVars));
}
;

const createInsulationRoofRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationRoof', inputVars);
}
createInsulationRoofRef.operationName = 'CreateInsulationRoof';
exports.createInsulationRoofRef = createInsulationRoofRef;

exports.createInsulationRoof = function createInsulationRoof(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationRoofRef(dcInstance, inputVars));
}
;

const createInsulationWallRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationWall', inputVars);
}
createInsulationWallRef.operationName = 'CreateInsulationWall';
exports.createInsulationWallRef = createInsulationWallRef;

exports.createInsulationWall = function createInsulationWall(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationWallRef(dcInstance, inputVars));
}
;

const createWindowSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowSize', inputVars);
}
createWindowSizeRef.operationName = 'CreateWindowSize';
exports.createWindowSizeRef = createWindowSizeRef;

exports.createWindowSize = function createWindowSize(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowSizeRef(dcInstance, inputVars));
}
;

const createWindowGlazingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowGlazing', inputVars);
}
createWindowGlazingRef.operationName = 'CreateWindowGlazing';
exports.createWindowGlazingRef = createWindowGlazingRef;

exports.createWindowGlazing = function createWindowGlazing(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowGlazingRef(dcInstance, inputVars));
}
;

const createOrientationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrientation', inputVars);
}
createOrientationRef.operationName = 'CreateOrientation';
exports.createOrientationRef = createOrientationRef;

exports.createOrientation = function createOrientation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOrientationRef(dcInstance, inputVars));
}
;

const createOccupancyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOccupancy', inputVars);
}
createOccupancyRef.operationName = 'CreateOccupancy';
exports.createOccupancyRef = createOccupancyRef;

exports.createOccupancy = function createOccupancy(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOccupancyRef(dcInstance, inputVars));
}
;

const createWindowShadingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowShading', inputVars);
}
createWindowShadingRef.operationName = 'CreateWindowShading';
exports.createWindowShadingRef = createWindowShadingRef;

exports.createWindowShading = function createWindowShading(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowShadingRef(dcInstance, inputVars));
}
;

const assignInsulationRoofEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignInsulationRoofEnergyResult', inputVars);
}
assignInsulationRoofEnergyResultRef.operationName = 'AssignInsulationRoofEnergyResult';
exports.assignInsulationRoofEnergyResultRef = assignInsulationRoofEnergyResultRef;

exports.assignInsulationRoofEnergyResult = function assignInsulationRoofEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignInsulationRoofEnergyResultRef(dcInstance, inputVars));
}
;

const assignInsulationWallEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignInsulationWallEnergyResult', inputVars);
}
assignInsulationWallEnergyResultRef.operationName = 'AssignInsulationWallEnergyResult';
exports.assignInsulationWallEnergyResultRef = assignInsulationWallEnergyResultRef;

exports.assignInsulationWallEnergyResult = function assignInsulationWallEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignInsulationWallEnergyResultRef(dcInstance, inputVars));
}
;

const assignWindowSizeEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignWindowSizeEnergyResult', inputVars);
}
assignWindowSizeEnergyResultRef.operationName = 'AssignWindowSizeEnergyResult';
exports.assignWindowSizeEnergyResultRef = assignWindowSizeEnergyResultRef;

exports.assignWindowSizeEnergyResult = function assignWindowSizeEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignWindowSizeEnergyResultRef(dcInstance, inputVars));
}
;

const assignWindowGlazingEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignWindowGlazingEnergyResult', inputVars);
}
assignWindowGlazingEnergyResultRef.operationName = 'AssignWindowGlazingEnergyResult';
exports.assignWindowGlazingEnergyResultRef = assignWindowGlazingEnergyResultRef;

exports.assignWindowGlazingEnergyResult = function assignWindowGlazingEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignWindowGlazingEnergyResultRef(dcInstance, inputVars));
}
;

const assignOrientationEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignOrientationEnergyResult', inputVars);
}
assignOrientationEnergyResultRef.operationName = 'AssignOrientationEnergyResult';
exports.assignOrientationEnergyResultRef = assignOrientationEnergyResultRef;

exports.assignOrientationEnergyResult = function assignOrientationEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignOrientationEnergyResultRef(dcInstance, inputVars));
}
;

const assignOccupancyEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignOccupancyEnergyResult', inputVars);
}
assignOccupancyEnergyResultRef.operationName = 'AssignOccupancyEnergyResult';
exports.assignOccupancyEnergyResultRef = assignOccupancyEnergyResultRef;

exports.assignOccupancyEnergyResult = function assignOccupancyEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignOccupancyEnergyResultRef(dcInstance, inputVars));
}
;

const assignWindowShadingEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AssignWindowShadingEnergyResult', inputVars);
}
assignWindowShadingEnergyResultRef.operationName = 'AssignWindowShadingEnergyResult';
exports.assignWindowShadingEnergyResultRef = assignWindowShadingEnergyResultRef;

exports.assignWindowShadingEnergyResult = function assignWindowShadingEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(assignWindowShadingEnergyResultRef(dcInstance, inputVars));
}
;

const createInsulationRoofWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationRoofWithEnergyResult', inputVars);
}
createInsulationRoofWithEnergyResultRef.operationName = 'CreateInsulationRoofWithEnergyResult';
exports.createInsulationRoofWithEnergyResultRef = createInsulationRoofWithEnergyResultRef;

exports.createInsulationRoofWithEnergyResult = function createInsulationRoofWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationRoofWithEnergyResultRef(dcInstance, inputVars));
}
;

const createInsulationWallWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateInsulationWallWithEnergyResult', inputVars);
}
createInsulationWallWithEnergyResultRef.operationName = 'CreateInsulationWallWithEnergyResult';
exports.createInsulationWallWithEnergyResultRef = createInsulationWallWithEnergyResultRef;

exports.createInsulationWallWithEnergyResult = function createInsulationWallWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createInsulationWallWithEnergyResultRef(dcInstance, inputVars));
}
;

const createWindowSizeWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowSizeWithEnergyResult', inputVars);
}
createWindowSizeWithEnergyResultRef.operationName = 'CreateWindowSizeWithEnergyResult';
exports.createWindowSizeWithEnergyResultRef = createWindowSizeWithEnergyResultRef;

exports.createWindowSizeWithEnergyResult = function createWindowSizeWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowSizeWithEnergyResultRef(dcInstance, inputVars));
}
;

const createWindowGlazingWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowGlazingWithEnergyResult', inputVars);
}
createWindowGlazingWithEnergyResultRef.operationName = 'CreateWindowGlazingWithEnergyResult';
exports.createWindowGlazingWithEnergyResultRef = createWindowGlazingWithEnergyResultRef;

exports.createWindowGlazingWithEnergyResult = function createWindowGlazingWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowGlazingWithEnergyResultRef(dcInstance, inputVars));
}
;

const createOrientationWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOrientationWithEnergyResult', inputVars);
}
createOrientationWithEnergyResultRef.operationName = 'CreateOrientationWithEnergyResult';
exports.createOrientationWithEnergyResultRef = createOrientationWithEnergyResultRef;

exports.createOrientationWithEnergyResult = function createOrientationWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOrientationWithEnergyResultRef(dcInstance, inputVars));
}
;

const createOccupancyWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateOccupancyWithEnergyResult', inputVars);
}
createOccupancyWithEnergyResultRef.operationName = 'CreateOccupancyWithEnergyResult';
exports.createOccupancyWithEnergyResultRef = createOccupancyWithEnergyResultRef;

exports.createOccupancyWithEnergyResult = function createOccupancyWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createOccupancyWithEnergyResultRef(dcInstance, inputVars));
}
;

const createWindowShadingWithEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateWindowShadingWithEnergyResult', inputVars);
}
createWindowShadingWithEnergyResultRef.operationName = 'CreateWindowShadingWithEnergyResult';
exports.createWindowShadingWithEnergyResultRef = createWindowShadingWithEnergyResultRef;

exports.createWindowShadingWithEnergyResult = function createWindowShadingWithEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createWindowShadingWithEnergyResultRef(dcInstance, inputVars));
}
;

const deleteBuildingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteBuilding', inputVars);
}
deleteBuildingRef.operationName = 'DeleteBuilding';
exports.deleteBuildingRef = deleteBuildingRef;

exports.deleteBuilding = function deleteBuilding(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteBuildingRef(dcInstance, inputVars));
}
;

const deleteBuildingParametersRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteBuildingParameters', inputVars);
}
deleteBuildingParametersRef.operationName = 'DeleteBuildingParameters';
exports.deleteBuildingParametersRef = deleteBuildingParametersRef;

exports.deleteBuildingParameters = function deleteBuildingParameters(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteBuildingParametersRef(dcInstance, inputVars));
}
;

const deleteInsulationRoofRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteInsulationRoof', inputVars);
}
deleteInsulationRoofRef.operationName = 'DeleteInsulationRoof';
exports.deleteInsulationRoofRef = deleteInsulationRoofRef;

exports.deleteInsulationRoof = function deleteInsulationRoof(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteInsulationRoofRef(dcInstance, inputVars));
}
;

const deleteInsulationWallRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteInsulationWall', inputVars);
}
deleteInsulationWallRef.operationName = 'DeleteInsulationWall';
exports.deleteInsulationWallRef = deleteInsulationWallRef;

exports.deleteInsulationWall = function deleteInsulationWall(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteInsulationWallRef(dcInstance, inputVars));
}
;

const deleteWindowSizeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWindowSize', inputVars);
}
deleteWindowSizeRef.operationName = 'DeleteWindowSize';
exports.deleteWindowSizeRef = deleteWindowSizeRef;

exports.deleteWindowSize = function deleteWindowSize(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteWindowSizeRef(dcInstance, inputVars));
}
;

const deleteWindowGlazingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWindowGlazing', inputVars);
}
deleteWindowGlazingRef.operationName = 'DeleteWindowGlazing';
exports.deleteWindowGlazingRef = deleteWindowGlazingRef;

exports.deleteWindowGlazing = function deleteWindowGlazing(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteWindowGlazingRef(dcInstance, inputVars));
}
;

const deleteOrientationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteOrientation', inputVars);
}
deleteOrientationRef.operationName = 'DeleteOrientation';
exports.deleteOrientationRef = deleteOrientationRef;

exports.deleteOrientation = function deleteOrientation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteOrientationRef(dcInstance, inputVars));
}
;

const deleteOccupancyRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteOccupancy', inputVars);
}
deleteOccupancyRef.operationName = 'DeleteOccupancy';
exports.deleteOccupancyRef = deleteOccupancyRef;

exports.deleteOccupancy = function deleteOccupancy(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteOccupancyRef(dcInstance, inputVars));
}
;

const deleteWindowShadingRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteWindowShading', inputVars);
}
deleteWindowShadingRef.operationName = 'DeleteWindowShading';
exports.deleteWindowShadingRef = deleteWindowShadingRef;

exports.deleteWindowShading = function deleteWindowShading(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteWindowShadingRef(dcInstance, inputVars));
}
;

const deleteEnergyResultRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteEnergyResult', inputVars);
}
deleteEnergyResultRef.operationName = 'DeleteEnergyResult';
exports.deleteEnergyResultRef = deleteEnergyResultRef;

exports.deleteEnergyResult = function deleteEnergyResult(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteEnergyResultRef(dcInstance, inputVars));
}
;
