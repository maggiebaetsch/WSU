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

export interface CreateInsulationRoofWithEnergyResultData {
  insulationRoof_insert: InsulationRoof_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateInsulationRoofWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
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

export interface CreateInsulationWallWithEnergyResultData {
  insulationWall_insert: InsulationWall_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateInsulationWallWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface CreateOccupancyData {
  occupancy_insert: Occupancy_Key;
}

export interface CreateOccupancyVariables {
  buildingParametersId: UUIDString;
  numberOfPeople: number;
}

export interface CreateOccupancyWithEnergyResultData {
  occupancy_insert: Occupancy_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateOccupancyWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  numberOfPeople: number;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface CreateOrientationData {
  orientation_insert: Orientation_Key;
}

export interface CreateOrientationVariables {
  buildingParametersId: UUIDString;
  direction: string;
}

export interface CreateOrientationWithEnergyResultData {
  orientation_insert: Orientation_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateOrientationWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  direction: string;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
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

export interface CreateWindowGlazingWithEnergyResultData {
  windowGlazing_insert: WindowGlazing_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateWindowGlazingWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  type: string;
  rValue: number;
  shgc: number;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface CreateWindowShadingData {
  windowShading_insert: WindowShading_Key;
}

export interface CreateWindowShadingVariables {
  buildingParametersId: UUIDString;
  type: string;
  isExternal: boolean;
}

export interface CreateWindowShadingWithEnergyResultData {
  windowShading_insert: WindowShading_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateWindowShadingWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  type: string;
  isExternal: boolean;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface CreateWindowSizeData {
  windowSize_insert: WindowSize_Key;
}

export interface CreateWindowSizeVariables {
  buildingParametersId: UUIDString;
  area: number;
}

export interface CreateWindowSizeWithEnergyResultData {
  windowSize_insert: WindowSize_Key;
  energyResult_insert: EnergyResult_Key;
}

export interface CreateWindowSizeWithEnergyResultVariables {
  id: UUIDString;
  buildingParametersId: UUIDString;
  area: number;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface DeleteBuildingData {
  building_delete?: Building_Key | null;
}

export interface DeleteBuildingParametersData {
  buildingParameters_delete?: BuildingParameters_Key | null;
}

export interface DeleteBuildingParametersVariables {
  id: UUIDString;
}

export interface DeleteBuildingVariables {
  id: UUIDString;
}

export interface DeleteEnergyResultData {
  energyResult_delete?: EnergyResult_Key | null;
}

export interface DeleteEnergyResultVariables {
  id: UUIDString;
}

export interface DeleteInsulationRoofData {
  insulationRoof_delete?: InsulationRoof_Key | null;
}

export interface DeleteInsulationRoofVariables {
  id: UUIDString;
}

export interface DeleteInsulationWallData {
  insulationWall_delete?: InsulationWall_Key | null;
}

export interface DeleteInsulationWallVariables {
  id: UUIDString;
}

export interface DeleteOccupancyData {
  occupancy_delete?: Occupancy_Key | null;
}

export interface DeleteOccupancyVariables {
  id: UUIDString;
}

export interface DeleteOrientationData {
  orientation_delete?: Orientation_Key | null;
}

export interface DeleteOrientationVariables {
  id: UUIDString;
}

export interface DeleteWindowGlazingData {
  windowGlazing_delete?: WindowGlazing_Key | null;
}

export interface DeleteWindowGlazingVariables {
  id: UUIDString;
}

export interface DeleteWindowShadingData {
  windowShading_delete?: WindowShading_Key | null;
}

export interface DeleteWindowShadingVariables {
  id: UUIDString;
}

export interface DeleteWindowSizeData {
  windowSize_delete?: WindowSize_Key | null;
}

export interface DeleteWindowSizeVariables {
  id: UUIDString;
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

export interface GetEnergyResultByIdData {
  energyResult?: {
    id: UUIDString;
    improvementType: string;
    cooling: number;
    heating: number;
    total: number;
    carbon: number;
    cost: number;
    insulationRoof?: {
      id: UUIDString;
    } & InsulationRoof_Key;
      insulationWall?: {
        id: UUIDString;
      } & InsulationWall_Key;
        windowSize?: {
          id: UUIDString;
        } & WindowSize_Key;
          windowGlazing?: {
            id: UUIDString;
          } & WindowGlazing_Key;
            orientation?: {
              id: UUIDString;
            } & Orientation_Key;
              occupancy?: {
                id: UUIDString;
              } & Occupancy_Key;
                windowShading?: {
                  id: UUIDString;
                } & WindowShading_Key;
  } & EnergyResult_Key;
}

export interface GetEnergyResultByIdVariables {
  id: UUIDString;
}

export interface GetEnergyResultsByBuildingData {
  roofResults: ({
    id: UUIDString;
    improvementType: string;
    cooling: number;
    heating: number;
    total: number;
    carbon: number;
    cost: number;
  } & EnergyResult_Key)[];
    wallResults: ({
      id: UUIDString;
      improvementType: string;
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    } & EnergyResult_Key)[];
      windowSizeResults: ({
        id: UUIDString;
        improvementType: string;
        cooling: number;
        heating: number;
        total: number;
        carbon: number;
        cost: number;
      } & EnergyResult_Key)[];
        windowGlazingResults: ({
          id: UUIDString;
          improvementType: string;
          cooling: number;
          heating: number;
          total: number;
          carbon: number;
          cost: number;
        } & EnergyResult_Key)[];
          orientationResults: ({
            id: UUIDString;
            improvementType: string;
            cooling: number;
            heating: number;
            total: number;
            carbon: number;
            cost: number;
          } & EnergyResult_Key)[];
            occupancyResults: ({
              id: UUIDString;
              improvementType: string;
              cooling: number;
              heating: number;
              total: number;
              carbon: number;
              cost: number;
            } & EnergyResult_Key)[];
              windowShadingResults: ({
                id: UUIDString;
                improvementType: string;
                cooling: number;
                heating: number;
                total: number;
                carbon: number;
                cost: number;
              } & EnergyResult_Key)[];
}

export interface GetEnergyResultsByBuildingParametersData {
  roofResults: ({
    id: UUIDString;
    improvementType: string;
    cooling: number;
    heating: number;
    total: number;
    carbon: number;
    cost: number;
  } & EnergyResult_Key)[];
    wallResults: ({
      id: UUIDString;
      improvementType: string;
      cooling: number;
      heating: number;
      total: number;
      carbon: number;
      cost: number;
    } & EnergyResult_Key)[];
      windowSizeResults: ({
        id: UUIDString;
        improvementType: string;
        cooling: number;
        heating: number;
        total: number;
        carbon: number;
        cost: number;
      } & EnergyResult_Key)[];
        windowGlazingResults: ({
          id: UUIDString;
          improvementType: string;
          cooling: number;
          heating: number;
          total: number;
          carbon: number;
          cost: number;
        } & EnergyResult_Key)[];
          orientationResults: ({
            id: UUIDString;
            improvementType: string;
            cooling: number;
            heating: number;
            total: number;
            carbon: number;
            cost: number;
          } & EnergyResult_Key)[];
            occupancyResults: ({
              id: UUIDString;
              improvementType: string;
              cooling: number;
              heating: number;
              total: number;
              carbon: number;
              cost: number;
            } & EnergyResult_Key)[];
              windowShadingResults: ({
                id: UUIDString;
                improvementType: string;
                cooling: number;
                heating: number;
                total: number;
                carbon: number;
                cost: number;
              } & EnergyResult_Key)[];
}

export interface GetEnergyResultsByBuildingParametersVariables {
  buildingParametersId: UUIDString;
}

export interface GetEnergyResultsByBuildingVariables {
  buildingId: UUIDString;
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

export interface UpdateBuildingData {
  building_update?: Building_Key | null;
}

export interface UpdateBuildingParametersData {
  buildingParameters_update?: BuildingParameters_Key | null;
}

export interface UpdateBuildingParametersVariables {
  id: UUIDString;
  climate: Climate;
  floorArea: string;
  buildingType: BuildingType;
  envelope: EnvelopeType;
  isAC: boolean;
}

export interface UpdateBuildingVariables {
  id: UUIDString;
  name: string;
}

export interface UpdateEnergyResultData {
  energyResult_update?: EnergyResult_Key | null;
}

export interface UpdateEnergyResultVariables {
  id: UUIDString;
  improvementType: string;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}

export interface UpdateInsulationRoofData {
  insulationRoof_update?: InsulationRoof_Key | null;
}

export interface UpdateInsulationRoofVariables {
  id: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}

export interface UpdateInsulationWallData {
  insulationWall_update?: InsulationWall_Key | null;
}

export interface UpdateInsulationWallVariables {
  id: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}

export interface UpdateOccupancyData {
  occupancy_update?: Occupancy_Key | null;
}

export interface UpdateOccupancyVariables {
  id: UUIDString;
  numberOfPeople: number;
}

export interface UpdateOrientationData {
  orientation_update?: Orientation_Key | null;
}

export interface UpdateOrientationVariables {
  id: UUIDString;
  direction: string;
}

export interface UpdateWindowGlazingData {
  windowGlazing_update?: WindowGlazing_Key | null;
}

export interface UpdateWindowGlazingVariables {
  id: UUIDString;
  type: string;
  rValue: number;
  shgc: number;
}

export interface UpdateWindowShadingData {
  windowShading_update?: WindowShading_Key | null;
}

export interface UpdateWindowShadingVariables {
  id: UUIDString;
  type: string;
  isExternal: boolean;
}

export interface UpdateWindowSizeData {
  windowSize_update?: WindowSize_Key | null;
}

export interface UpdateWindowSizeVariables {
  id: UUIDString;
  area: number;
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

interface GetEnergyResultByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEnergyResultByIdVariables): QueryRef<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEnergyResultByIdVariables): QueryRef<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;
  operationName: string;
}
export const getEnergyResultByIdRef: GetEnergyResultByIdRef;

export function getEnergyResultById(vars: GetEnergyResultByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;
export function getEnergyResultById(dc: DataConnect, vars: GetEnergyResultByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;

interface GetEnergyResultsByBuildingParametersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEnergyResultsByBuildingParametersVariables): QueryRef<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEnergyResultsByBuildingParametersVariables): QueryRef<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;
  operationName: string;
}
export const getEnergyResultsByBuildingParametersRef: GetEnergyResultsByBuildingParametersRef;

export function getEnergyResultsByBuildingParameters(vars: GetEnergyResultsByBuildingParametersVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;
export function getEnergyResultsByBuildingParameters(dc: DataConnect, vars: GetEnergyResultsByBuildingParametersVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;

interface GetEnergyResultsByBuildingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEnergyResultsByBuildingVariables): QueryRef<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetEnergyResultsByBuildingVariables): QueryRef<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;
  operationName: string;
}
export const getEnergyResultsByBuildingRef: GetEnergyResultsByBuildingRef;

export function getEnergyResultsByBuilding(vars: GetEnergyResultsByBuildingVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;
export function getEnergyResultsByBuilding(dc: DataConnect, vars: GetEnergyResultsByBuildingVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;

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

interface UpdateBuildingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBuildingVariables): MutationRef<UpdateBuildingData, UpdateBuildingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateBuildingVariables): MutationRef<UpdateBuildingData, UpdateBuildingVariables>;
  operationName: string;
}
export const updateBuildingRef: UpdateBuildingRef;

export function updateBuilding(vars: UpdateBuildingVariables): MutationPromise<UpdateBuildingData, UpdateBuildingVariables>;
export function updateBuilding(dc: DataConnect, vars: UpdateBuildingVariables): MutationPromise<UpdateBuildingData, UpdateBuildingVariables>;

interface UpdateBuildingParametersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBuildingParametersVariables): MutationRef<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateBuildingParametersVariables): MutationRef<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;
  operationName: string;
}
export const updateBuildingParametersRef: UpdateBuildingParametersRef;

export function updateBuildingParameters(vars: UpdateBuildingParametersVariables): MutationPromise<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;
export function updateBuildingParameters(dc: DataConnect, vars: UpdateBuildingParametersVariables): MutationPromise<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;

interface UpdateInsulationRoofRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInsulationRoofVariables): MutationRef<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateInsulationRoofVariables): MutationRef<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;
  operationName: string;
}
export const updateInsulationRoofRef: UpdateInsulationRoofRef;

export function updateInsulationRoof(vars: UpdateInsulationRoofVariables): MutationPromise<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;
export function updateInsulationRoof(dc: DataConnect, vars: UpdateInsulationRoofVariables): MutationPromise<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;

interface UpdateInsulationWallRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInsulationWallVariables): MutationRef<UpdateInsulationWallData, UpdateInsulationWallVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateInsulationWallVariables): MutationRef<UpdateInsulationWallData, UpdateInsulationWallVariables>;
  operationName: string;
}
export const updateInsulationWallRef: UpdateInsulationWallRef;

export function updateInsulationWall(vars: UpdateInsulationWallVariables): MutationPromise<UpdateInsulationWallData, UpdateInsulationWallVariables>;
export function updateInsulationWall(dc: DataConnect, vars: UpdateInsulationWallVariables): MutationPromise<UpdateInsulationWallData, UpdateInsulationWallVariables>;

interface UpdateWindowSizeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWindowSizeVariables): MutationRef<UpdateWindowSizeData, UpdateWindowSizeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateWindowSizeVariables): MutationRef<UpdateWindowSizeData, UpdateWindowSizeVariables>;
  operationName: string;
}
export const updateWindowSizeRef: UpdateWindowSizeRef;

export function updateWindowSize(vars: UpdateWindowSizeVariables): MutationPromise<UpdateWindowSizeData, UpdateWindowSizeVariables>;
export function updateWindowSize(dc: DataConnect, vars: UpdateWindowSizeVariables): MutationPromise<UpdateWindowSizeData, UpdateWindowSizeVariables>;

interface UpdateWindowGlazingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWindowGlazingVariables): MutationRef<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateWindowGlazingVariables): MutationRef<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;
  operationName: string;
}
export const updateWindowGlazingRef: UpdateWindowGlazingRef;

export function updateWindowGlazing(vars: UpdateWindowGlazingVariables): MutationPromise<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;
export function updateWindowGlazing(dc: DataConnect, vars: UpdateWindowGlazingVariables): MutationPromise<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;

interface UpdateOrientationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOrientationVariables): MutationRef<UpdateOrientationData, UpdateOrientationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateOrientationVariables): MutationRef<UpdateOrientationData, UpdateOrientationVariables>;
  operationName: string;
}
export const updateOrientationRef: UpdateOrientationRef;

export function updateOrientation(vars: UpdateOrientationVariables): MutationPromise<UpdateOrientationData, UpdateOrientationVariables>;
export function updateOrientation(dc: DataConnect, vars: UpdateOrientationVariables): MutationPromise<UpdateOrientationData, UpdateOrientationVariables>;

interface UpdateOccupancyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOccupancyVariables): MutationRef<UpdateOccupancyData, UpdateOccupancyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateOccupancyVariables): MutationRef<UpdateOccupancyData, UpdateOccupancyVariables>;
  operationName: string;
}
export const updateOccupancyRef: UpdateOccupancyRef;

export function updateOccupancy(vars: UpdateOccupancyVariables): MutationPromise<UpdateOccupancyData, UpdateOccupancyVariables>;
export function updateOccupancy(dc: DataConnect, vars: UpdateOccupancyVariables): MutationPromise<UpdateOccupancyData, UpdateOccupancyVariables>;

interface UpdateWindowShadingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWindowShadingVariables): MutationRef<UpdateWindowShadingData, UpdateWindowShadingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateWindowShadingVariables): MutationRef<UpdateWindowShadingData, UpdateWindowShadingVariables>;
  operationName: string;
}
export const updateWindowShadingRef: UpdateWindowShadingRef;

export function updateWindowShading(vars: UpdateWindowShadingVariables): MutationPromise<UpdateWindowShadingData, UpdateWindowShadingVariables>;
export function updateWindowShading(dc: DataConnect, vars: UpdateWindowShadingVariables): MutationPromise<UpdateWindowShadingData, UpdateWindowShadingVariables>;

interface UpdateEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEnergyResultVariables): MutationRef<UpdateEnergyResultData, UpdateEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateEnergyResultVariables): MutationRef<UpdateEnergyResultData, UpdateEnergyResultVariables>;
  operationName: string;
}
export const updateEnergyResultRef: UpdateEnergyResultRef;

export function updateEnergyResult(vars: UpdateEnergyResultVariables): MutationPromise<UpdateEnergyResultData, UpdateEnergyResultVariables>;
export function updateEnergyResult(dc: DataConnect, vars: UpdateEnergyResultVariables): MutationPromise<UpdateEnergyResultData, UpdateEnergyResultVariables>;

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

interface CreateInsulationRoofWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationRoofWithEnergyResultVariables): MutationRef<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInsulationRoofWithEnergyResultVariables): MutationRef<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;
  operationName: string;
}
export const createInsulationRoofWithEnergyResultRef: CreateInsulationRoofWithEnergyResultRef;

export function createInsulationRoofWithEnergyResult(vars: CreateInsulationRoofWithEnergyResultVariables): MutationPromise<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;
export function createInsulationRoofWithEnergyResult(dc: DataConnect, vars: CreateInsulationRoofWithEnergyResultVariables): MutationPromise<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;

interface CreateInsulationWallWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationWallWithEnergyResultVariables): MutationRef<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInsulationWallWithEnergyResultVariables): MutationRef<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;
  operationName: string;
}
export const createInsulationWallWithEnergyResultRef: CreateInsulationWallWithEnergyResultRef;

export function createInsulationWallWithEnergyResult(vars: CreateInsulationWallWithEnergyResultVariables): MutationPromise<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;
export function createInsulationWallWithEnergyResult(dc: DataConnect, vars: CreateInsulationWallWithEnergyResultVariables): MutationPromise<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;

interface CreateWindowSizeWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowSizeWithEnergyResultVariables): MutationRef<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWindowSizeWithEnergyResultVariables): MutationRef<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;
  operationName: string;
}
export const createWindowSizeWithEnergyResultRef: CreateWindowSizeWithEnergyResultRef;

export function createWindowSizeWithEnergyResult(vars: CreateWindowSizeWithEnergyResultVariables): MutationPromise<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;
export function createWindowSizeWithEnergyResult(dc: DataConnect, vars: CreateWindowSizeWithEnergyResultVariables): MutationPromise<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;

interface CreateWindowGlazingWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowGlazingWithEnergyResultVariables): MutationRef<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWindowGlazingWithEnergyResultVariables): MutationRef<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;
  operationName: string;
}
export const createWindowGlazingWithEnergyResultRef: CreateWindowGlazingWithEnergyResultRef;

export function createWindowGlazingWithEnergyResult(vars: CreateWindowGlazingWithEnergyResultVariables): MutationPromise<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;
export function createWindowGlazingWithEnergyResult(dc: DataConnect, vars: CreateWindowGlazingWithEnergyResultVariables): MutationPromise<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;

interface CreateOrientationWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrientationWithEnergyResultVariables): MutationRef<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateOrientationWithEnergyResultVariables): MutationRef<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;
  operationName: string;
}
export const createOrientationWithEnergyResultRef: CreateOrientationWithEnergyResultRef;

export function createOrientationWithEnergyResult(vars: CreateOrientationWithEnergyResultVariables): MutationPromise<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;
export function createOrientationWithEnergyResult(dc: DataConnect, vars: CreateOrientationWithEnergyResultVariables): MutationPromise<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;

interface CreateOccupancyWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOccupancyWithEnergyResultVariables): MutationRef<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateOccupancyWithEnergyResultVariables): MutationRef<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;
  operationName: string;
}
export const createOccupancyWithEnergyResultRef: CreateOccupancyWithEnergyResultRef;

export function createOccupancyWithEnergyResult(vars: CreateOccupancyWithEnergyResultVariables): MutationPromise<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;
export function createOccupancyWithEnergyResult(dc: DataConnect, vars: CreateOccupancyWithEnergyResultVariables): MutationPromise<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;

interface CreateWindowShadingWithEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowShadingWithEnergyResultVariables): MutationRef<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateWindowShadingWithEnergyResultVariables): MutationRef<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;
  operationName: string;
}
export const createWindowShadingWithEnergyResultRef: CreateWindowShadingWithEnergyResultRef;

export function createWindowShadingWithEnergyResult(vars: CreateWindowShadingWithEnergyResultVariables): MutationPromise<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;
export function createWindowShadingWithEnergyResult(dc: DataConnect, vars: CreateWindowShadingWithEnergyResultVariables): MutationPromise<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;

interface DeleteBuildingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteBuildingVariables): MutationRef<DeleteBuildingData, DeleteBuildingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteBuildingVariables): MutationRef<DeleteBuildingData, DeleteBuildingVariables>;
  operationName: string;
}
export const deleteBuildingRef: DeleteBuildingRef;

export function deleteBuilding(vars: DeleteBuildingVariables): MutationPromise<DeleteBuildingData, DeleteBuildingVariables>;
export function deleteBuilding(dc: DataConnect, vars: DeleteBuildingVariables): MutationPromise<DeleteBuildingData, DeleteBuildingVariables>;

interface DeleteBuildingParametersRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteBuildingParametersVariables): MutationRef<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteBuildingParametersVariables): MutationRef<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;
  operationName: string;
}
export const deleteBuildingParametersRef: DeleteBuildingParametersRef;

export function deleteBuildingParameters(vars: DeleteBuildingParametersVariables): MutationPromise<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;
export function deleteBuildingParameters(dc: DataConnect, vars: DeleteBuildingParametersVariables): MutationPromise<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;

interface DeleteInsulationRoofRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInsulationRoofVariables): MutationRef<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteInsulationRoofVariables): MutationRef<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;
  operationName: string;
}
export const deleteInsulationRoofRef: DeleteInsulationRoofRef;

export function deleteInsulationRoof(vars: DeleteInsulationRoofVariables): MutationPromise<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;
export function deleteInsulationRoof(dc: DataConnect, vars: DeleteInsulationRoofVariables): MutationPromise<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;

interface DeleteInsulationWallRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInsulationWallVariables): MutationRef<DeleteInsulationWallData, DeleteInsulationWallVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteInsulationWallVariables): MutationRef<DeleteInsulationWallData, DeleteInsulationWallVariables>;
  operationName: string;
}
export const deleteInsulationWallRef: DeleteInsulationWallRef;

export function deleteInsulationWall(vars: DeleteInsulationWallVariables): MutationPromise<DeleteInsulationWallData, DeleteInsulationWallVariables>;
export function deleteInsulationWall(dc: DataConnect, vars: DeleteInsulationWallVariables): MutationPromise<DeleteInsulationWallData, DeleteInsulationWallVariables>;

interface DeleteWindowSizeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWindowSizeVariables): MutationRef<DeleteWindowSizeData, DeleteWindowSizeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteWindowSizeVariables): MutationRef<DeleteWindowSizeData, DeleteWindowSizeVariables>;
  operationName: string;
}
export const deleteWindowSizeRef: DeleteWindowSizeRef;

export function deleteWindowSize(vars: DeleteWindowSizeVariables): MutationPromise<DeleteWindowSizeData, DeleteWindowSizeVariables>;
export function deleteWindowSize(dc: DataConnect, vars: DeleteWindowSizeVariables): MutationPromise<DeleteWindowSizeData, DeleteWindowSizeVariables>;

interface DeleteWindowGlazingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWindowGlazingVariables): MutationRef<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteWindowGlazingVariables): MutationRef<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;
  operationName: string;
}
export const deleteWindowGlazingRef: DeleteWindowGlazingRef;

export function deleteWindowGlazing(vars: DeleteWindowGlazingVariables): MutationPromise<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;
export function deleteWindowGlazing(dc: DataConnect, vars: DeleteWindowGlazingVariables): MutationPromise<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;

interface DeleteOrientationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOrientationVariables): MutationRef<DeleteOrientationData, DeleteOrientationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteOrientationVariables): MutationRef<DeleteOrientationData, DeleteOrientationVariables>;
  operationName: string;
}
export const deleteOrientationRef: DeleteOrientationRef;

export function deleteOrientation(vars: DeleteOrientationVariables): MutationPromise<DeleteOrientationData, DeleteOrientationVariables>;
export function deleteOrientation(dc: DataConnect, vars: DeleteOrientationVariables): MutationPromise<DeleteOrientationData, DeleteOrientationVariables>;

interface DeleteOccupancyRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOccupancyVariables): MutationRef<DeleteOccupancyData, DeleteOccupancyVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteOccupancyVariables): MutationRef<DeleteOccupancyData, DeleteOccupancyVariables>;
  operationName: string;
}
export const deleteOccupancyRef: DeleteOccupancyRef;

export function deleteOccupancy(vars: DeleteOccupancyVariables): MutationPromise<DeleteOccupancyData, DeleteOccupancyVariables>;
export function deleteOccupancy(dc: DataConnect, vars: DeleteOccupancyVariables): MutationPromise<DeleteOccupancyData, DeleteOccupancyVariables>;

interface DeleteWindowShadingRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWindowShadingVariables): MutationRef<DeleteWindowShadingData, DeleteWindowShadingVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteWindowShadingVariables): MutationRef<DeleteWindowShadingData, DeleteWindowShadingVariables>;
  operationName: string;
}
export const deleteWindowShadingRef: DeleteWindowShadingRef;

export function deleteWindowShading(vars: DeleteWindowShadingVariables): MutationPromise<DeleteWindowShadingData, DeleteWindowShadingVariables>;
export function deleteWindowShading(dc: DataConnect, vars: DeleteWindowShadingVariables): MutationPromise<DeleteWindowShadingData, DeleteWindowShadingVariables>;

interface DeleteEnergyResultRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEnergyResultVariables): MutationRef<DeleteEnergyResultData, DeleteEnergyResultVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteEnergyResultVariables): MutationRef<DeleteEnergyResultData, DeleteEnergyResultVariables>;
  operationName: string;
}
export const deleteEnergyResultRef: DeleteEnergyResultRef;

export function deleteEnergyResult(vars: DeleteEnergyResultVariables): MutationPromise<DeleteEnergyResultData, DeleteEnergyResultVariables>;
export function deleteEnergyResult(dc: DataConnect, vars: DeleteEnergyResultVariables): MutationPromise<DeleteEnergyResultData, DeleteEnergyResultVariables>;

