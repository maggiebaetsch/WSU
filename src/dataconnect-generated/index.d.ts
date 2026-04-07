import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export enum BuildingType {
  RESIDENTIAL = "RESIDENTIAL",
  OFFICE = "OFFICE",
  HOTEL = "HOTEL",
  GOVERNMENTAL = "GOVERNMENTAL",
  SCHOOL = "SCHOOL",
  HOSPITAL = "HOSPITAL",
  RETAIL = "RETAIL",
  AGED_CARE = "AGED_CARE",
  INDUSTRIAL = "INDUSTRIAL",
};

export enum Climate {
  TROPICAL = "TROPICAL",
  DRY_ARID_SEMIARID = "DRY_ARID_SEMIARID",
  TEMPERATE = "TEMPERATE",
  CONTINENTAL = "CONTINENTAL",
  POLAR_ALPINE = "POLAR_ALPINE",
};

export enum EnvelopeType {
  HIGH_MASS = "HIGH_MASS",
  LOW_MASS = "LOW_MASS",
  GLAZED = "GLAZED",
};



export interface AssignInsulationRoofEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignInsulationRoofEnergyResultVariables {
  insulationRoofId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface AssignInsulationWallEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignInsulationWallEnergyResultVariables {
  insulationWallId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface AssignOccupancyEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignOccupancyEnergyResultVariables {
  occupancyId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface AssignOrientationEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignOrientationEnergyResultVariables {
  orientationId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface AssignWindowGlazingEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignWindowGlazingEnergyResultVariables {
  windowGlazingId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface AssignWindowShadingEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignWindowShadingEnergyResultVariables {
  windowShadingId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface AssignWindowSizeEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}

export interface AssignWindowSizeEnergyResultVariables {
  windowSizeId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface BuildingParameters_Key {
  id: UUIDString;
  __typename?: 'BuildingParameters_Key';
}

export interface Building_Key {
  id: UUIDString;
  __typename?: 'Building_Key';
}

export interface CreateBuildingData {
  building_insert: Building_Key;
}

export interface CreateBuildingParametersData {
  buildingParameters_insert: BuildingParameters_Key;
}

export interface CreateBuildingParametersVariables {
  buildingId: UUIDString;
  climate: Climate;
  floorArea: string;
  buildingType: BuildingType;
  envelope: EnvelopeType;
  isAC: boolean;
}

export interface CreateBuildingVariables {
  name: string;
}

export interface CreateInsulationRoofData {
  insulationRoof_insert: InsulationRoof_Key;
}

export interface CreateInsulationRoofVariables {
  buildingParametersId: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}

export interface CreateInsulationWallData {
  insulationWall_insert: InsulationWall_Key;
}

export interface CreateInsulationWallVariables {
  buildingParametersId: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}

export interface CreateOccupancyData {
  occupancy_insert: Occupancy_Key;
}

export interface CreateOccupancyVariables {
  buildingParametersId: UUIDString;
  numberOfPeople: number;
}

export interface CreateOrientationData {
  orientation_insert: Orientation_Key;
}

export interface CreateOrientationVariables {
  buildingParametersId: UUIDString;
  direction: string;
}

export interface CreateWindowGlazingData {
  windowGlazing_insert: WindowGlazing_Key;
}

export interface CreateWindowGlazingVariables {
  buildingParametersId: UUIDString;
  type: string;
  rValue: number;
  shgc: number;
}

export interface CreateWindowShadingData {
  windowShading_insert: WindowShading_Key;
}

export interface CreateWindowShadingVariables {
  buildingParametersId: UUIDString;
  type: string;
  isExternal: boolean;
}

export interface CreateWindowSizeData {
  windowSize_insert: WindowSize_Key;
}

export interface CreateWindowSizeVariables {
  buildingParametersId: UUIDString;
  name: string;
  area: number;
}

export interface EnergyResult_Key {
  id: UUIDString;
  __typename?: 'EnergyResult_Key';
}

export interface GetAllBuildingParametersData {
  buildingParameterss: ({
    id: UUIDString;
    climate: Climate;
    floorArea: string;
    buildingType: BuildingType;
    envelope: EnvelopeType;
    isAC: boolean;
    building: {
      id: UUIDString;
      name: string;
    } & Building_Key;
  } & BuildingParameters_Key)[];
}

export interface GetAllBuildingsData {
  buildings: ({
    id: UUIDString;
    name: string;
  } & Building_Key)[];
}

export interface GetBuildingByIdData {
  building?: {
    id: UUIDString;
    name: string;
    buildingParameters?: {
      id: UUIDString;
      climate: Climate;
      floorArea: string;
      buildingType: BuildingType;
      envelope: EnvelopeType;
      isAC: boolean;
    } & BuildingParameters_Key;
  } & Building_Key;
}

export interface GetBuildingByIdVariables {
  id: UUIDString;
}

export interface GetFullBuildingDetailsData {
  building?: {
    id: UUIDString;
    name: string;
    buildingParameters?: {
      id: UUIDString;
      climate: Climate;
      floorArea: string;
      buildingType: BuildingType;
      envelope: EnvelopeType;
      isAC: boolean;
    } & BuildingParameters_Key;
  } & Building_Key;
    insulationRoofs: ({
      id: UUIDString;
      type: string;
      thickness: number;
      rValue: number;
      energyResult?: {
        cooling: number;
        heating: number;
        total: number;
        carbon: number;
        cost: number;
      };
    } & InsulationRoof_Key)[];
      insulationWalls: ({
        id: UUIDString;
        type: string;
        thickness: number;
        rValue: number;
        energyResult?: {
          cooling: number;
          heating: number;
          total: number;
          carbon: number;
          cost: number;
        };
      } & InsulationWall_Key)[];
        windowSizes: ({
          id: UUIDString;
          name: string;
          area: number;
          energyResult?: {
            cooling: number;
            heating: number;
            total: number;
            carbon: number;
            cost: number;
          };
        } & WindowSize_Key)[];
          windowGlazings: ({
            id: UUIDString;
            type: string;
            rValue: number;
            shgc: number;
            energyResult?: {
              cooling: number;
              heating: number;
              total: number;
              carbon: number;
              cost: number;
            };
          } & WindowGlazing_Key)[];
            orientations: ({
              id: UUIDString;
              direction: string;
              energyResult?: {
                cooling: number;
                heating: number;
                total: number;
                carbon: number;
                cost: number;
              };
            } & Orientation_Key)[];
              occupancies: ({
                id: UUIDString;
                numberOfPeople: number;
                energyResult?: {
                  cooling: number;
                  heating: number;
                  total: number;
                  carbon: number;
                  cost: number;
                };
              } & Occupancy_Key)[];
                windowShadings: ({
                  id: UUIDString;
                  type: string;
                  isExternal: boolean;
                  energyResult?: {
                    cooling: number;
                    heating: number;
                    total: number;
                    carbon: number;
                    cost: number;
                  };
                } & WindowShading_Key)[];
}

export interface GetFullBuildingDetailsVariables {
  buildingId: UUIDString;
}

export interface GetInsulationRoofsData {
  insulationRoofs: ({
    id: UUIDString;
    type: string;
    thickness: number;
    rValue: number;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & InsulationRoof_Key)[];
}

export interface GetInsulationRoofsVariables {
  buildingParametersId: UUIDString;
}

export interface GetInsulationWallsData {
  insulationWalls: ({
    id: UUIDString;
    type: string;
    thickness: number;
    rValue: number;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & InsulationWall_Key)[];
}

export interface GetInsulationWallsVariables {
  buildingParametersId: UUIDString;
}

export interface GetOccupanciesData {
  occupancies: ({
    id: UUIDString;
    numberOfPeople: number;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & Occupancy_Key)[];
}

export interface GetOccupanciesVariables {
  buildingParametersId: UUIDString;
}

export interface GetOrientationsData {
  orientations: ({
    id: UUIDString;
    direction: string;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & Orientation_Key)[];
}

export interface GetOrientationsVariables {
  buildingParametersId: UUIDString;
}

export interface GetWindowGlazingsData {
  windowGlazings: ({
    id: UUIDString;
    type: string;
    rValue: number;
    shgc: number;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & WindowGlazing_Key)[];
}

export interface GetWindowGlazingsVariables {
  buildingParametersId: UUIDString;
}

export interface GetWindowShadingsData {
  windowShadings: ({
    id: UUIDString;
    type: string;
    isExternal: boolean;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & WindowShading_Key)[];
}

export interface GetWindowShadingsVariables {
  buildingParametersId: UUIDString;
}

export interface GetWindowSizesData {
  windowSizes: ({
    id: UUIDString;
    name: string;
    area: number;
    energyResult?: {
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    };
  } & WindowSize_Key)[];
}

export interface GetWindowSizesVariables {
  buildingParametersId: UUIDString;
}

export interface InsulationRoof_Key {
  id: UUIDString;
  __typename?: 'InsulationRoof_Key';
}

export interface InsulationWall_Key {
  id: UUIDString;
  __typename?: 'InsulationWall_Key';
}

export interface Occupancy_Key {
  id: UUIDString;
  __typename?: 'Occupancy_Key';
}

export interface Orientation_Key {
  id: UUIDString;
  __typename?: 'Orientation_Key';
}

export interface WindowGlazing_Key {
  id: UUIDString;
  __typename?: 'WindowGlazing_Key';
}

export interface WindowShading_Key {
  id: UUIDString;
  __typename?: 'WindowShading_Key';
}

export interface WindowSize_Key {
  id: UUIDString;
  __typename?: 'WindowSize_Key';
}

interface GetAllBuildingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllBuildingsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllBuildingsData, undefined>;
  operationName: string;
}
export const getAllBuildingsRef: GetAllBuildingsRef;

export function getAllBuildings(options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingsData, undefined>;
export function getAllBuildings(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingsData, undefined>;

interface GetBuildingByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBuildingByIdVariables): QueryRef<GetBuildingByIdData, GetBuildingByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetBuildingByIdVariables): QueryRef<GetBuildingByIdData, GetBuildingByIdVariables>;
  operationName: string;
}
export const getBuildingByIdRef: GetBuildingByIdRef;

export function getBuildingById(vars: GetBuildingByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetBuildingByIdData, GetBuildingByIdVariables>;
export function getBuildingById(dc: DataConnect, vars: GetBuildingByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetBuildingByIdData, GetBuildingByIdVariables>;

interface GetAllBuildingParametersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllBuildingParametersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllBuildingParametersData, undefined>;
  operationName: string;
}
export const getAllBuildingParametersRef: GetAllBuildingParametersRef;

export function getAllBuildingParameters(options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingParametersData, undefined>;
export function getAllBuildingParameters(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingParametersData, undefined>;

interface CreateBuildingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBuildingVariables): MutationRef<CreateBuildingData, CreateBuildingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateBuildingVariables): MutationRef<CreateBuildingData, CreateBuildingVariables>;
  operationName: string;
}
export const createBuildingRef: CreateBuildingRef;

export function createBuilding(vars: CreateBuildingVariables): MutationPromise<CreateBuildingData, CreateBuildingVariables>;
export function createBuilding(dc: DataConnect, vars: CreateBuildingVariables): MutationPromise<CreateBuildingData, CreateBuildingVariables>;

interface CreateBuildingParametersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBuildingParametersVariables): MutationRef<CreateBuildingParametersData, CreateBuildingParametersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateBuildingParametersVariables): MutationRef<CreateBuildingParametersData, CreateBuildingParametersVariables>;
  operationName: string;
}
export const createBuildingParametersRef: CreateBuildingParametersRef;

export function createBuildingParameters(vars: CreateBuildingParametersVariables): MutationPromise<CreateBuildingParametersData, CreateBuildingParametersVariables>;
export function createBuildingParameters(dc: DataConnect, vars: CreateBuildingParametersVariables): MutationPromise<CreateBuildingParametersData, CreateBuildingParametersVariables>;

interface CreateInsulationRoofRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationRoofVariables): MutationRef<CreateInsulationRoofData, CreateInsulationRoofVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInsulationRoofVariables): MutationRef<CreateInsulationRoofData, CreateInsulationRoofVariables>;
  operationName: string;
}
export const createInsulationRoofRef: CreateInsulationRoofRef;

export function createInsulationRoof(vars: CreateInsulationRoofVariables): MutationPromise<CreateInsulationRoofData, CreateInsulationRoofVariables>;
export function createInsulationRoof(dc: DataConnect, vars: CreateInsulationRoofVariables): MutationPromise<CreateInsulationRoofData, CreateInsulationRoofVariables>;

interface CreateInsulationWallRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationWallVariables): MutationRef<CreateInsulationWallData, CreateInsulationWallVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInsulationWallVariables): MutationRef<CreateInsulationWallData, CreateInsulationWallVariables>;
  operationName: string;
}
export const createInsulationWallRef: CreateInsulationWallRef;

export function createInsulationWall(vars: CreateInsulationWallVariables): MutationPromise<CreateInsulationWallData, CreateInsulationWallVariables>;
export function createInsulationWall(dc: DataConnect, vars: CreateInsulationWallVariables): MutationPromise<CreateInsulationWallData, CreateInsulationWallVariables>;

interface CreateWindowSizeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowSizeVariables): MutationRef<CreateWindowSizeData, CreateWindowSizeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWindowSizeVariables): MutationRef<CreateWindowSizeData, CreateWindowSizeVariables>;
  operationName: string;
}
export const createWindowSizeRef: CreateWindowSizeRef;

export function createWindowSize(vars: CreateWindowSizeVariables): MutationPromise<CreateWindowSizeData, CreateWindowSizeVariables>;
export function createWindowSize(dc: DataConnect, vars: CreateWindowSizeVariables): MutationPromise<CreateWindowSizeData, CreateWindowSizeVariables>;

interface CreateWindowGlazingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowGlazingVariables): MutationRef<CreateWindowGlazingData, CreateWindowGlazingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWindowGlazingVariables): MutationRef<CreateWindowGlazingData, CreateWindowGlazingVariables>;
  operationName: string;
}
export const createWindowGlazingRef: CreateWindowGlazingRef;

export function createWindowGlazing(vars: CreateWindowGlazingVariables): MutationPromise<CreateWindowGlazingData, CreateWindowGlazingVariables>;
export function createWindowGlazing(dc: DataConnect, vars: CreateWindowGlazingVariables): MutationPromise<CreateWindowGlazingData, CreateWindowGlazingVariables>;

interface CreateOrientationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrientationVariables): MutationRef<CreateOrientationData, CreateOrientationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateOrientationVariables): MutationRef<CreateOrientationData, CreateOrientationVariables>;
  operationName: string;
}
export const createOrientationRef: CreateOrientationRef;

export function createOrientation(vars: CreateOrientationVariables): MutationPromise<CreateOrientationData, CreateOrientationVariables>;
export function createOrientation(dc: DataConnect, vars: CreateOrientationVariables): MutationPromise<CreateOrientationData, CreateOrientationVariables>;

interface CreateOccupancyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOccupancyVariables): MutationRef<CreateOccupancyData, CreateOccupancyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateOccupancyVariables): MutationRef<CreateOccupancyData, CreateOccupancyVariables>;
  operationName: string;
}
export const createOccupancyRef: CreateOccupancyRef;

export function createOccupancy(vars: CreateOccupancyVariables): MutationPromise<CreateOccupancyData, CreateOccupancyVariables>;
export function createOccupancy(dc: DataConnect, vars: CreateOccupancyVariables): MutationPromise<CreateOccupancyData, CreateOccupancyVariables>;

interface CreateWindowShadingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowShadingVariables): MutationRef<CreateWindowShadingData, CreateWindowShadingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWindowShadingVariables): MutationRef<CreateWindowShadingData, CreateWindowShadingVariables>;
  operationName: string;
}
export const createWindowShadingRef: CreateWindowShadingRef;

export function createWindowShading(vars: CreateWindowShadingVariables): MutationPromise<CreateWindowShadingData, CreateWindowShadingVariables>;
export function createWindowShading(dc: DataConnect, vars: CreateWindowShadingVariables): MutationPromise<CreateWindowShadingData, CreateWindowShadingVariables>;

interface AssignInsulationRoofEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignInsulationRoofEnergyResultVariables): MutationRef<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignInsulationRoofEnergyResultVariables): MutationRef<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;
  operationName: string;
}
export const assignInsulationRoofEnergyResultRef: AssignInsulationRoofEnergyResultRef;

export function assignInsulationRoofEnergyResult(vars: AssignInsulationRoofEnergyResultVariables): MutationPromise<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;
export function assignInsulationRoofEnergyResult(dc: DataConnect, vars: AssignInsulationRoofEnergyResultVariables): MutationPromise<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;

interface AssignInsulationWallEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignInsulationWallEnergyResultVariables): MutationRef<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignInsulationWallEnergyResultVariables): MutationRef<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;
  operationName: string;
}
export const assignInsulationWallEnergyResultRef: AssignInsulationWallEnergyResultRef;

export function assignInsulationWallEnergyResult(vars: AssignInsulationWallEnergyResultVariables): MutationPromise<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;
export function assignInsulationWallEnergyResult(dc: DataConnect, vars: AssignInsulationWallEnergyResultVariables): MutationPromise<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;

interface AssignWindowSizeEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignWindowSizeEnergyResultVariables): MutationRef<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignWindowSizeEnergyResultVariables): MutationRef<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;
  operationName: string;
}
export const assignWindowSizeEnergyResultRef: AssignWindowSizeEnergyResultRef;

export function assignWindowSizeEnergyResult(vars: AssignWindowSizeEnergyResultVariables): MutationPromise<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;
export function assignWindowSizeEnergyResult(dc: DataConnect, vars: AssignWindowSizeEnergyResultVariables): MutationPromise<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;

interface AssignWindowGlazingEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignWindowGlazingEnergyResultVariables): MutationRef<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignWindowGlazingEnergyResultVariables): MutationRef<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;
  operationName: string;
}
export const assignWindowGlazingEnergyResultRef: AssignWindowGlazingEnergyResultRef;

export function assignWindowGlazingEnergyResult(vars: AssignWindowGlazingEnergyResultVariables): MutationPromise<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;
export function assignWindowGlazingEnergyResult(dc: DataConnect, vars: AssignWindowGlazingEnergyResultVariables): MutationPromise<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;

interface AssignOrientationEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignOrientationEnergyResultVariables): MutationRef<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignOrientationEnergyResultVariables): MutationRef<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;
  operationName: string;
}
export const assignOrientationEnergyResultRef: AssignOrientationEnergyResultRef;

export function assignOrientationEnergyResult(vars: AssignOrientationEnergyResultVariables): MutationPromise<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;
export function assignOrientationEnergyResult(dc: DataConnect, vars: AssignOrientationEnergyResultVariables): MutationPromise<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;

interface AssignOccupancyEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignOccupancyEnergyResultVariables): MutationRef<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignOccupancyEnergyResultVariables): MutationRef<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;
  operationName: string;
}
export const assignOccupancyEnergyResultRef: AssignOccupancyEnergyResultRef;

export function assignOccupancyEnergyResult(vars: AssignOccupancyEnergyResultVariables): MutationPromise<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;
export function assignOccupancyEnergyResult(dc: DataConnect, vars: AssignOccupancyEnergyResultVariables): MutationPromise<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;

interface AssignWindowShadingEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignWindowShadingEnergyResultVariables): MutationRef<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AssignWindowShadingEnergyResultVariables): MutationRef<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;
  operationName: string;
}
export const assignWindowShadingEnergyResultRef: AssignWindowShadingEnergyResultRef;

export function assignWindowShadingEnergyResult(vars: AssignWindowShadingEnergyResultVariables): MutationPromise<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;
export function assignWindowShadingEnergyResult(dc: DataConnect, vars: AssignWindowShadingEnergyResultVariables): MutationPromise<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;

interface GetWindowSizesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWindowSizesVariables): QueryRef<GetWindowSizesData, GetWindowSizesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWindowSizesVariables): QueryRef<GetWindowSizesData, GetWindowSizesVariables>;
  operationName: string;
}
export const getWindowSizesRef: GetWindowSizesRef;

export function getWindowSizes(vars: GetWindowSizesVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowSizesData, GetWindowSizesVariables>;
export function getWindowSizes(dc: DataConnect, vars: GetWindowSizesVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowSizesData, GetWindowSizesVariables>;

interface GetInsulationRoofsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInsulationRoofsVariables): QueryRef<GetInsulationRoofsData, GetInsulationRoofsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetInsulationRoofsVariables): QueryRef<GetInsulationRoofsData, GetInsulationRoofsVariables>;
  operationName: string;
}
export const getInsulationRoofsRef: GetInsulationRoofsRef;

export function getInsulationRoofs(vars: GetInsulationRoofsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationRoofsData, GetInsulationRoofsVariables>;
export function getInsulationRoofs(dc: DataConnect, vars: GetInsulationRoofsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationRoofsData, GetInsulationRoofsVariables>;

interface GetInsulationWallsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInsulationWallsVariables): QueryRef<GetInsulationWallsData, GetInsulationWallsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetInsulationWallsVariables): QueryRef<GetInsulationWallsData, GetInsulationWallsVariables>;
  operationName: string;
}
export const getInsulationWallsRef: GetInsulationWallsRef;

export function getInsulationWalls(vars: GetInsulationWallsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationWallsData, GetInsulationWallsVariables>;
export function getInsulationWalls(dc: DataConnect, vars: GetInsulationWallsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationWallsData, GetInsulationWallsVariables>;

interface GetWindowGlazingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWindowGlazingsVariables): QueryRef<GetWindowGlazingsData, GetWindowGlazingsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWindowGlazingsVariables): QueryRef<GetWindowGlazingsData, GetWindowGlazingsVariables>;
  operationName: string;
}
export const getWindowGlazingsRef: GetWindowGlazingsRef;

export function getWindowGlazings(vars: GetWindowGlazingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowGlazingsData, GetWindowGlazingsVariables>;
export function getWindowGlazings(dc: DataConnect, vars: GetWindowGlazingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowGlazingsData, GetWindowGlazingsVariables>;

interface GetOrientationsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOrientationsVariables): QueryRef<GetOrientationsData, GetOrientationsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetOrientationsVariables): QueryRef<GetOrientationsData, GetOrientationsVariables>;
  operationName: string;
}
export const getOrientationsRef: GetOrientationsRef;

export function getOrientations(vars: GetOrientationsVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrientationsData, GetOrientationsVariables>;
export function getOrientations(dc: DataConnect, vars: GetOrientationsVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrientationsData, GetOrientationsVariables>;

interface GetOccupanciesRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOccupanciesVariables): QueryRef<GetOccupanciesData, GetOccupanciesVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetOccupanciesVariables): QueryRef<GetOccupanciesData, GetOccupanciesVariables>;
  operationName: string;
}
export const getOccupanciesRef: GetOccupanciesRef;

export function getOccupancies(vars: GetOccupanciesVariables, options?: ExecuteQueryOptions): QueryPromise<GetOccupanciesData, GetOccupanciesVariables>;
export function getOccupancies(dc: DataConnect, vars: GetOccupanciesVariables, options?: ExecuteQueryOptions): QueryPromise<GetOccupanciesData, GetOccupanciesVariables>;

interface GetWindowShadingsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWindowShadingsVariables): QueryRef<GetWindowShadingsData, GetWindowShadingsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetWindowShadingsVariables): QueryRef<GetWindowShadingsData, GetWindowShadingsVariables>;
  operationName: string;
}
export const getWindowShadingsRef: GetWindowShadingsRef;

export function getWindowShadings(vars: GetWindowShadingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowShadingsData, GetWindowShadingsVariables>;
export function getWindowShadings(dc: DataConnect, vars: GetWindowShadingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowShadingsData, GetWindowShadingsVariables>;

interface GetFullBuildingDetailsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFullBuildingDetailsVariables): QueryRef<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetFullBuildingDetailsVariables): QueryRef<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;
  operationName: string;
}
export const getFullBuildingDetailsRef: GetFullBuildingDetailsRef;

export function getFullBuildingDetails(vars: GetFullBuildingDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;
export function getFullBuildingDetails(dc: DataConnect, vars: GetFullBuildingDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;

