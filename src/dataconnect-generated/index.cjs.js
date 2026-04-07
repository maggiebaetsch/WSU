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
