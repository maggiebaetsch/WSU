# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetEnergyResultById*](#getenergyresultbyid)
  - [*GetEnergyResultsByBuildingParameters*](#getenergyresultsbybuildingparameters)
  - [*GetEnergyResultsByBuilding*](#getenergyresultsbybuilding)
  - [*GetAllBuildings*](#getallbuildings)
  - [*GetBuildingById*](#getbuildingbyid)
  - [*GetAllBuildingParameters*](#getallbuildingparameters)
  - [*GetFullBuildingDetails*](#getfullbuildingdetails)
  - [*GetWindowSizes*](#getwindowsizes)
  - [*GetInsulationRoofs*](#getinsulationroofs)
  - [*GetInsulationWalls*](#getinsulationwalls)
  - [*GetWindowGlazings*](#getwindowglazings)
  - [*GetOrientations*](#getorientations)
  - [*GetOccupancies*](#getoccupancies)
  - [*GetWindowShadings*](#getwindowshadings)
- [**Mutations**](#mutations)
  - [*UpdateBuilding*](#updatebuilding)
  - [*UpdateBuildingParameters*](#updatebuildingparameters)
  - [*UpdateInsulationRoof*](#updateinsulationroof)
  - [*UpdateInsulationWall*](#updateinsulationwall)
  - [*UpdateWindowSize*](#updatewindowsize)
  - [*UpdateWindowGlazing*](#updatewindowglazing)
  - [*UpdateOrientation*](#updateorientation)
  - [*UpdateOccupancy*](#updateoccupancy)
  - [*UpdateWindowShading*](#updatewindowshading)
  - [*UpdateEnergyResult*](#updateenergyresult)
  - [*CreateBuilding*](#createbuilding)
  - [*CreateBuildingParameters*](#createbuildingparameters)
  - [*CreateInsulationRoof*](#createinsulationroof)
  - [*CreateInsulationWall*](#createinsulationwall)
  - [*CreateWindowSize*](#createwindowsize)
  - [*CreateWindowGlazing*](#createwindowglazing)
  - [*CreateOrientation*](#createorientation)
  - [*CreateOccupancy*](#createoccupancy)
  - [*CreateWindowShading*](#createwindowshading)
  - [*AssignInsulationRoofEnergyResult*](#assigninsulationroofenergyresult)
  - [*AssignInsulationWallEnergyResult*](#assigninsulationwallenergyresult)
  - [*AssignWindowSizeEnergyResult*](#assignwindowsizeenergyresult)
  - [*AssignWindowGlazingEnergyResult*](#assignwindowglazingenergyresult)
  - [*AssignOrientationEnergyResult*](#assignorientationenergyresult)
  - [*AssignOccupancyEnergyResult*](#assignoccupancyenergyresult)
  - [*AssignWindowShadingEnergyResult*](#assignwindowshadingenergyresult)
  - [*CreateInsulationRoofWithEnergyResult*](#createinsulationroofwithenergyresult)
  - [*CreateInsulationWallWithEnergyResult*](#createinsulationwallwithenergyresult)
  - [*CreateWindowSizeWithEnergyResult*](#createwindowsizewithenergyresult)
  - [*CreateWindowGlazingWithEnergyResult*](#createwindowglazingwithenergyresult)
  - [*CreateOrientationWithEnergyResult*](#createorientationwithenergyresult)
  - [*CreateOccupancyWithEnergyResult*](#createoccupancywithenergyresult)
  - [*CreateWindowShadingWithEnergyResult*](#createwindowshadingwithenergyresult)
  - [*DeleteBuilding*](#deletebuilding)
  - [*DeleteBuildingParameters*](#deletebuildingparameters)
  - [*DeleteInsulationRoof*](#deleteinsulationroof)
  - [*DeleteInsulationWall*](#deleteinsulationwall)
  - [*DeleteWindowSize*](#deletewindowsize)
  - [*DeleteWindowGlazing*](#deletewindowglazing)
  - [*DeleteOrientation*](#deleteorientation)
  - [*DeleteOccupancy*](#deleteoccupancy)
  - [*DeleteWindowShading*](#deletewindowshading)
  - [*DeleteEnergyResult*](#deleteenergyresult)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetEnergyResultById
You can execute the `GetEnergyResultById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEnergyResultById(vars: GetEnergyResultByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;

interface GetEnergyResultByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEnergyResultByIdVariables): QueryRef<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;
}
export const getEnergyResultByIdRef: GetEnergyResultByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEnergyResultById(dc: DataConnect, vars: GetEnergyResultByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;

interface GetEnergyResultByIdRef {
  ...
  (dc: DataConnect, vars: GetEnergyResultByIdVariables): QueryRef<GetEnergyResultByIdData, GetEnergyResultByIdVariables>;
}
export const getEnergyResultByIdRef: GetEnergyResultByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEnergyResultByIdRef:
```typescript
const name = getEnergyResultByIdRef.operationName;
console.log(name);
```

### Variables
The `GetEnergyResultById` query requires an argument of type `GetEnergyResultByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetEnergyResultByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetEnergyResultById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEnergyResultByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetEnergyResultById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEnergyResultById, GetEnergyResultByIdVariables } from '@dataconnect/generated';

// The `GetEnergyResultById` query requires an argument of type `GetEnergyResultByIdVariables`:
const getEnergyResultByIdVars: GetEnergyResultByIdVariables = {
  id: ..., 
};

// Call the `getEnergyResultById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEnergyResultById(getEnergyResultByIdVars);
// Variables can be defined inline as well.
const { data } = await getEnergyResultById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEnergyResultById(dataConnect, getEnergyResultByIdVars);

console.log(data.energyResult);

// Or, you can use the `Promise` API.
getEnergyResultById(getEnergyResultByIdVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult);
});
```

### Using `GetEnergyResultById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEnergyResultByIdRef, GetEnergyResultByIdVariables } from '@dataconnect/generated';

// The `GetEnergyResultById` query requires an argument of type `GetEnergyResultByIdVariables`:
const getEnergyResultByIdVars: GetEnergyResultByIdVariables = {
  id: ..., 
};

// Call the `getEnergyResultByIdRef()` function to get a reference to the query.
const ref = getEnergyResultByIdRef(getEnergyResultByIdVars);
// Variables can be defined inline as well.
const ref = getEnergyResultByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEnergyResultByIdRef(dataConnect, getEnergyResultByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.energyResult);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult);
});
```

## GetEnergyResultsByBuildingParameters
You can execute the `GetEnergyResultsByBuildingParameters` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEnergyResultsByBuildingParameters(vars: GetEnergyResultsByBuildingParametersVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;

interface GetEnergyResultsByBuildingParametersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEnergyResultsByBuildingParametersVariables): QueryRef<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;
}
export const getEnergyResultsByBuildingParametersRef: GetEnergyResultsByBuildingParametersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEnergyResultsByBuildingParameters(dc: DataConnect, vars: GetEnergyResultsByBuildingParametersVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;

interface GetEnergyResultsByBuildingParametersRef {
  ...
  (dc: DataConnect, vars: GetEnergyResultsByBuildingParametersVariables): QueryRef<GetEnergyResultsByBuildingParametersData, GetEnergyResultsByBuildingParametersVariables>;
}
export const getEnergyResultsByBuildingParametersRef: GetEnergyResultsByBuildingParametersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEnergyResultsByBuildingParametersRef:
```typescript
const name = getEnergyResultsByBuildingParametersRef.operationName;
console.log(name);
```

### Variables
The `GetEnergyResultsByBuildingParameters` query requires an argument of type `GetEnergyResultsByBuildingParametersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetEnergyResultsByBuildingParametersVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetEnergyResultsByBuildingParameters` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEnergyResultsByBuildingParametersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetEnergyResultsByBuildingParameters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEnergyResultsByBuildingParameters, GetEnergyResultsByBuildingParametersVariables } from '@dataconnect/generated';

// The `GetEnergyResultsByBuildingParameters` query requires an argument of type `GetEnergyResultsByBuildingParametersVariables`:
const getEnergyResultsByBuildingParametersVars: GetEnergyResultsByBuildingParametersVariables = {
  buildingParametersId: ..., 
};

// Call the `getEnergyResultsByBuildingParameters()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEnergyResultsByBuildingParameters(getEnergyResultsByBuildingParametersVars);
// Variables can be defined inline as well.
const { data } = await getEnergyResultsByBuildingParameters({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEnergyResultsByBuildingParameters(dataConnect, getEnergyResultsByBuildingParametersVars);

console.log(data.roofResults);
console.log(data.wallResults);
console.log(data.windowSizeResults);
console.log(data.windowGlazingResults);
console.log(data.orientationResults);
console.log(data.occupancyResults);
console.log(data.windowShadingResults);

// Or, you can use the `Promise` API.
getEnergyResultsByBuildingParameters(getEnergyResultsByBuildingParametersVars).then((response) => {
  const data = response.data;
  console.log(data.roofResults);
  console.log(data.wallResults);
  console.log(data.windowSizeResults);
  console.log(data.windowGlazingResults);
  console.log(data.orientationResults);
  console.log(data.occupancyResults);
  console.log(data.windowShadingResults);
});
```

### Using `GetEnergyResultsByBuildingParameters`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEnergyResultsByBuildingParametersRef, GetEnergyResultsByBuildingParametersVariables } from '@dataconnect/generated';

// The `GetEnergyResultsByBuildingParameters` query requires an argument of type `GetEnergyResultsByBuildingParametersVariables`:
const getEnergyResultsByBuildingParametersVars: GetEnergyResultsByBuildingParametersVariables = {
  buildingParametersId: ..., 
};

// Call the `getEnergyResultsByBuildingParametersRef()` function to get a reference to the query.
const ref = getEnergyResultsByBuildingParametersRef(getEnergyResultsByBuildingParametersVars);
// Variables can be defined inline as well.
const ref = getEnergyResultsByBuildingParametersRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEnergyResultsByBuildingParametersRef(dataConnect, getEnergyResultsByBuildingParametersVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.roofResults);
console.log(data.wallResults);
console.log(data.windowSizeResults);
console.log(data.windowGlazingResults);
console.log(data.orientationResults);
console.log(data.occupancyResults);
console.log(data.windowShadingResults);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.roofResults);
  console.log(data.wallResults);
  console.log(data.windowSizeResults);
  console.log(data.windowGlazingResults);
  console.log(data.orientationResults);
  console.log(data.occupancyResults);
  console.log(data.windowShadingResults);
});
```

## GetEnergyResultsByBuilding
You can execute the `GetEnergyResultsByBuilding` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getEnergyResultsByBuilding(vars: GetEnergyResultsByBuildingVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;

interface GetEnergyResultsByBuildingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetEnergyResultsByBuildingVariables): QueryRef<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;
}
export const getEnergyResultsByBuildingRef: GetEnergyResultsByBuildingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getEnergyResultsByBuilding(dc: DataConnect, vars: GetEnergyResultsByBuildingVariables, options?: ExecuteQueryOptions): QueryPromise<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;

interface GetEnergyResultsByBuildingRef {
  ...
  (dc: DataConnect, vars: GetEnergyResultsByBuildingVariables): QueryRef<GetEnergyResultsByBuildingData, GetEnergyResultsByBuildingVariables>;
}
export const getEnergyResultsByBuildingRef: GetEnergyResultsByBuildingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getEnergyResultsByBuildingRef:
```typescript
const name = getEnergyResultsByBuildingRef.operationName;
console.log(name);
```

### Variables
The `GetEnergyResultsByBuilding` query requires an argument of type `GetEnergyResultsByBuildingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetEnergyResultsByBuildingVariables {
  buildingId: UUIDString;
}
```
### Return Type
Recall that executing the `GetEnergyResultsByBuilding` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetEnergyResultsByBuildingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetEnergyResultsByBuilding`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getEnergyResultsByBuilding, GetEnergyResultsByBuildingVariables } from '@dataconnect/generated';

// The `GetEnergyResultsByBuilding` query requires an argument of type `GetEnergyResultsByBuildingVariables`:
const getEnergyResultsByBuildingVars: GetEnergyResultsByBuildingVariables = {
  buildingId: ..., 
};

// Call the `getEnergyResultsByBuilding()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getEnergyResultsByBuilding(getEnergyResultsByBuildingVars);
// Variables can be defined inline as well.
const { data } = await getEnergyResultsByBuilding({ buildingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getEnergyResultsByBuilding(dataConnect, getEnergyResultsByBuildingVars);

console.log(data.roofResults);
console.log(data.wallResults);
console.log(data.windowSizeResults);
console.log(data.windowGlazingResults);
console.log(data.orientationResults);
console.log(data.occupancyResults);
console.log(data.windowShadingResults);

// Or, you can use the `Promise` API.
getEnergyResultsByBuilding(getEnergyResultsByBuildingVars).then((response) => {
  const data = response.data;
  console.log(data.roofResults);
  console.log(data.wallResults);
  console.log(data.windowSizeResults);
  console.log(data.windowGlazingResults);
  console.log(data.orientationResults);
  console.log(data.occupancyResults);
  console.log(data.windowShadingResults);
});
```

### Using `GetEnergyResultsByBuilding`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getEnergyResultsByBuildingRef, GetEnergyResultsByBuildingVariables } from '@dataconnect/generated';

// The `GetEnergyResultsByBuilding` query requires an argument of type `GetEnergyResultsByBuildingVariables`:
const getEnergyResultsByBuildingVars: GetEnergyResultsByBuildingVariables = {
  buildingId: ..., 
};

// Call the `getEnergyResultsByBuildingRef()` function to get a reference to the query.
const ref = getEnergyResultsByBuildingRef(getEnergyResultsByBuildingVars);
// Variables can be defined inline as well.
const ref = getEnergyResultsByBuildingRef({ buildingId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getEnergyResultsByBuildingRef(dataConnect, getEnergyResultsByBuildingVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.roofResults);
console.log(data.wallResults);
console.log(data.windowSizeResults);
console.log(data.windowGlazingResults);
console.log(data.orientationResults);
console.log(data.occupancyResults);
console.log(data.windowShadingResults);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.roofResults);
  console.log(data.wallResults);
  console.log(data.windowSizeResults);
  console.log(data.windowGlazingResults);
  console.log(data.orientationResults);
  console.log(data.occupancyResults);
  console.log(data.windowShadingResults);
});
```

## GetAllBuildings
You can execute the `GetAllBuildings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllBuildings(options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingsData, undefined>;

interface GetAllBuildingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllBuildingsData, undefined>;
}
export const getAllBuildingsRef: GetAllBuildingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllBuildings(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingsData, undefined>;

interface GetAllBuildingsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllBuildingsData, undefined>;
}
export const getAllBuildingsRef: GetAllBuildingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllBuildingsRef:
```typescript
const name = getAllBuildingsRef.operationName;
console.log(name);
```

### Variables
The `GetAllBuildings` query has no variables.
### Return Type
Recall that executing the `GetAllBuildings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllBuildingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllBuildingsData {
  buildings: ({
    id: UUIDString;
    name: string;
  } & Building_Key)[];
}
```
### Using `GetAllBuildings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllBuildings } from '@dataconnect/generated';


// Call the `getAllBuildings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllBuildings();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllBuildings(dataConnect);

console.log(data.buildings);

// Or, you can use the `Promise` API.
getAllBuildings().then((response) => {
  const data = response.data;
  console.log(data.buildings);
});
```

### Using `GetAllBuildings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllBuildingsRef } from '@dataconnect/generated';


// Call the `getAllBuildingsRef()` function to get a reference to the query.
const ref = getAllBuildingsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllBuildingsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.buildings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.buildings);
});
```

## GetBuildingById
You can execute the `GetBuildingById` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getBuildingById(vars: GetBuildingByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetBuildingByIdData, GetBuildingByIdVariables>;

interface GetBuildingByIdRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetBuildingByIdVariables): QueryRef<GetBuildingByIdData, GetBuildingByIdVariables>;
}
export const getBuildingByIdRef: GetBuildingByIdRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getBuildingById(dc: DataConnect, vars: GetBuildingByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetBuildingByIdData, GetBuildingByIdVariables>;

interface GetBuildingByIdRef {
  ...
  (dc: DataConnect, vars: GetBuildingByIdVariables): QueryRef<GetBuildingByIdData, GetBuildingByIdVariables>;
}
export const getBuildingByIdRef: GetBuildingByIdRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getBuildingByIdRef:
```typescript
const name = getBuildingByIdRef.operationName;
console.log(name);
```

### Variables
The `GetBuildingById` query requires an argument of type `GetBuildingByIdVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetBuildingByIdVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetBuildingById` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetBuildingByIdData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetBuildingById`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getBuildingById, GetBuildingByIdVariables } from '@dataconnect/generated';

// The `GetBuildingById` query requires an argument of type `GetBuildingByIdVariables`:
const getBuildingByIdVars: GetBuildingByIdVariables = {
  id: ..., 
};

// Call the `getBuildingById()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getBuildingById(getBuildingByIdVars);
// Variables can be defined inline as well.
const { data } = await getBuildingById({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getBuildingById(dataConnect, getBuildingByIdVars);

console.log(data.building);

// Or, you can use the `Promise` API.
getBuildingById(getBuildingByIdVars).then((response) => {
  const data = response.data;
  console.log(data.building);
});
```

### Using `GetBuildingById`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getBuildingByIdRef, GetBuildingByIdVariables } from '@dataconnect/generated';

// The `GetBuildingById` query requires an argument of type `GetBuildingByIdVariables`:
const getBuildingByIdVars: GetBuildingByIdVariables = {
  id: ..., 
};

// Call the `getBuildingByIdRef()` function to get a reference to the query.
const ref = getBuildingByIdRef(getBuildingByIdVars);
// Variables can be defined inline as well.
const ref = getBuildingByIdRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getBuildingByIdRef(dataConnect, getBuildingByIdVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.building);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.building);
});
```

## GetAllBuildingParameters
You can execute the `GetAllBuildingParameters` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllBuildingParameters(options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingParametersData, undefined>;

interface GetAllBuildingParametersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllBuildingParametersData, undefined>;
}
export const getAllBuildingParametersRef: GetAllBuildingParametersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllBuildingParameters(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllBuildingParametersData, undefined>;

interface GetAllBuildingParametersRef {
  ...
  (dc: DataConnect): QueryRef<GetAllBuildingParametersData, undefined>;
}
export const getAllBuildingParametersRef: GetAllBuildingParametersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllBuildingParametersRef:
```typescript
const name = getAllBuildingParametersRef.operationName;
console.log(name);
```

### Variables
The `GetAllBuildingParameters` query has no variables.
### Return Type
Recall that executing the `GetAllBuildingParameters` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllBuildingParametersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllBuildingParameters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllBuildingParameters } from '@dataconnect/generated';


// Call the `getAllBuildingParameters()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllBuildingParameters();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllBuildingParameters(dataConnect);

console.log(data.buildingParameterss);

// Or, you can use the `Promise` API.
getAllBuildingParameters().then((response) => {
  const data = response.data;
  console.log(data.buildingParameterss);
});
```

### Using `GetAllBuildingParameters`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllBuildingParametersRef } from '@dataconnect/generated';


// Call the `getAllBuildingParametersRef()` function to get a reference to the query.
const ref = getAllBuildingParametersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllBuildingParametersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.buildingParameterss);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.buildingParameterss);
});
```

## GetFullBuildingDetails
You can execute the `GetFullBuildingDetails` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getFullBuildingDetails(vars: GetFullBuildingDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;

interface GetFullBuildingDetailsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetFullBuildingDetailsVariables): QueryRef<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;
}
export const getFullBuildingDetailsRef: GetFullBuildingDetailsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getFullBuildingDetails(dc: DataConnect, vars: GetFullBuildingDetailsVariables, options?: ExecuteQueryOptions): QueryPromise<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;

interface GetFullBuildingDetailsRef {
  ...
  (dc: DataConnect, vars: GetFullBuildingDetailsVariables): QueryRef<GetFullBuildingDetailsData, GetFullBuildingDetailsVariables>;
}
export const getFullBuildingDetailsRef: GetFullBuildingDetailsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getFullBuildingDetailsRef:
```typescript
const name = getFullBuildingDetailsRef.operationName;
console.log(name);
```

### Variables
The `GetFullBuildingDetails` query requires an argument of type `GetFullBuildingDetailsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetFullBuildingDetailsVariables {
  buildingId: UUIDString;
}
```
### Return Type
Recall that executing the `GetFullBuildingDetails` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetFullBuildingDetailsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetFullBuildingDetails`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getFullBuildingDetails, GetFullBuildingDetailsVariables } from '@dataconnect/generated';

// The `GetFullBuildingDetails` query requires an argument of type `GetFullBuildingDetailsVariables`:
const getFullBuildingDetailsVars: GetFullBuildingDetailsVariables = {
  buildingId: ..., 
};

// Call the `getFullBuildingDetails()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getFullBuildingDetails(getFullBuildingDetailsVars);
// Variables can be defined inline as well.
const { data } = await getFullBuildingDetails({ buildingId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getFullBuildingDetails(dataConnect, getFullBuildingDetailsVars);

console.log(data.building);
console.log(data.insulationRoofs);
console.log(data.insulationWalls);
console.log(data.windowSizes);
console.log(data.windowGlazings);
console.log(data.orientations);
console.log(data.occupancies);
console.log(data.windowShadings);

// Or, you can use the `Promise` API.
getFullBuildingDetails(getFullBuildingDetailsVars).then((response) => {
  const data = response.data;
  console.log(data.building);
  console.log(data.insulationRoofs);
  console.log(data.insulationWalls);
  console.log(data.windowSizes);
  console.log(data.windowGlazings);
  console.log(data.orientations);
  console.log(data.occupancies);
  console.log(data.windowShadings);
});
```

### Using `GetFullBuildingDetails`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getFullBuildingDetailsRef, GetFullBuildingDetailsVariables } from '@dataconnect/generated';

// The `GetFullBuildingDetails` query requires an argument of type `GetFullBuildingDetailsVariables`:
const getFullBuildingDetailsVars: GetFullBuildingDetailsVariables = {
  buildingId: ..., 
};

// Call the `getFullBuildingDetailsRef()` function to get a reference to the query.
const ref = getFullBuildingDetailsRef(getFullBuildingDetailsVars);
// Variables can be defined inline as well.
const ref = getFullBuildingDetailsRef({ buildingId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getFullBuildingDetailsRef(dataConnect, getFullBuildingDetailsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.building);
console.log(data.insulationRoofs);
console.log(data.insulationWalls);
console.log(data.windowSizes);
console.log(data.windowGlazings);
console.log(data.orientations);
console.log(data.occupancies);
console.log(data.windowShadings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.building);
  console.log(data.insulationRoofs);
  console.log(data.insulationWalls);
  console.log(data.windowSizes);
  console.log(data.windowGlazings);
  console.log(data.orientations);
  console.log(data.occupancies);
  console.log(data.windowShadings);
});
```

## GetWindowSizes
You can execute the `GetWindowSizes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWindowSizes(vars: GetWindowSizesVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowSizesData, GetWindowSizesVariables>;

interface GetWindowSizesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWindowSizesVariables): QueryRef<GetWindowSizesData, GetWindowSizesVariables>;
}
export const getWindowSizesRef: GetWindowSizesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWindowSizes(dc: DataConnect, vars: GetWindowSizesVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowSizesData, GetWindowSizesVariables>;

interface GetWindowSizesRef {
  ...
  (dc: DataConnect, vars: GetWindowSizesVariables): QueryRef<GetWindowSizesData, GetWindowSizesVariables>;
}
export const getWindowSizesRef: GetWindowSizesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWindowSizesRef:
```typescript
const name = getWindowSizesRef.operationName;
console.log(name);
```

### Variables
The `GetWindowSizes` query requires an argument of type `GetWindowSizesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWindowSizesVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWindowSizes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWindowSizesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetWindowSizes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWindowSizes, GetWindowSizesVariables } from '@dataconnect/generated';

// The `GetWindowSizes` query requires an argument of type `GetWindowSizesVariables`:
const getWindowSizesVars: GetWindowSizesVariables = {
  buildingParametersId: ..., 
};

// Call the `getWindowSizes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWindowSizes(getWindowSizesVars);
// Variables can be defined inline as well.
const { data } = await getWindowSizes({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWindowSizes(dataConnect, getWindowSizesVars);

console.log(data.windowSizes);

// Or, you can use the `Promise` API.
getWindowSizes(getWindowSizesVars).then((response) => {
  const data = response.data;
  console.log(data.windowSizes);
});
```

### Using `GetWindowSizes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWindowSizesRef, GetWindowSizesVariables } from '@dataconnect/generated';

// The `GetWindowSizes` query requires an argument of type `GetWindowSizesVariables`:
const getWindowSizesVars: GetWindowSizesVariables = {
  buildingParametersId: ..., 
};

// Call the `getWindowSizesRef()` function to get a reference to the query.
const ref = getWindowSizesRef(getWindowSizesVars);
// Variables can be defined inline as well.
const ref = getWindowSizesRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWindowSizesRef(dataConnect, getWindowSizesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.windowSizes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.windowSizes);
});
```

## GetInsulationRoofs
You can execute the `GetInsulationRoofs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getInsulationRoofs(vars: GetInsulationRoofsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationRoofsData, GetInsulationRoofsVariables>;

interface GetInsulationRoofsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInsulationRoofsVariables): QueryRef<GetInsulationRoofsData, GetInsulationRoofsVariables>;
}
export const getInsulationRoofsRef: GetInsulationRoofsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getInsulationRoofs(dc: DataConnect, vars: GetInsulationRoofsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationRoofsData, GetInsulationRoofsVariables>;

interface GetInsulationRoofsRef {
  ...
  (dc: DataConnect, vars: GetInsulationRoofsVariables): QueryRef<GetInsulationRoofsData, GetInsulationRoofsVariables>;
}
export const getInsulationRoofsRef: GetInsulationRoofsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getInsulationRoofsRef:
```typescript
const name = getInsulationRoofsRef.operationName;
console.log(name);
```

### Variables
The `GetInsulationRoofs` query requires an argument of type `GetInsulationRoofsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetInsulationRoofsVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetInsulationRoofs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetInsulationRoofsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetInsulationRoofs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getInsulationRoofs, GetInsulationRoofsVariables } from '@dataconnect/generated';

// The `GetInsulationRoofs` query requires an argument of type `GetInsulationRoofsVariables`:
const getInsulationRoofsVars: GetInsulationRoofsVariables = {
  buildingParametersId: ..., 
};

// Call the `getInsulationRoofs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getInsulationRoofs(getInsulationRoofsVars);
// Variables can be defined inline as well.
const { data } = await getInsulationRoofs({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getInsulationRoofs(dataConnect, getInsulationRoofsVars);

console.log(data.insulationRoofs);

// Or, you can use the `Promise` API.
getInsulationRoofs(getInsulationRoofsVars).then((response) => {
  const data = response.data;
  console.log(data.insulationRoofs);
});
```

### Using `GetInsulationRoofs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getInsulationRoofsRef, GetInsulationRoofsVariables } from '@dataconnect/generated';

// The `GetInsulationRoofs` query requires an argument of type `GetInsulationRoofsVariables`:
const getInsulationRoofsVars: GetInsulationRoofsVariables = {
  buildingParametersId: ..., 
};

// Call the `getInsulationRoofsRef()` function to get a reference to the query.
const ref = getInsulationRoofsRef(getInsulationRoofsVars);
// Variables can be defined inline as well.
const ref = getInsulationRoofsRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getInsulationRoofsRef(dataConnect, getInsulationRoofsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.insulationRoofs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationRoofs);
});
```

## GetInsulationWalls
You can execute the `GetInsulationWalls` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getInsulationWalls(vars: GetInsulationWallsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationWallsData, GetInsulationWallsVariables>;

interface GetInsulationWallsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetInsulationWallsVariables): QueryRef<GetInsulationWallsData, GetInsulationWallsVariables>;
}
export const getInsulationWallsRef: GetInsulationWallsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getInsulationWalls(dc: DataConnect, vars: GetInsulationWallsVariables, options?: ExecuteQueryOptions): QueryPromise<GetInsulationWallsData, GetInsulationWallsVariables>;

interface GetInsulationWallsRef {
  ...
  (dc: DataConnect, vars: GetInsulationWallsVariables): QueryRef<GetInsulationWallsData, GetInsulationWallsVariables>;
}
export const getInsulationWallsRef: GetInsulationWallsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getInsulationWallsRef:
```typescript
const name = getInsulationWallsRef.operationName;
console.log(name);
```

### Variables
The `GetInsulationWalls` query requires an argument of type `GetInsulationWallsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetInsulationWallsVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetInsulationWalls` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetInsulationWallsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetInsulationWalls`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getInsulationWalls, GetInsulationWallsVariables } from '@dataconnect/generated';

// The `GetInsulationWalls` query requires an argument of type `GetInsulationWallsVariables`:
const getInsulationWallsVars: GetInsulationWallsVariables = {
  buildingParametersId: ..., 
};

// Call the `getInsulationWalls()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getInsulationWalls(getInsulationWallsVars);
// Variables can be defined inline as well.
const { data } = await getInsulationWalls({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getInsulationWalls(dataConnect, getInsulationWallsVars);

console.log(data.insulationWalls);

// Or, you can use the `Promise` API.
getInsulationWalls(getInsulationWallsVars).then((response) => {
  const data = response.data;
  console.log(data.insulationWalls);
});
```

### Using `GetInsulationWalls`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getInsulationWallsRef, GetInsulationWallsVariables } from '@dataconnect/generated';

// The `GetInsulationWalls` query requires an argument of type `GetInsulationWallsVariables`:
const getInsulationWallsVars: GetInsulationWallsVariables = {
  buildingParametersId: ..., 
};

// Call the `getInsulationWallsRef()` function to get a reference to the query.
const ref = getInsulationWallsRef(getInsulationWallsVars);
// Variables can be defined inline as well.
const ref = getInsulationWallsRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getInsulationWallsRef(dataConnect, getInsulationWallsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.insulationWalls);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationWalls);
});
```

## GetWindowGlazings
You can execute the `GetWindowGlazings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWindowGlazings(vars: GetWindowGlazingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowGlazingsData, GetWindowGlazingsVariables>;

interface GetWindowGlazingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWindowGlazingsVariables): QueryRef<GetWindowGlazingsData, GetWindowGlazingsVariables>;
}
export const getWindowGlazingsRef: GetWindowGlazingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWindowGlazings(dc: DataConnect, vars: GetWindowGlazingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowGlazingsData, GetWindowGlazingsVariables>;

interface GetWindowGlazingsRef {
  ...
  (dc: DataConnect, vars: GetWindowGlazingsVariables): QueryRef<GetWindowGlazingsData, GetWindowGlazingsVariables>;
}
export const getWindowGlazingsRef: GetWindowGlazingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWindowGlazingsRef:
```typescript
const name = getWindowGlazingsRef.operationName;
console.log(name);
```

### Variables
The `GetWindowGlazings` query requires an argument of type `GetWindowGlazingsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWindowGlazingsVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWindowGlazings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWindowGlazingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetWindowGlazings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWindowGlazings, GetWindowGlazingsVariables } from '@dataconnect/generated';

// The `GetWindowGlazings` query requires an argument of type `GetWindowGlazingsVariables`:
const getWindowGlazingsVars: GetWindowGlazingsVariables = {
  buildingParametersId: ..., 
};

// Call the `getWindowGlazings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWindowGlazings(getWindowGlazingsVars);
// Variables can be defined inline as well.
const { data } = await getWindowGlazings({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWindowGlazings(dataConnect, getWindowGlazingsVars);

console.log(data.windowGlazings);

// Or, you can use the `Promise` API.
getWindowGlazings(getWindowGlazingsVars).then((response) => {
  const data = response.data;
  console.log(data.windowGlazings);
});
```

### Using `GetWindowGlazings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWindowGlazingsRef, GetWindowGlazingsVariables } from '@dataconnect/generated';

// The `GetWindowGlazings` query requires an argument of type `GetWindowGlazingsVariables`:
const getWindowGlazingsVars: GetWindowGlazingsVariables = {
  buildingParametersId: ..., 
};

// Call the `getWindowGlazingsRef()` function to get a reference to the query.
const ref = getWindowGlazingsRef(getWindowGlazingsVars);
// Variables can be defined inline as well.
const ref = getWindowGlazingsRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWindowGlazingsRef(dataConnect, getWindowGlazingsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.windowGlazings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.windowGlazings);
});
```

## GetOrientations
You can execute the `GetOrientations` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getOrientations(vars: GetOrientationsVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrientationsData, GetOrientationsVariables>;

interface GetOrientationsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOrientationsVariables): QueryRef<GetOrientationsData, GetOrientationsVariables>;
}
export const getOrientationsRef: GetOrientationsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getOrientations(dc: DataConnect, vars: GetOrientationsVariables, options?: ExecuteQueryOptions): QueryPromise<GetOrientationsData, GetOrientationsVariables>;

interface GetOrientationsRef {
  ...
  (dc: DataConnect, vars: GetOrientationsVariables): QueryRef<GetOrientationsData, GetOrientationsVariables>;
}
export const getOrientationsRef: GetOrientationsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getOrientationsRef:
```typescript
const name = getOrientationsRef.operationName;
console.log(name);
```

### Variables
The `GetOrientations` query requires an argument of type `GetOrientationsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetOrientationsVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetOrientations` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetOrientationsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetOrientations`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getOrientations, GetOrientationsVariables } from '@dataconnect/generated';

// The `GetOrientations` query requires an argument of type `GetOrientationsVariables`:
const getOrientationsVars: GetOrientationsVariables = {
  buildingParametersId: ..., 
};

// Call the `getOrientations()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getOrientations(getOrientationsVars);
// Variables can be defined inline as well.
const { data } = await getOrientations({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getOrientations(dataConnect, getOrientationsVars);

console.log(data.orientations);

// Or, you can use the `Promise` API.
getOrientations(getOrientationsVars).then((response) => {
  const data = response.data;
  console.log(data.orientations);
});
```

### Using `GetOrientations`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getOrientationsRef, GetOrientationsVariables } from '@dataconnect/generated';

// The `GetOrientations` query requires an argument of type `GetOrientationsVariables`:
const getOrientationsVars: GetOrientationsVariables = {
  buildingParametersId: ..., 
};

// Call the `getOrientationsRef()` function to get a reference to the query.
const ref = getOrientationsRef(getOrientationsVars);
// Variables can be defined inline as well.
const ref = getOrientationsRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getOrientationsRef(dataConnect, getOrientationsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.orientations);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.orientations);
});
```

## GetOccupancies
You can execute the `GetOccupancies` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getOccupancies(vars: GetOccupanciesVariables, options?: ExecuteQueryOptions): QueryPromise<GetOccupanciesData, GetOccupanciesVariables>;

interface GetOccupanciesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetOccupanciesVariables): QueryRef<GetOccupanciesData, GetOccupanciesVariables>;
}
export const getOccupanciesRef: GetOccupanciesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getOccupancies(dc: DataConnect, vars: GetOccupanciesVariables, options?: ExecuteQueryOptions): QueryPromise<GetOccupanciesData, GetOccupanciesVariables>;

interface GetOccupanciesRef {
  ...
  (dc: DataConnect, vars: GetOccupanciesVariables): QueryRef<GetOccupanciesData, GetOccupanciesVariables>;
}
export const getOccupanciesRef: GetOccupanciesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getOccupanciesRef:
```typescript
const name = getOccupanciesRef.operationName;
console.log(name);
```

### Variables
The `GetOccupancies` query requires an argument of type `GetOccupanciesVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetOccupanciesVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetOccupancies` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetOccupanciesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetOccupancies`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getOccupancies, GetOccupanciesVariables } from '@dataconnect/generated';

// The `GetOccupancies` query requires an argument of type `GetOccupanciesVariables`:
const getOccupanciesVars: GetOccupanciesVariables = {
  buildingParametersId: ..., 
};

// Call the `getOccupancies()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getOccupancies(getOccupanciesVars);
// Variables can be defined inline as well.
const { data } = await getOccupancies({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getOccupancies(dataConnect, getOccupanciesVars);

console.log(data.occupancies);

// Or, you can use the `Promise` API.
getOccupancies(getOccupanciesVars).then((response) => {
  const data = response.data;
  console.log(data.occupancies);
});
```

### Using `GetOccupancies`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getOccupanciesRef, GetOccupanciesVariables } from '@dataconnect/generated';

// The `GetOccupancies` query requires an argument of type `GetOccupanciesVariables`:
const getOccupanciesVars: GetOccupanciesVariables = {
  buildingParametersId: ..., 
};

// Call the `getOccupanciesRef()` function to get a reference to the query.
const ref = getOccupanciesRef(getOccupanciesVars);
// Variables can be defined inline as well.
const ref = getOccupanciesRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getOccupanciesRef(dataConnect, getOccupanciesVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.occupancies);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.occupancies);
});
```

## GetWindowShadings
You can execute the `GetWindowShadings` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getWindowShadings(vars: GetWindowShadingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowShadingsData, GetWindowShadingsVariables>;

interface GetWindowShadingsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetWindowShadingsVariables): QueryRef<GetWindowShadingsData, GetWindowShadingsVariables>;
}
export const getWindowShadingsRef: GetWindowShadingsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getWindowShadings(dc: DataConnect, vars: GetWindowShadingsVariables, options?: ExecuteQueryOptions): QueryPromise<GetWindowShadingsData, GetWindowShadingsVariables>;

interface GetWindowShadingsRef {
  ...
  (dc: DataConnect, vars: GetWindowShadingsVariables): QueryRef<GetWindowShadingsData, GetWindowShadingsVariables>;
}
export const getWindowShadingsRef: GetWindowShadingsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getWindowShadingsRef:
```typescript
const name = getWindowShadingsRef.operationName;
console.log(name);
```

### Variables
The `GetWindowShadings` query requires an argument of type `GetWindowShadingsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetWindowShadingsVariables {
  buildingParametersId: UUIDString;
}
```
### Return Type
Recall that executing the `GetWindowShadings` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetWindowShadingsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetWindowShadings`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getWindowShadings, GetWindowShadingsVariables } from '@dataconnect/generated';

// The `GetWindowShadings` query requires an argument of type `GetWindowShadingsVariables`:
const getWindowShadingsVars: GetWindowShadingsVariables = {
  buildingParametersId: ..., 
};

// Call the `getWindowShadings()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getWindowShadings(getWindowShadingsVars);
// Variables can be defined inline as well.
const { data } = await getWindowShadings({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getWindowShadings(dataConnect, getWindowShadingsVars);

console.log(data.windowShadings);

// Or, you can use the `Promise` API.
getWindowShadings(getWindowShadingsVars).then((response) => {
  const data = response.data;
  console.log(data.windowShadings);
});
```

### Using `GetWindowShadings`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getWindowShadingsRef, GetWindowShadingsVariables } from '@dataconnect/generated';

// The `GetWindowShadings` query requires an argument of type `GetWindowShadingsVariables`:
const getWindowShadingsVars: GetWindowShadingsVariables = {
  buildingParametersId: ..., 
};

// Call the `getWindowShadingsRef()` function to get a reference to the query.
const ref = getWindowShadingsRef(getWindowShadingsVars);
// Variables can be defined inline as well.
const ref = getWindowShadingsRef({ buildingParametersId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getWindowShadingsRef(dataConnect, getWindowShadingsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.windowShadings);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.windowShadings);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## UpdateBuilding
You can execute the `UpdateBuilding` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateBuilding(vars: UpdateBuildingVariables): MutationPromise<UpdateBuildingData, UpdateBuildingVariables>;

interface UpdateBuildingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBuildingVariables): MutationRef<UpdateBuildingData, UpdateBuildingVariables>;
}
export const updateBuildingRef: UpdateBuildingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateBuilding(dc: DataConnect, vars: UpdateBuildingVariables): MutationPromise<UpdateBuildingData, UpdateBuildingVariables>;

interface UpdateBuildingRef {
  ...
  (dc: DataConnect, vars: UpdateBuildingVariables): MutationRef<UpdateBuildingData, UpdateBuildingVariables>;
}
export const updateBuildingRef: UpdateBuildingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateBuildingRef:
```typescript
const name = updateBuildingRef.operationName;
console.log(name);
```

### Variables
The `UpdateBuilding` mutation requires an argument of type `UpdateBuildingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateBuildingVariables {
  id: UUIDString;
  name: string;
}
```
### Return Type
Recall that executing the `UpdateBuilding` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateBuildingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateBuildingData {
  building_update?: Building_Key | null;
}
```
### Using `UpdateBuilding`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateBuilding, UpdateBuildingVariables } from '@dataconnect/generated';

// The `UpdateBuilding` mutation requires an argument of type `UpdateBuildingVariables`:
const updateBuildingVars: UpdateBuildingVariables = {
  id: ..., 
  name: ..., 
};

// Call the `updateBuilding()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateBuilding(updateBuildingVars);
// Variables can be defined inline as well.
const { data } = await updateBuilding({ id: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateBuilding(dataConnect, updateBuildingVars);

console.log(data.building_update);

// Or, you can use the `Promise` API.
updateBuilding(updateBuildingVars).then((response) => {
  const data = response.data;
  console.log(data.building_update);
});
```

### Using `UpdateBuilding`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateBuildingRef, UpdateBuildingVariables } from '@dataconnect/generated';

// The `UpdateBuilding` mutation requires an argument of type `UpdateBuildingVariables`:
const updateBuildingVars: UpdateBuildingVariables = {
  id: ..., 
  name: ..., 
};

// Call the `updateBuildingRef()` function to get a reference to the mutation.
const ref = updateBuildingRef(updateBuildingVars);
// Variables can be defined inline as well.
const ref = updateBuildingRef({ id: ..., name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateBuildingRef(dataConnect, updateBuildingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.building_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.building_update);
});
```

## UpdateBuildingParameters
You can execute the `UpdateBuildingParameters` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateBuildingParameters(vars: UpdateBuildingParametersVariables): MutationPromise<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;

interface UpdateBuildingParametersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateBuildingParametersVariables): MutationRef<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;
}
export const updateBuildingParametersRef: UpdateBuildingParametersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateBuildingParameters(dc: DataConnect, vars: UpdateBuildingParametersVariables): MutationPromise<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;

interface UpdateBuildingParametersRef {
  ...
  (dc: DataConnect, vars: UpdateBuildingParametersVariables): MutationRef<UpdateBuildingParametersData, UpdateBuildingParametersVariables>;
}
export const updateBuildingParametersRef: UpdateBuildingParametersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateBuildingParametersRef:
```typescript
const name = updateBuildingParametersRef.operationName;
console.log(name);
```

### Variables
The `UpdateBuildingParameters` mutation requires an argument of type `UpdateBuildingParametersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateBuildingParametersVariables {
  id: UUIDString;
  climate: Climate;
  floorArea: string;
  buildingType: BuildingType;
  envelope: EnvelopeType;
  isAC: boolean;
}
```
### Return Type
Recall that executing the `UpdateBuildingParameters` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateBuildingParametersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateBuildingParametersData {
  buildingParameters_update?: BuildingParameters_Key | null;
}
```
### Using `UpdateBuildingParameters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateBuildingParameters, UpdateBuildingParametersVariables } from '@dataconnect/generated';

// The `UpdateBuildingParameters` mutation requires an argument of type `UpdateBuildingParametersVariables`:
const updateBuildingParametersVars: UpdateBuildingParametersVariables = {
  id: ..., 
  climate: ..., 
  floorArea: ..., 
  buildingType: ..., 
  envelope: ..., 
  isAC: ..., 
};

// Call the `updateBuildingParameters()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateBuildingParameters(updateBuildingParametersVars);
// Variables can be defined inline as well.
const { data } = await updateBuildingParameters({ id: ..., climate: ..., floorArea: ..., buildingType: ..., envelope: ..., isAC: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateBuildingParameters(dataConnect, updateBuildingParametersVars);

console.log(data.buildingParameters_update);

// Or, you can use the `Promise` API.
updateBuildingParameters(updateBuildingParametersVars).then((response) => {
  const data = response.data;
  console.log(data.buildingParameters_update);
});
```

### Using `UpdateBuildingParameters`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateBuildingParametersRef, UpdateBuildingParametersVariables } from '@dataconnect/generated';

// The `UpdateBuildingParameters` mutation requires an argument of type `UpdateBuildingParametersVariables`:
const updateBuildingParametersVars: UpdateBuildingParametersVariables = {
  id: ..., 
  climate: ..., 
  floorArea: ..., 
  buildingType: ..., 
  envelope: ..., 
  isAC: ..., 
};

// Call the `updateBuildingParametersRef()` function to get a reference to the mutation.
const ref = updateBuildingParametersRef(updateBuildingParametersVars);
// Variables can be defined inline as well.
const ref = updateBuildingParametersRef({ id: ..., climate: ..., floorArea: ..., buildingType: ..., envelope: ..., isAC: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateBuildingParametersRef(dataConnect, updateBuildingParametersVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.buildingParameters_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.buildingParameters_update);
});
```

## UpdateInsulationRoof
You can execute the `UpdateInsulationRoof` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateInsulationRoof(vars: UpdateInsulationRoofVariables): MutationPromise<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;

interface UpdateInsulationRoofRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInsulationRoofVariables): MutationRef<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;
}
export const updateInsulationRoofRef: UpdateInsulationRoofRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateInsulationRoof(dc: DataConnect, vars: UpdateInsulationRoofVariables): MutationPromise<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;

interface UpdateInsulationRoofRef {
  ...
  (dc: DataConnect, vars: UpdateInsulationRoofVariables): MutationRef<UpdateInsulationRoofData, UpdateInsulationRoofVariables>;
}
export const updateInsulationRoofRef: UpdateInsulationRoofRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateInsulationRoofRef:
```typescript
const name = updateInsulationRoofRef.operationName;
console.log(name);
```

### Variables
The `UpdateInsulationRoof` mutation requires an argument of type `UpdateInsulationRoofVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateInsulationRoofVariables {
  id: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}
```
### Return Type
Recall that executing the `UpdateInsulationRoof` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateInsulationRoofData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateInsulationRoofData {
  insulationRoof_update?: InsulationRoof_Key | null;
}
```
### Using `UpdateInsulationRoof`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateInsulationRoof, UpdateInsulationRoofVariables } from '@dataconnect/generated';

// The `UpdateInsulationRoof` mutation requires an argument of type `UpdateInsulationRoofVariables`:
const updateInsulationRoofVars: UpdateInsulationRoofVariables = {
  id: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `updateInsulationRoof()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateInsulationRoof(updateInsulationRoofVars);
// Variables can be defined inline as well.
const { data } = await updateInsulationRoof({ id: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateInsulationRoof(dataConnect, updateInsulationRoofVars);

console.log(data.insulationRoof_update);

// Or, you can use the `Promise` API.
updateInsulationRoof(updateInsulationRoofVars).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_update);
});
```

### Using `UpdateInsulationRoof`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateInsulationRoofRef, UpdateInsulationRoofVariables } from '@dataconnect/generated';

// The `UpdateInsulationRoof` mutation requires an argument of type `UpdateInsulationRoofVariables`:
const updateInsulationRoofVars: UpdateInsulationRoofVariables = {
  id: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `updateInsulationRoofRef()` function to get a reference to the mutation.
const ref = updateInsulationRoofRef(updateInsulationRoofVars);
// Variables can be defined inline as well.
const ref = updateInsulationRoofRef({ id: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateInsulationRoofRef(dataConnect, updateInsulationRoofVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationRoof_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_update);
});
```

## UpdateInsulationWall
You can execute the `UpdateInsulationWall` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateInsulationWall(vars: UpdateInsulationWallVariables): MutationPromise<UpdateInsulationWallData, UpdateInsulationWallVariables>;

interface UpdateInsulationWallRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInsulationWallVariables): MutationRef<UpdateInsulationWallData, UpdateInsulationWallVariables>;
}
export const updateInsulationWallRef: UpdateInsulationWallRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateInsulationWall(dc: DataConnect, vars: UpdateInsulationWallVariables): MutationPromise<UpdateInsulationWallData, UpdateInsulationWallVariables>;

interface UpdateInsulationWallRef {
  ...
  (dc: DataConnect, vars: UpdateInsulationWallVariables): MutationRef<UpdateInsulationWallData, UpdateInsulationWallVariables>;
}
export const updateInsulationWallRef: UpdateInsulationWallRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateInsulationWallRef:
```typescript
const name = updateInsulationWallRef.operationName;
console.log(name);
```

### Variables
The `UpdateInsulationWall` mutation requires an argument of type `UpdateInsulationWallVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateInsulationWallVariables {
  id: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}
```
### Return Type
Recall that executing the `UpdateInsulationWall` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateInsulationWallData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateInsulationWallData {
  insulationWall_update?: InsulationWall_Key | null;
}
```
### Using `UpdateInsulationWall`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateInsulationWall, UpdateInsulationWallVariables } from '@dataconnect/generated';

// The `UpdateInsulationWall` mutation requires an argument of type `UpdateInsulationWallVariables`:
const updateInsulationWallVars: UpdateInsulationWallVariables = {
  id: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `updateInsulationWall()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateInsulationWall(updateInsulationWallVars);
// Variables can be defined inline as well.
const { data } = await updateInsulationWall({ id: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateInsulationWall(dataConnect, updateInsulationWallVars);

console.log(data.insulationWall_update);

// Or, you can use the `Promise` API.
updateInsulationWall(updateInsulationWallVars).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_update);
});
```

### Using `UpdateInsulationWall`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateInsulationWallRef, UpdateInsulationWallVariables } from '@dataconnect/generated';

// The `UpdateInsulationWall` mutation requires an argument of type `UpdateInsulationWallVariables`:
const updateInsulationWallVars: UpdateInsulationWallVariables = {
  id: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `updateInsulationWallRef()` function to get a reference to the mutation.
const ref = updateInsulationWallRef(updateInsulationWallVars);
// Variables can be defined inline as well.
const ref = updateInsulationWallRef({ id: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateInsulationWallRef(dataConnect, updateInsulationWallVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationWall_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_update);
});
```

## UpdateWindowSize
You can execute the `UpdateWindowSize` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateWindowSize(vars: UpdateWindowSizeVariables): MutationPromise<UpdateWindowSizeData, UpdateWindowSizeVariables>;

interface UpdateWindowSizeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWindowSizeVariables): MutationRef<UpdateWindowSizeData, UpdateWindowSizeVariables>;
}
export const updateWindowSizeRef: UpdateWindowSizeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateWindowSize(dc: DataConnect, vars: UpdateWindowSizeVariables): MutationPromise<UpdateWindowSizeData, UpdateWindowSizeVariables>;

interface UpdateWindowSizeRef {
  ...
  (dc: DataConnect, vars: UpdateWindowSizeVariables): MutationRef<UpdateWindowSizeData, UpdateWindowSizeVariables>;
}
export const updateWindowSizeRef: UpdateWindowSizeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateWindowSizeRef:
```typescript
const name = updateWindowSizeRef.operationName;
console.log(name);
```

### Variables
The `UpdateWindowSize` mutation requires an argument of type `UpdateWindowSizeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateWindowSizeVariables {
  id: UUIDString;
  area: number;
}
```
### Return Type
Recall that executing the `UpdateWindowSize` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateWindowSizeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateWindowSizeData {
  windowSize_update?: WindowSize_Key | null;
}
```
### Using `UpdateWindowSize`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateWindowSize, UpdateWindowSizeVariables } from '@dataconnect/generated';

// The `UpdateWindowSize` mutation requires an argument of type `UpdateWindowSizeVariables`:
const updateWindowSizeVars: UpdateWindowSizeVariables = {
  id: ..., 
  area: ..., 
};

// Call the `updateWindowSize()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateWindowSize(updateWindowSizeVars);
// Variables can be defined inline as well.
const { data } = await updateWindowSize({ id: ..., area: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateWindowSize(dataConnect, updateWindowSizeVars);

console.log(data.windowSize_update);

// Or, you can use the `Promise` API.
updateWindowSize(updateWindowSizeVars).then((response) => {
  const data = response.data;
  console.log(data.windowSize_update);
});
```

### Using `UpdateWindowSize`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateWindowSizeRef, UpdateWindowSizeVariables } from '@dataconnect/generated';

// The `UpdateWindowSize` mutation requires an argument of type `UpdateWindowSizeVariables`:
const updateWindowSizeVars: UpdateWindowSizeVariables = {
  id: ..., 
  area: ..., 
};

// Call the `updateWindowSizeRef()` function to get a reference to the mutation.
const ref = updateWindowSizeRef(updateWindowSizeVars);
// Variables can be defined inline as well.
const ref = updateWindowSizeRef({ id: ..., area: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateWindowSizeRef(dataConnect, updateWindowSizeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowSize_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowSize_update);
});
```

## UpdateWindowGlazing
You can execute the `UpdateWindowGlazing` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateWindowGlazing(vars: UpdateWindowGlazingVariables): MutationPromise<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;

interface UpdateWindowGlazingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWindowGlazingVariables): MutationRef<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;
}
export const updateWindowGlazingRef: UpdateWindowGlazingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateWindowGlazing(dc: DataConnect, vars: UpdateWindowGlazingVariables): MutationPromise<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;

interface UpdateWindowGlazingRef {
  ...
  (dc: DataConnect, vars: UpdateWindowGlazingVariables): MutationRef<UpdateWindowGlazingData, UpdateWindowGlazingVariables>;
}
export const updateWindowGlazingRef: UpdateWindowGlazingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateWindowGlazingRef:
```typescript
const name = updateWindowGlazingRef.operationName;
console.log(name);
```

### Variables
The `UpdateWindowGlazing` mutation requires an argument of type `UpdateWindowGlazingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateWindowGlazingVariables {
  id: UUIDString;
  type: string;
  rValue: number;
  shgc: number;
}
```
### Return Type
Recall that executing the `UpdateWindowGlazing` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateWindowGlazingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateWindowGlazingData {
  windowGlazing_update?: WindowGlazing_Key | null;
}
```
### Using `UpdateWindowGlazing`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateWindowGlazing, UpdateWindowGlazingVariables } from '@dataconnect/generated';

// The `UpdateWindowGlazing` mutation requires an argument of type `UpdateWindowGlazingVariables`:
const updateWindowGlazingVars: UpdateWindowGlazingVariables = {
  id: ..., 
  type: ..., 
  rValue: ..., 
  shgc: ..., 
};

// Call the `updateWindowGlazing()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateWindowGlazing(updateWindowGlazingVars);
// Variables can be defined inline as well.
const { data } = await updateWindowGlazing({ id: ..., type: ..., rValue: ..., shgc: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateWindowGlazing(dataConnect, updateWindowGlazingVars);

console.log(data.windowGlazing_update);

// Or, you can use the `Promise` API.
updateWindowGlazing(updateWindowGlazingVars).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_update);
});
```

### Using `UpdateWindowGlazing`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateWindowGlazingRef, UpdateWindowGlazingVariables } from '@dataconnect/generated';

// The `UpdateWindowGlazing` mutation requires an argument of type `UpdateWindowGlazingVariables`:
const updateWindowGlazingVars: UpdateWindowGlazingVariables = {
  id: ..., 
  type: ..., 
  rValue: ..., 
  shgc: ..., 
};

// Call the `updateWindowGlazingRef()` function to get a reference to the mutation.
const ref = updateWindowGlazingRef(updateWindowGlazingVars);
// Variables can be defined inline as well.
const ref = updateWindowGlazingRef({ id: ..., type: ..., rValue: ..., shgc: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateWindowGlazingRef(dataConnect, updateWindowGlazingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowGlazing_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_update);
});
```

## UpdateOrientation
You can execute the `UpdateOrientation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateOrientation(vars: UpdateOrientationVariables): MutationPromise<UpdateOrientationData, UpdateOrientationVariables>;

interface UpdateOrientationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOrientationVariables): MutationRef<UpdateOrientationData, UpdateOrientationVariables>;
}
export const updateOrientationRef: UpdateOrientationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateOrientation(dc: DataConnect, vars: UpdateOrientationVariables): MutationPromise<UpdateOrientationData, UpdateOrientationVariables>;

interface UpdateOrientationRef {
  ...
  (dc: DataConnect, vars: UpdateOrientationVariables): MutationRef<UpdateOrientationData, UpdateOrientationVariables>;
}
export const updateOrientationRef: UpdateOrientationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateOrientationRef:
```typescript
const name = updateOrientationRef.operationName;
console.log(name);
```

### Variables
The `UpdateOrientation` mutation requires an argument of type `UpdateOrientationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateOrientationVariables {
  id: UUIDString;
  direction: string;
}
```
### Return Type
Recall that executing the `UpdateOrientation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateOrientationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateOrientationData {
  orientation_update?: Orientation_Key | null;
}
```
### Using `UpdateOrientation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateOrientation, UpdateOrientationVariables } from '@dataconnect/generated';

// The `UpdateOrientation` mutation requires an argument of type `UpdateOrientationVariables`:
const updateOrientationVars: UpdateOrientationVariables = {
  id: ..., 
  direction: ..., 
};

// Call the `updateOrientation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateOrientation(updateOrientationVars);
// Variables can be defined inline as well.
const { data } = await updateOrientation({ id: ..., direction: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateOrientation(dataConnect, updateOrientationVars);

console.log(data.orientation_update);

// Or, you can use the `Promise` API.
updateOrientation(updateOrientationVars).then((response) => {
  const data = response.data;
  console.log(data.orientation_update);
});
```

### Using `UpdateOrientation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateOrientationRef, UpdateOrientationVariables } from '@dataconnect/generated';

// The `UpdateOrientation` mutation requires an argument of type `UpdateOrientationVariables`:
const updateOrientationVars: UpdateOrientationVariables = {
  id: ..., 
  direction: ..., 
};

// Call the `updateOrientationRef()` function to get a reference to the mutation.
const ref = updateOrientationRef(updateOrientationVars);
// Variables can be defined inline as well.
const ref = updateOrientationRef({ id: ..., direction: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateOrientationRef(dataConnect, updateOrientationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orientation_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orientation_update);
});
```

## UpdateOccupancy
You can execute the `UpdateOccupancy` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateOccupancy(vars: UpdateOccupancyVariables): MutationPromise<UpdateOccupancyData, UpdateOccupancyVariables>;

interface UpdateOccupancyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateOccupancyVariables): MutationRef<UpdateOccupancyData, UpdateOccupancyVariables>;
}
export const updateOccupancyRef: UpdateOccupancyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateOccupancy(dc: DataConnect, vars: UpdateOccupancyVariables): MutationPromise<UpdateOccupancyData, UpdateOccupancyVariables>;

interface UpdateOccupancyRef {
  ...
  (dc: DataConnect, vars: UpdateOccupancyVariables): MutationRef<UpdateOccupancyData, UpdateOccupancyVariables>;
}
export const updateOccupancyRef: UpdateOccupancyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateOccupancyRef:
```typescript
const name = updateOccupancyRef.operationName;
console.log(name);
```

### Variables
The `UpdateOccupancy` mutation requires an argument of type `UpdateOccupancyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateOccupancyVariables {
  id: UUIDString;
  numberOfPeople: number;
}
```
### Return Type
Recall that executing the `UpdateOccupancy` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateOccupancyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateOccupancyData {
  occupancy_update?: Occupancy_Key | null;
}
```
### Using `UpdateOccupancy`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateOccupancy, UpdateOccupancyVariables } from '@dataconnect/generated';

// The `UpdateOccupancy` mutation requires an argument of type `UpdateOccupancyVariables`:
const updateOccupancyVars: UpdateOccupancyVariables = {
  id: ..., 
  numberOfPeople: ..., 
};

// Call the `updateOccupancy()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateOccupancy(updateOccupancyVars);
// Variables can be defined inline as well.
const { data } = await updateOccupancy({ id: ..., numberOfPeople: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateOccupancy(dataConnect, updateOccupancyVars);

console.log(data.occupancy_update);

// Or, you can use the `Promise` API.
updateOccupancy(updateOccupancyVars).then((response) => {
  const data = response.data;
  console.log(data.occupancy_update);
});
```

### Using `UpdateOccupancy`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateOccupancyRef, UpdateOccupancyVariables } from '@dataconnect/generated';

// The `UpdateOccupancy` mutation requires an argument of type `UpdateOccupancyVariables`:
const updateOccupancyVars: UpdateOccupancyVariables = {
  id: ..., 
  numberOfPeople: ..., 
};

// Call the `updateOccupancyRef()` function to get a reference to the mutation.
const ref = updateOccupancyRef(updateOccupancyVars);
// Variables can be defined inline as well.
const ref = updateOccupancyRef({ id: ..., numberOfPeople: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateOccupancyRef(dataConnect, updateOccupancyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.occupancy_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.occupancy_update);
});
```

## UpdateWindowShading
You can execute the `UpdateWindowShading` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateWindowShading(vars: UpdateWindowShadingVariables): MutationPromise<UpdateWindowShadingData, UpdateWindowShadingVariables>;

interface UpdateWindowShadingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateWindowShadingVariables): MutationRef<UpdateWindowShadingData, UpdateWindowShadingVariables>;
}
export const updateWindowShadingRef: UpdateWindowShadingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateWindowShading(dc: DataConnect, vars: UpdateWindowShadingVariables): MutationPromise<UpdateWindowShadingData, UpdateWindowShadingVariables>;

interface UpdateWindowShadingRef {
  ...
  (dc: DataConnect, vars: UpdateWindowShadingVariables): MutationRef<UpdateWindowShadingData, UpdateWindowShadingVariables>;
}
export const updateWindowShadingRef: UpdateWindowShadingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateWindowShadingRef:
```typescript
const name = updateWindowShadingRef.operationName;
console.log(name);
```

### Variables
The `UpdateWindowShading` mutation requires an argument of type `UpdateWindowShadingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateWindowShadingVariables {
  id: UUIDString;
  type: string;
  isExternal: boolean;
}
```
### Return Type
Recall that executing the `UpdateWindowShading` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateWindowShadingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateWindowShadingData {
  windowShading_update?: WindowShading_Key | null;
}
```
### Using `UpdateWindowShading`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateWindowShading, UpdateWindowShadingVariables } from '@dataconnect/generated';

// The `UpdateWindowShading` mutation requires an argument of type `UpdateWindowShadingVariables`:
const updateWindowShadingVars: UpdateWindowShadingVariables = {
  id: ..., 
  type: ..., 
  isExternal: ..., 
};

// Call the `updateWindowShading()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateWindowShading(updateWindowShadingVars);
// Variables can be defined inline as well.
const { data } = await updateWindowShading({ id: ..., type: ..., isExternal: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateWindowShading(dataConnect, updateWindowShadingVars);

console.log(data.windowShading_update);

// Or, you can use the `Promise` API.
updateWindowShading(updateWindowShadingVars).then((response) => {
  const data = response.data;
  console.log(data.windowShading_update);
});
```

### Using `UpdateWindowShading`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateWindowShadingRef, UpdateWindowShadingVariables } from '@dataconnect/generated';

// The `UpdateWindowShading` mutation requires an argument of type `UpdateWindowShadingVariables`:
const updateWindowShadingVars: UpdateWindowShadingVariables = {
  id: ..., 
  type: ..., 
  isExternal: ..., 
};

// Call the `updateWindowShadingRef()` function to get a reference to the mutation.
const ref = updateWindowShadingRef(updateWindowShadingVars);
// Variables can be defined inline as well.
const ref = updateWindowShadingRef({ id: ..., type: ..., isExternal: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateWindowShadingRef(dataConnect, updateWindowShadingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowShading_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowShading_update);
});
```

## UpdateEnergyResult
You can execute the `UpdateEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateEnergyResult(vars: UpdateEnergyResultVariables): MutationPromise<UpdateEnergyResultData, UpdateEnergyResultVariables>;

interface UpdateEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEnergyResultVariables): MutationRef<UpdateEnergyResultData, UpdateEnergyResultVariables>;
}
export const updateEnergyResultRef: UpdateEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateEnergyResult(dc: DataConnect, vars: UpdateEnergyResultVariables): MutationPromise<UpdateEnergyResultData, UpdateEnergyResultVariables>;

interface UpdateEnergyResultRef {
  ...
  (dc: DataConnect, vars: UpdateEnergyResultVariables): MutationRef<UpdateEnergyResultData, UpdateEnergyResultVariables>;
}
export const updateEnergyResultRef: UpdateEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateEnergyResultRef:
```typescript
const name = updateEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `UpdateEnergyResult` mutation requires an argument of type `UpdateEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateEnergyResultVariables {
  id: UUIDString;
  improvementType: string;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `UpdateEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateEnergyResultData {
  energyResult_update?: EnergyResult_Key | null;
}
```
### Using `UpdateEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateEnergyResult, UpdateEnergyResultVariables } from '@dataconnect/generated';

// The `UpdateEnergyResult` mutation requires an argument of type `UpdateEnergyResultVariables`:
const updateEnergyResultVars: UpdateEnergyResultVariables = {
  id: ..., 
  improvementType: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `updateEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateEnergyResult(updateEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await updateEnergyResult({ id: ..., improvementType: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateEnergyResult(dataConnect, updateEnergyResultVars);

console.log(data.energyResult_update);

// Or, you can use the `Promise` API.
updateEnergyResult(updateEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_update);
});
```

### Using `UpdateEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateEnergyResultRef, UpdateEnergyResultVariables } from '@dataconnect/generated';

// The `UpdateEnergyResult` mutation requires an argument of type `UpdateEnergyResultVariables`:
const updateEnergyResultVars: UpdateEnergyResultVariables = {
  id: ..., 
  improvementType: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `updateEnergyResultRef()` function to get a reference to the mutation.
const ref = updateEnergyResultRef(updateEnergyResultVars);
// Variables can be defined inline as well.
const ref = updateEnergyResultRef({ id: ..., improvementType: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateEnergyResultRef(dataConnect, updateEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_update);
});
```

## CreateBuilding
You can execute the `CreateBuilding` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createBuilding(vars: CreateBuildingVariables): MutationPromise<CreateBuildingData, CreateBuildingVariables>;

interface CreateBuildingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBuildingVariables): MutationRef<CreateBuildingData, CreateBuildingVariables>;
}
export const createBuildingRef: CreateBuildingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createBuilding(dc: DataConnect, vars: CreateBuildingVariables): MutationPromise<CreateBuildingData, CreateBuildingVariables>;

interface CreateBuildingRef {
  ...
  (dc: DataConnect, vars: CreateBuildingVariables): MutationRef<CreateBuildingData, CreateBuildingVariables>;
}
export const createBuildingRef: CreateBuildingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createBuildingRef:
```typescript
const name = createBuildingRef.operationName;
console.log(name);
```

### Variables
The `CreateBuilding` mutation requires an argument of type `CreateBuildingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateBuildingVariables {
  name: string;
}
```
### Return Type
Recall that executing the `CreateBuilding` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateBuildingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateBuildingData {
  building_insert: Building_Key;
}
```
### Using `CreateBuilding`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createBuilding, CreateBuildingVariables } from '@dataconnect/generated';

// The `CreateBuilding` mutation requires an argument of type `CreateBuildingVariables`:
const createBuildingVars: CreateBuildingVariables = {
  name: ..., 
};

// Call the `createBuilding()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createBuilding(createBuildingVars);
// Variables can be defined inline as well.
const { data } = await createBuilding({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createBuilding(dataConnect, createBuildingVars);

console.log(data.building_insert);

// Or, you can use the `Promise` API.
createBuilding(createBuildingVars).then((response) => {
  const data = response.data;
  console.log(data.building_insert);
});
```

### Using `CreateBuilding`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createBuildingRef, CreateBuildingVariables } from '@dataconnect/generated';

// The `CreateBuilding` mutation requires an argument of type `CreateBuildingVariables`:
const createBuildingVars: CreateBuildingVariables = {
  name: ..., 
};

// Call the `createBuildingRef()` function to get a reference to the mutation.
const ref = createBuildingRef(createBuildingVars);
// Variables can be defined inline as well.
const ref = createBuildingRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createBuildingRef(dataConnect, createBuildingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.building_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.building_insert);
});
```

## CreateBuildingParameters
You can execute the `CreateBuildingParameters` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createBuildingParameters(vars: CreateBuildingParametersVariables): MutationPromise<CreateBuildingParametersData, CreateBuildingParametersVariables>;

interface CreateBuildingParametersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateBuildingParametersVariables): MutationRef<CreateBuildingParametersData, CreateBuildingParametersVariables>;
}
export const createBuildingParametersRef: CreateBuildingParametersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createBuildingParameters(dc: DataConnect, vars: CreateBuildingParametersVariables): MutationPromise<CreateBuildingParametersData, CreateBuildingParametersVariables>;

interface CreateBuildingParametersRef {
  ...
  (dc: DataConnect, vars: CreateBuildingParametersVariables): MutationRef<CreateBuildingParametersData, CreateBuildingParametersVariables>;
}
export const createBuildingParametersRef: CreateBuildingParametersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createBuildingParametersRef:
```typescript
const name = createBuildingParametersRef.operationName;
console.log(name);
```

### Variables
The `CreateBuildingParameters` mutation requires an argument of type `CreateBuildingParametersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateBuildingParametersVariables {
  buildingId: UUIDString;
  climate: Climate;
  floorArea: string;
  buildingType: BuildingType;
  envelope: EnvelopeType;
  isAC: boolean;
}
```
### Return Type
Recall that executing the `CreateBuildingParameters` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateBuildingParametersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateBuildingParametersData {
  buildingParameters_insert: BuildingParameters_Key;
}
```
### Using `CreateBuildingParameters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createBuildingParameters, CreateBuildingParametersVariables } from '@dataconnect/generated';

// The `CreateBuildingParameters` mutation requires an argument of type `CreateBuildingParametersVariables`:
const createBuildingParametersVars: CreateBuildingParametersVariables = {
  buildingId: ..., 
  climate: ..., 
  floorArea: ..., 
  buildingType: ..., 
  envelope: ..., 
  isAC: ..., 
};

// Call the `createBuildingParameters()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createBuildingParameters(createBuildingParametersVars);
// Variables can be defined inline as well.
const { data } = await createBuildingParameters({ buildingId: ..., climate: ..., floorArea: ..., buildingType: ..., envelope: ..., isAC: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createBuildingParameters(dataConnect, createBuildingParametersVars);

console.log(data.buildingParameters_insert);

// Or, you can use the `Promise` API.
createBuildingParameters(createBuildingParametersVars).then((response) => {
  const data = response.data;
  console.log(data.buildingParameters_insert);
});
```

### Using `CreateBuildingParameters`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createBuildingParametersRef, CreateBuildingParametersVariables } from '@dataconnect/generated';

// The `CreateBuildingParameters` mutation requires an argument of type `CreateBuildingParametersVariables`:
const createBuildingParametersVars: CreateBuildingParametersVariables = {
  buildingId: ..., 
  climate: ..., 
  floorArea: ..., 
  buildingType: ..., 
  envelope: ..., 
  isAC: ..., 
};

// Call the `createBuildingParametersRef()` function to get a reference to the mutation.
const ref = createBuildingParametersRef(createBuildingParametersVars);
// Variables can be defined inline as well.
const ref = createBuildingParametersRef({ buildingId: ..., climate: ..., floorArea: ..., buildingType: ..., envelope: ..., isAC: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createBuildingParametersRef(dataConnect, createBuildingParametersVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.buildingParameters_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.buildingParameters_insert);
});
```

## CreateInsulationRoof
You can execute the `CreateInsulationRoof` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInsulationRoof(vars: CreateInsulationRoofVariables): MutationPromise<CreateInsulationRoofData, CreateInsulationRoofVariables>;

interface CreateInsulationRoofRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationRoofVariables): MutationRef<CreateInsulationRoofData, CreateInsulationRoofVariables>;
}
export const createInsulationRoofRef: CreateInsulationRoofRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInsulationRoof(dc: DataConnect, vars: CreateInsulationRoofVariables): MutationPromise<CreateInsulationRoofData, CreateInsulationRoofVariables>;

interface CreateInsulationRoofRef {
  ...
  (dc: DataConnect, vars: CreateInsulationRoofVariables): MutationRef<CreateInsulationRoofData, CreateInsulationRoofVariables>;
}
export const createInsulationRoofRef: CreateInsulationRoofRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInsulationRoofRef:
```typescript
const name = createInsulationRoofRef.operationName;
console.log(name);
```

### Variables
The `CreateInsulationRoof` mutation requires an argument of type `CreateInsulationRoofVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateInsulationRoofVariables {
  buildingParametersId: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}
```
### Return Type
Recall that executing the `CreateInsulationRoof` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInsulationRoofData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInsulationRoofData {
  insulationRoof_insert: InsulationRoof_Key;
}
```
### Using `CreateInsulationRoof`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInsulationRoof, CreateInsulationRoofVariables } from '@dataconnect/generated';

// The `CreateInsulationRoof` mutation requires an argument of type `CreateInsulationRoofVariables`:
const createInsulationRoofVars: CreateInsulationRoofVariables = {
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `createInsulationRoof()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInsulationRoof(createInsulationRoofVars);
// Variables can be defined inline as well.
const { data } = await createInsulationRoof({ buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInsulationRoof(dataConnect, createInsulationRoofVars);

console.log(data.insulationRoof_insert);

// Or, you can use the `Promise` API.
createInsulationRoof(createInsulationRoofVars).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_insert);
});
```

### Using `CreateInsulationRoof`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInsulationRoofRef, CreateInsulationRoofVariables } from '@dataconnect/generated';

// The `CreateInsulationRoof` mutation requires an argument of type `CreateInsulationRoofVariables`:
const createInsulationRoofVars: CreateInsulationRoofVariables = {
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `createInsulationRoofRef()` function to get a reference to the mutation.
const ref = createInsulationRoofRef(createInsulationRoofVars);
// Variables can be defined inline as well.
const ref = createInsulationRoofRef({ buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInsulationRoofRef(dataConnect, createInsulationRoofVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationRoof_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_insert);
});
```

## CreateInsulationWall
You can execute the `CreateInsulationWall` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInsulationWall(vars: CreateInsulationWallVariables): MutationPromise<CreateInsulationWallData, CreateInsulationWallVariables>;

interface CreateInsulationWallRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationWallVariables): MutationRef<CreateInsulationWallData, CreateInsulationWallVariables>;
}
export const createInsulationWallRef: CreateInsulationWallRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInsulationWall(dc: DataConnect, vars: CreateInsulationWallVariables): MutationPromise<CreateInsulationWallData, CreateInsulationWallVariables>;

interface CreateInsulationWallRef {
  ...
  (dc: DataConnect, vars: CreateInsulationWallVariables): MutationRef<CreateInsulationWallData, CreateInsulationWallVariables>;
}
export const createInsulationWallRef: CreateInsulationWallRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInsulationWallRef:
```typescript
const name = createInsulationWallRef.operationName;
console.log(name);
```

### Variables
The `CreateInsulationWall` mutation requires an argument of type `CreateInsulationWallVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateInsulationWallVariables {
  buildingParametersId: UUIDString;
  type: string;
  thickness: number;
  rValue: number;
}
```
### Return Type
Recall that executing the `CreateInsulationWall` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInsulationWallData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInsulationWallData {
  insulationWall_insert: InsulationWall_Key;
}
```
### Using `CreateInsulationWall`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInsulationWall, CreateInsulationWallVariables } from '@dataconnect/generated';

// The `CreateInsulationWall` mutation requires an argument of type `CreateInsulationWallVariables`:
const createInsulationWallVars: CreateInsulationWallVariables = {
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `createInsulationWall()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInsulationWall(createInsulationWallVars);
// Variables can be defined inline as well.
const { data } = await createInsulationWall({ buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInsulationWall(dataConnect, createInsulationWallVars);

console.log(data.insulationWall_insert);

// Or, you can use the `Promise` API.
createInsulationWall(createInsulationWallVars).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_insert);
});
```

### Using `CreateInsulationWall`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInsulationWallRef, CreateInsulationWallVariables } from '@dataconnect/generated';

// The `CreateInsulationWall` mutation requires an argument of type `CreateInsulationWallVariables`:
const createInsulationWallVars: CreateInsulationWallVariables = {
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
};

// Call the `createInsulationWallRef()` function to get a reference to the mutation.
const ref = createInsulationWallRef(createInsulationWallVars);
// Variables can be defined inline as well.
const ref = createInsulationWallRef({ buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInsulationWallRef(dataConnect, createInsulationWallVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationWall_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_insert);
});
```

## CreateWindowSize
You can execute the `CreateWindowSize` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWindowSize(vars: CreateWindowSizeVariables): MutationPromise<CreateWindowSizeData, CreateWindowSizeVariables>;

interface CreateWindowSizeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowSizeVariables): MutationRef<CreateWindowSizeData, CreateWindowSizeVariables>;
}
export const createWindowSizeRef: CreateWindowSizeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWindowSize(dc: DataConnect, vars: CreateWindowSizeVariables): MutationPromise<CreateWindowSizeData, CreateWindowSizeVariables>;

interface CreateWindowSizeRef {
  ...
  (dc: DataConnect, vars: CreateWindowSizeVariables): MutationRef<CreateWindowSizeData, CreateWindowSizeVariables>;
}
export const createWindowSizeRef: CreateWindowSizeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWindowSizeRef:
```typescript
const name = createWindowSizeRef.operationName;
console.log(name);
```

### Variables
The `CreateWindowSize` mutation requires an argument of type `CreateWindowSizeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateWindowSizeVariables {
  buildingParametersId: UUIDString;
  area: number;
}
```
### Return Type
Recall that executing the `CreateWindowSize` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWindowSizeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWindowSizeData {
  windowSize_insert: WindowSize_Key;
}
```
### Using `CreateWindowSize`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWindowSize, CreateWindowSizeVariables } from '@dataconnect/generated';

// The `CreateWindowSize` mutation requires an argument of type `CreateWindowSizeVariables`:
const createWindowSizeVars: CreateWindowSizeVariables = {
  buildingParametersId: ..., 
  area: ..., 
};

// Call the `createWindowSize()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowSize(createWindowSizeVars);
// Variables can be defined inline as well.
const { data } = await createWindowSize({ buildingParametersId: ..., area: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWindowSize(dataConnect, createWindowSizeVars);

console.log(data.windowSize_insert);

// Or, you can use the `Promise` API.
createWindowSize(createWindowSizeVars).then((response) => {
  const data = response.data;
  console.log(data.windowSize_insert);
});
```

### Using `CreateWindowSize`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWindowSizeRef, CreateWindowSizeVariables } from '@dataconnect/generated';

// The `CreateWindowSize` mutation requires an argument of type `CreateWindowSizeVariables`:
const createWindowSizeVars: CreateWindowSizeVariables = {
  buildingParametersId: ..., 
  area: ..., 
};

// Call the `createWindowSizeRef()` function to get a reference to the mutation.
const ref = createWindowSizeRef(createWindowSizeVars);
// Variables can be defined inline as well.
const ref = createWindowSizeRef({ buildingParametersId: ..., area: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWindowSizeRef(dataConnect, createWindowSizeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowSize_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowSize_insert);
});
```

## CreateWindowGlazing
You can execute the `CreateWindowGlazing` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWindowGlazing(vars: CreateWindowGlazingVariables): MutationPromise<CreateWindowGlazingData, CreateWindowGlazingVariables>;

interface CreateWindowGlazingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowGlazingVariables): MutationRef<CreateWindowGlazingData, CreateWindowGlazingVariables>;
}
export const createWindowGlazingRef: CreateWindowGlazingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWindowGlazing(dc: DataConnect, vars: CreateWindowGlazingVariables): MutationPromise<CreateWindowGlazingData, CreateWindowGlazingVariables>;

interface CreateWindowGlazingRef {
  ...
  (dc: DataConnect, vars: CreateWindowGlazingVariables): MutationRef<CreateWindowGlazingData, CreateWindowGlazingVariables>;
}
export const createWindowGlazingRef: CreateWindowGlazingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWindowGlazingRef:
```typescript
const name = createWindowGlazingRef.operationName;
console.log(name);
```

### Variables
The `CreateWindowGlazing` mutation requires an argument of type `CreateWindowGlazingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateWindowGlazingVariables {
  buildingParametersId: UUIDString;
  type: string;
  rValue: number;
  shgc: number;
}
```
### Return Type
Recall that executing the `CreateWindowGlazing` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWindowGlazingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWindowGlazingData {
  windowGlazing_insert: WindowGlazing_Key;
}
```
### Using `CreateWindowGlazing`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWindowGlazing, CreateWindowGlazingVariables } from '@dataconnect/generated';

// The `CreateWindowGlazing` mutation requires an argument of type `CreateWindowGlazingVariables`:
const createWindowGlazingVars: CreateWindowGlazingVariables = {
  buildingParametersId: ..., 
  type: ..., 
  rValue: ..., 
  shgc: ..., 
};

// Call the `createWindowGlazing()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowGlazing(createWindowGlazingVars);
// Variables can be defined inline as well.
const { data } = await createWindowGlazing({ buildingParametersId: ..., type: ..., rValue: ..., shgc: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWindowGlazing(dataConnect, createWindowGlazingVars);

console.log(data.windowGlazing_insert);

// Or, you can use the `Promise` API.
createWindowGlazing(createWindowGlazingVars).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_insert);
});
```

### Using `CreateWindowGlazing`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWindowGlazingRef, CreateWindowGlazingVariables } from '@dataconnect/generated';

// The `CreateWindowGlazing` mutation requires an argument of type `CreateWindowGlazingVariables`:
const createWindowGlazingVars: CreateWindowGlazingVariables = {
  buildingParametersId: ..., 
  type: ..., 
  rValue: ..., 
  shgc: ..., 
};

// Call the `createWindowGlazingRef()` function to get a reference to the mutation.
const ref = createWindowGlazingRef(createWindowGlazingVars);
// Variables can be defined inline as well.
const ref = createWindowGlazingRef({ buildingParametersId: ..., type: ..., rValue: ..., shgc: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWindowGlazingRef(dataConnect, createWindowGlazingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowGlazing_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_insert);
});
```

## CreateOrientation
You can execute the `CreateOrientation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createOrientation(vars: CreateOrientationVariables): MutationPromise<CreateOrientationData, CreateOrientationVariables>;

interface CreateOrientationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrientationVariables): MutationRef<CreateOrientationData, CreateOrientationVariables>;
}
export const createOrientationRef: CreateOrientationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createOrientation(dc: DataConnect, vars: CreateOrientationVariables): MutationPromise<CreateOrientationData, CreateOrientationVariables>;

interface CreateOrientationRef {
  ...
  (dc: DataConnect, vars: CreateOrientationVariables): MutationRef<CreateOrientationData, CreateOrientationVariables>;
}
export const createOrientationRef: CreateOrientationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createOrientationRef:
```typescript
const name = createOrientationRef.operationName;
console.log(name);
```

### Variables
The `CreateOrientation` mutation requires an argument of type `CreateOrientationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateOrientationVariables {
  buildingParametersId: UUIDString;
  direction: string;
}
```
### Return Type
Recall that executing the `CreateOrientation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateOrientationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateOrientationData {
  orientation_insert: Orientation_Key;
}
```
### Using `CreateOrientation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createOrientation, CreateOrientationVariables } from '@dataconnect/generated';

// The `CreateOrientation` mutation requires an argument of type `CreateOrientationVariables`:
const createOrientationVars: CreateOrientationVariables = {
  buildingParametersId: ..., 
  direction: ..., 
};

// Call the `createOrientation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOrientation(createOrientationVars);
// Variables can be defined inline as well.
const { data } = await createOrientation({ buildingParametersId: ..., direction: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createOrientation(dataConnect, createOrientationVars);

console.log(data.orientation_insert);

// Or, you can use the `Promise` API.
createOrientation(createOrientationVars).then((response) => {
  const data = response.data;
  console.log(data.orientation_insert);
});
```

### Using `CreateOrientation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOrientationRef, CreateOrientationVariables } from '@dataconnect/generated';

// The `CreateOrientation` mutation requires an argument of type `CreateOrientationVariables`:
const createOrientationVars: CreateOrientationVariables = {
  buildingParametersId: ..., 
  direction: ..., 
};

// Call the `createOrientationRef()` function to get a reference to the mutation.
const ref = createOrientationRef(createOrientationVars);
// Variables can be defined inline as well.
const ref = createOrientationRef({ buildingParametersId: ..., direction: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createOrientationRef(dataConnect, createOrientationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orientation_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orientation_insert);
});
```

## CreateOccupancy
You can execute the `CreateOccupancy` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createOccupancy(vars: CreateOccupancyVariables): MutationPromise<CreateOccupancyData, CreateOccupancyVariables>;

interface CreateOccupancyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOccupancyVariables): MutationRef<CreateOccupancyData, CreateOccupancyVariables>;
}
export const createOccupancyRef: CreateOccupancyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createOccupancy(dc: DataConnect, vars: CreateOccupancyVariables): MutationPromise<CreateOccupancyData, CreateOccupancyVariables>;

interface CreateOccupancyRef {
  ...
  (dc: DataConnect, vars: CreateOccupancyVariables): MutationRef<CreateOccupancyData, CreateOccupancyVariables>;
}
export const createOccupancyRef: CreateOccupancyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createOccupancyRef:
```typescript
const name = createOccupancyRef.operationName;
console.log(name);
```

### Variables
The `CreateOccupancy` mutation requires an argument of type `CreateOccupancyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateOccupancyVariables {
  buildingParametersId: UUIDString;
  numberOfPeople: number;
}
```
### Return Type
Recall that executing the `CreateOccupancy` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateOccupancyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateOccupancyData {
  occupancy_insert: Occupancy_Key;
}
```
### Using `CreateOccupancy`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createOccupancy, CreateOccupancyVariables } from '@dataconnect/generated';

// The `CreateOccupancy` mutation requires an argument of type `CreateOccupancyVariables`:
const createOccupancyVars: CreateOccupancyVariables = {
  buildingParametersId: ..., 
  numberOfPeople: ..., 
};

// Call the `createOccupancy()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOccupancy(createOccupancyVars);
// Variables can be defined inline as well.
const { data } = await createOccupancy({ buildingParametersId: ..., numberOfPeople: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createOccupancy(dataConnect, createOccupancyVars);

console.log(data.occupancy_insert);

// Or, you can use the `Promise` API.
createOccupancy(createOccupancyVars).then((response) => {
  const data = response.data;
  console.log(data.occupancy_insert);
});
```

### Using `CreateOccupancy`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOccupancyRef, CreateOccupancyVariables } from '@dataconnect/generated';

// The `CreateOccupancy` mutation requires an argument of type `CreateOccupancyVariables`:
const createOccupancyVars: CreateOccupancyVariables = {
  buildingParametersId: ..., 
  numberOfPeople: ..., 
};

// Call the `createOccupancyRef()` function to get a reference to the mutation.
const ref = createOccupancyRef(createOccupancyVars);
// Variables can be defined inline as well.
const ref = createOccupancyRef({ buildingParametersId: ..., numberOfPeople: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createOccupancyRef(dataConnect, createOccupancyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.occupancy_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.occupancy_insert);
});
```

## CreateWindowShading
You can execute the `CreateWindowShading` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWindowShading(vars: CreateWindowShadingVariables): MutationPromise<CreateWindowShadingData, CreateWindowShadingVariables>;

interface CreateWindowShadingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowShadingVariables): MutationRef<CreateWindowShadingData, CreateWindowShadingVariables>;
}
export const createWindowShadingRef: CreateWindowShadingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWindowShading(dc: DataConnect, vars: CreateWindowShadingVariables): MutationPromise<CreateWindowShadingData, CreateWindowShadingVariables>;

interface CreateWindowShadingRef {
  ...
  (dc: DataConnect, vars: CreateWindowShadingVariables): MutationRef<CreateWindowShadingData, CreateWindowShadingVariables>;
}
export const createWindowShadingRef: CreateWindowShadingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWindowShadingRef:
```typescript
const name = createWindowShadingRef.operationName;
console.log(name);
```

### Variables
The `CreateWindowShading` mutation requires an argument of type `CreateWindowShadingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateWindowShadingVariables {
  buildingParametersId: UUIDString;
  type: string;
  isExternal: boolean;
}
```
### Return Type
Recall that executing the `CreateWindowShading` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWindowShadingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWindowShadingData {
  windowShading_insert: WindowShading_Key;
}
```
### Using `CreateWindowShading`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWindowShading, CreateWindowShadingVariables } from '@dataconnect/generated';

// The `CreateWindowShading` mutation requires an argument of type `CreateWindowShadingVariables`:
const createWindowShadingVars: CreateWindowShadingVariables = {
  buildingParametersId: ..., 
  type: ..., 
  isExternal: ..., 
};

// Call the `createWindowShading()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowShading(createWindowShadingVars);
// Variables can be defined inline as well.
const { data } = await createWindowShading({ buildingParametersId: ..., type: ..., isExternal: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWindowShading(dataConnect, createWindowShadingVars);

console.log(data.windowShading_insert);

// Or, you can use the `Promise` API.
createWindowShading(createWindowShadingVars).then((response) => {
  const data = response.data;
  console.log(data.windowShading_insert);
});
```

### Using `CreateWindowShading`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWindowShadingRef, CreateWindowShadingVariables } from '@dataconnect/generated';

// The `CreateWindowShading` mutation requires an argument of type `CreateWindowShadingVariables`:
const createWindowShadingVars: CreateWindowShadingVariables = {
  buildingParametersId: ..., 
  type: ..., 
  isExternal: ..., 
};

// Call the `createWindowShadingRef()` function to get a reference to the mutation.
const ref = createWindowShadingRef(createWindowShadingVars);
// Variables can be defined inline as well.
const ref = createWindowShadingRef({ buildingParametersId: ..., type: ..., isExternal: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWindowShadingRef(dataConnect, createWindowShadingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowShading_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowShading_insert);
});
```

## AssignInsulationRoofEnergyResult
You can execute the `AssignInsulationRoofEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignInsulationRoofEnergyResult(vars: AssignInsulationRoofEnergyResultVariables): MutationPromise<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;

interface AssignInsulationRoofEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignInsulationRoofEnergyResultVariables): MutationRef<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;
}
export const assignInsulationRoofEnergyResultRef: AssignInsulationRoofEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignInsulationRoofEnergyResult(dc: DataConnect, vars: AssignInsulationRoofEnergyResultVariables): MutationPromise<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;

interface AssignInsulationRoofEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignInsulationRoofEnergyResultVariables): MutationRef<AssignInsulationRoofEnergyResultData, AssignInsulationRoofEnergyResultVariables>;
}
export const assignInsulationRoofEnergyResultRef: AssignInsulationRoofEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignInsulationRoofEnergyResultRef:
```typescript
const name = assignInsulationRoofEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignInsulationRoofEnergyResult` mutation requires an argument of type `AssignInsulationRoofEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignInsulationRoofEnergyResultVariables {
  insulationRoofId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignInsulationRoofEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignInsulationRoofEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignInsulationRoofEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignInsulationRoofEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignInsulationRoofEnergyResult, AssignInsulationRoofEnergyResultVariables } from '@dataconnect/generated';

// The `AssignInsulationRoofEnergyResult` mutation requires an argument of type `AssignInsulationRoofEnergyResultVariables`:
const assignInsulationRoofEnergyResultVars: AssignInsulationRoofEnergyResultVariables = {
  insulationRoofId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignInsulationRoofEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignInsulationRoofEnergyResult(assignInsulationRoofEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignInsulationRoofEnergyResult({ insulationRoofId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignInsulationRoofEnergyResult(dataConnect, assignInsulationRoofEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignInsulationRoofEnergyResult(assignInsulationRoofEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignInsulationRoofEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignInsulationRoofEnergyResultRef, AssignInsulationRoofEnergyResultVariables } from '@dataconnect/generated';

// The `AssignInsulationRoofEnergyResult` mutation requires an argument of type `AssignInsulationRoofEnergyResultVariables`:
const assignInsulationRoofEnergyResultVars: AssignInsulationRoofEnergyResultVariables = {
  insulationRoofId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignInsulationRoofEnergyResultRef()` function to get a reference to the mutation.
const ref = assignInsulationRoofEnergyResultRef(assignInsulationRoofEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignInsulationRoofEnergyResultRef({ insulationRoofId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignInsulationRoofEnergyResultRef(dataConnect, assignInsulationRoofEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## AssignInsulationWallEnergyResult
You can execute the `AssignInsulationWallEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignInsulationWallEnergyResult(vars: AssignInsulationWallEnergyResultVariables): MutationPromise<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;

interface AssignInsulationWallEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignInsulationWallEnergyResultVariables): MutationRef<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;
}
export const assignInsulationWallEnergyResultRef: AssignInsulationWallEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignInsulationWallEnergyResult(dc: DataConnect, vars: AssignInsulationWallEnergyResultVariables): MutationPromise<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;

interface AssignInsulationWallEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignInsulationWallEnergyResultVariables): MutationRef<AssignInsulationWallEnergyResultData, AssignInsulationWallEnergyResultVariables>;
}
export const assignInsulationWallEnergyResultRef: AssignInsulationWallEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignInsulationWallEnergyResultRef:
```typescript
const name = assignInsulationWallEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignInsulationWallEnergyResult` mutation requires an argument of type `AssignInsulationWallEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignInsulationWallEnergyResultVariables {
  insulationWallId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignInsulationWallEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignInsulationWallEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignInsulationWallEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignInsulationWallEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignInsulationWallEnergyResult, AssignInsulationWallEnergyResultVariables } from '@dataconnect/generated';

// The `AssignInsulationWallEnergyResult` mutation requires an argument of type `AssignInsulationWallEnergyResultVariables`:
const assignInsulationWallEnergyResultVars: AssignInsulationWallEnergyResultVariables = {
  insulationWallId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignInsulationWallEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignInsulationWallEnergyResult(assignInsulationWallEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignInsulationWallEnergyResult({ insulationWallId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignInsulationWallEnergyResult(dataConnect, assignInsulationWallEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignInsulationWallEnergyResult(assignInsulationWallEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignInsulationWallEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignInsulationWallEnergyResultRef, AssignInsulationWallEnergyResultVariables } from '@dataconnect/generated';

// The `AssignInsulationWallEnergyResult` mutation requires an argument of type `AssignInsulationWallEnergyResultVariables`:
const assignInsulationWallEnergyResultVars: AssignInsulationWallEnergyResultVariables = {
  insulationWallId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignInsulationWallEnergyResultRef()` function to get a reference to the mutation.
const ref = assignInsulationWallEnergyResultRef(assignInsulationWallEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignInsulationWallEnergyResultRef({ insulationWallId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignInsulationWallEnergyResultRef(dataConnect, assignInsulationWallEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## AssignWindowSizeEnergyResult
You can execute the `AssignWindowSizeEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignWindowSizeEnergyResult(vars: AssignWindowSizeEnergyResultVariables): MutationPromise<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;

interface AssignWindowSizeEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignWindowSizeEnergyResultVariables): MutationRef<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;
}
export const assignWindowSizeEnergyResultRef: AssignWindowSizeEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignWindowSizeEnergyResult(dc: DataConnect, vars: AssignWindowSizeEnergyResultVariables): MutationPromise<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;

interface AssignWindowSizeEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignWindowSizeEnergyResultVariables): MutationRef<AssignWindowSizeEnergyResultData, AssignWindowSizeEnergyResultVariables>;
}
export const assignWindowSizeEnergyResultRef: AssignWindowSizeEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignWindowSizeEnergyResultRef:
```typescript
const name = assignWindowSizeEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignWindowSizeEnergyResult` mutation requires an argument of type `AssignWindowSizeEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignWindowSizeEnergyResultVariables {
  windowSizeId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignWindowSizeEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignWindowSizeEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignWindowSizeEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignWindowSizeEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignWindowSizeEnergyResult, AssignWindowSizeEnergyResultVariables } from '@dataconnect/generated';

// The `AssignWindowSizeEnergyResult` mutation requires an argument of type `AssignWindowSizeEnergyResultVariables`:
const assignWindowSizeEnergyResultVars: AssignWindowSizeEnergyResultVariables = {
  windowSizeId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignWindowSizeEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignWindowSizeEnergyResult(assignWindowSizeEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignWindowSizeEnergyResult({ windowSizeId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignWindowSizeEnergyResult(dataConnect, assignWindowSizeEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignWindowSizeEnergyResult(assignWindowSizeEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignWindowSizeEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignWindowSizeEnergyResultRef, AssignWindowSizeEnergyResultVariables } from '@dataconnect/generated';

// The `AssignWindowSizeEnergyResult` mutation requires an argument of type `AssignWindowSizeEnergyResultVariables`:
const assignWindowSizeEnergyResultVars: AssignWindowSizeEnergyResultVariables = {
  windowSizeId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignWindowSizeEnergyResultRef()` function to get a reference to the mutation.
const ref = assignWindowSizeEnergyResultRef(assignWindowSizeEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignWindowSizeEnergyResultRef({ windowSizeId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignWindowSizeEnergyResultRef(dataConnect, assignWindowSizeEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## AssignWindowGlazingEnergyResult
You can execute the `AssignWindowGlazingEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignWindowGlazingEnergyResult(vars: AssignWindowGlazingEnergyResultVariables): MutationPromise<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;

interface AssignWindowGlazingEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignWindowGlazingEnergyResultVariables): MutationRef<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;
}
export const assignWindowGlazingEnergyResultRef: AssignWindowGlazingEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignWindowGlazingEnergyResult(dc: DataConnect, vars: AssignWindowGlazingEnergyResultVariables): MutationPromise<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;

interface AssignWindowGlazingEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignWindowGlazingEnergyResultVariables): MutationRef<AssignWindowGlazingEnergyResultData, AssignWindowGlazingEnergyResultVariables>;
}
export const assignWindowGlazingEnergyResultRef: AssignWindowGlazingEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignWindowGlazingEnergyResultRef:
```typescript
const name = assignWindowGlazingEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignWindowGlazingEnergyResult` mutation requires an argument of type `AssignWindowGlazingEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignWindowGlazingEnergyResultVariables {
  windowGlazingId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignWindowGlazingEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignWindowGlazingEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignWindowGlazingEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignWindowGlazingEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignWindowGlazingEnergyResult, AssignWindowGlazingEnergyResultVariables } from '@dataconnect/generated';

// The `AssignWindowGlazingEnergyResult` mutation requires an argument of type `AssignWindowGlazingEnergyResultVariables`:
const assignWindowGlazingEnergyResultVars: AssignWindowGlazingEnergyResultVariables = {
  windowGlazingId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignWindowGlazingEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignWindowGlazingEnergyResult(assignWindowGlazingEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignWindowGlazingEnergyResult({ windowGlazingId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignWindowGlazingEnergyResult(dataConnect, assignWindowGlazingEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignWindowGlazingEnergyResult(assignWindowGlazingEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignWindowGlazingEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignWindowGlazingEnergyResultRef, AssignWindowGlazingEnergyResultVariables } from '@dataconnect/generated';

// The `AssignWindowGlazingEnergyResult` mutation requires an argument of type `AssignWindowGlazingEnergyResultVariables`:
const assignWindowGlazingEnergyResultVars: AssignWindowGlazingEnergyResultVariables = {
  windowGlazingId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignWindowGlazingEnergyResultRef()` function to get a reference to the mutation.
const ref = assignWindowGlazingEnergyResultRef(assignWindowGlazingEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignWindowGlazingEnergyResultRef({ windowGlazingId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignWindowGlazingEnergyResultRef(dataConnect, assignWindowGlazingEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## AssignOrientationEnergyResult
You can execute the `AssignOrientationEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignOrientationEnergyResult(vars: AssignOrientationEnergyResultVariables): MutationPromise<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;

interface AssignOrientationEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignOrientationEnergyResultVariables): MutationRef<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;
}
export const assignOrientationEnergyResultRef: AssignOrientationEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignOrientationEnergyResult(dc: DataConnect, vars: AssignOrientationEnergyResultVariables): MutationPromise<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;

interface AssignOrientationEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignOrientationEnergyResultVariables): MutationRef<AssignOrientationEnergyResultData, AssignOrientationEnergyResultVariables>;
}
export const assignOrientationEnergyResultRef: AssignOrientationEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignOrientationEnergyResultRef:
```typescript
const name = assignOrientationEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignOrientationEnergyResult` mutation requires an argument of type `AssignOrientationEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignOrientationEnergyResultVariables {
  orientationId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignOrientationEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignOrientationEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignOrientationEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignOrientationEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignOrientationEnergyResult, AssignOrientationEnergyResultVariables } from '@dataconnect/generated';

// The `AssignOrientationEnergyResult` mutation requires an argument of type `AssignOrientationEnergyResultVariables`:
const assignOrientationEnergyResultVars: AssignOrientationEnergyResultVariables = {
  orientationId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignOrientationEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignOrientationEnergyResult(assignOrientationEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignOrientationEnergyResult({ orientationId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignOrientationEnergyResult(dataConnect, assignOrientationEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignOrientationEnergyResult(assignOrientationEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignOrientationEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignOrientationEnergyResultRef, AssignOrientationEnergyResultVariables } from '@dataconnect/generated';

// The `AssignOrientationEnergyResult` mutation requires an argument of type `AssignOrientationEnergyResultVariables`:
const assignOrientationEnergyResultVars: AssignOrientationEnergyResultVariables = {
  orientationId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignOrientationEnergyResultRef()` function to get a reference to the mutation.
const ref = assignOrientationEnergyResultRef(assignOrientationEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignOrientationEnergyResultRef({ orientationId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignOrientationEnergyResultRef(dataConnect, assignOrientationEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## AssignOccupancyEnergyResult
You can execute the `AssignOccupancyEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignOccupancyEnergyResult(vars: AssignOccupancyEnergyResultVariables): MutationPromise<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;

interface AssignOccupancyEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignOccupancyEnergyResultVariables): MutationRef<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;
}
export const assignOccupancyEnergyResultRef: AssignOccupancyEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignOccupancyEnergyResult(dc: DataConnect, vars: AssignOccupancyEnergyResultVariables): MutationPromise<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;

interface AssignOccupancyEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignOccupancyEnergyResultVariables): MutationRef<AssignOccupancyEnergyResultData, AssignOccupancyEnergyResultVariables>;
}
export const assignOccupancyEnergyResultRef: AssignOccupancyEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignOccupancyEnergyResultRef:
```typescript
const name = assignOccupancyEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignOccupancyEnergyResult` mutation requires an argument of type `AssignOccupancyEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignOccupancyEnergyResultVariables {
  occupancyId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignOccupancyEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignOccupancyEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignOccupancyEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignOccupancyEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignOccupancyEnergyResult, AssignOccupancyEnergyResultVariables } from '@dataconnect/generated';

// The `AssignOccupancyEnergyResult` mutation requires an argument of type `AssignOccupancyEnergyResultVariables`:
const assignOccupancyEnergyResultVars: AssignOccupancyEnergyResultVariables = {
  occupancyId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignOccupancyEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignOccupancyEnergyResult(assignOccupancyEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignOccupancyEnergyResult({ occupancyId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignOccupancyEnergyResult(dataConnect, assignOccupancyEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignOccupancyEnergyResult(assignOccupancyEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignOccupancyEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignOccupancyEnergyResultRef, AssignOccupancyEnergyResultVariables } from '@dataconnect/generated';

// The `AssignOccupancyEnergyResult` mutation requires an argument of type `AssignOccupancyEnergyResultVariables`:
const assignOccupancyEnergyResultVars: AssignOccupancyEnergyResultVariables = {
  occupancyId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignOccupancyEnergyResultRef()` function to get a reference to the mutation.
const ref = assignOccupancyEnergyResultRef(assignOccupancyEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignOccupancyEnergyResultRef({ occupancyId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignOccupancyEnergyResultRef(dataConnect, assignOccupancyEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## AssignWindowShadingEnergyResult
You can execute the `AssignWindowShadingEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
assignWindowShadingEnergyResult(vars: AssignWindowShadingEnergyResultVariables): MutationPromise<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;

interface AssignWindowShadingEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AssignWindowShadingEnergyResultVariables): MutationRef<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;
}
export const assignWindowShadingEnergyResultRef: AssignWindowShadingEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
assignWindowShadingEnergyResult(dc: DataConnect, vars: AssignWindowShadingEnergyResultVariables): MutationPromise<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;

interface AssignWindowShadingEnergyResultRef {
  ...
  (dc: DataConnect, vars: AssignWindowShadingEnergyResultVariables): MutationRef<AssignWindowShadingEnergyResultData, AssignWindowShadingEnergyResultVariables>;
}
export const assignWindowShadingEnergyResultRef: AssignWindowShadingEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the assignWindowShadingEnergyResultRef:
```typescript
const name = assignWindowShadingEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `AssignWindowShadingEnergyResult` mutation requires an argument of type `AssignWindowShadingEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AssignWindowShadingEnergyResultVariables {
  windowShadingId: UUIDString;
  cooling: number;
  heating: number;
  total: number;
  carbon: number;
  cost: number;
}
```
### Return Type
Recall that executing the `AssignWindowShadingEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AssignWindowShadingEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AssignWindowShadingEnergyResultData {
  energyResult_insert: EnergyResult_Key;
}
```
### Using `AssignWindowShadingEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, assignWindowShadingEnergyResult, AssignWindowShadingEnergyResultVariables } from '@dataconnect/generated';

// The `AssignWindowShadingEnergyResult` mutation requires an argument of type `AssignWindowShadingEnergyResultVariables`:
const assignWindowShadingEnergyResultVars: AssignWindowShadingEnergyResultVariables = {
  windowShadingId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignWindowShadingEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await assignWindowShadingEnergyResult(assignWindowShadingEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await assignWindowShadingEnergyResult({ windowShadingId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await assignWindowShadingEnergyResult(dataConnect, assignWindowShadingEnergyResultVars);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
assignWindowShadingEnergyResult(assignWindowShadingEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

### Using `AssignWindowShadingEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, assignWindowShadingEnergyResultRef, AssignWindowShadingEnergyResultVariables } from '@dataconnect/generated';

// The `AssignWindowShadingEnergyResult` mutation requires an argument of type `AssignWindowShadingEnergyResultVariables`:
const assignWindowShadingEnergyResultVars: AssignWindowShadingEnergyResultVariables = {
  windowShadingId: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `assignWindowShadingEnergyResultRef()` function to get a reference to the mutation.
const ref = assignWindowShadingEnergyResultRef(assignWindowShadingEnergyResultVars);
// Variables can be defined inline as well.
const ref = assignWindowShadingEnergyResultRef({ windowShadingId: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = assignWindowShadingEnergyResultRef(dataConnect, assignWindowShadingEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_insert);
});
```

## CreateInsulationRoofWithEnergyResult
You can execute the `CreateInsulationRoofWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInsulationRoofWithEnergyResult(vars: CreateInsulationRoofWithEnergyResultVariables): MutationPromise<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;

interface CreateInsulationRoofWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationRoofWithEnergyResultVariables): MutationRef<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;
}
export const createInsulationRoofWithEnergyResultRef: CreateInsulationRoofWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInsulationRoofWithEnergyResult(dc: DataConnect, vars: CreateInsulationRoofWithEnergyResultVariables): MutationPromise<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;

interface CreateInsulationRoofWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateInsulationRoofWithEnergyResultVariables): MutationRef<CreateInsulationRoofWithEnergyResultData, CreateInsulationRoofWithEnergyResultVariables>;
}
export const createInsulationRoofWithEnergyResultRef: CreateInsulationRoofWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInsulationRoofWithEnergyResultRef:
```typescript
const name = createInsulationRoofWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateInsulationRoofWithEnergyResult` mutation requires an argument of type `CreateInsulationRoofWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateInsulationRoofWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInsulationRoofWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInsulationRoofWithEnergyResultData {
  insulationRoof_insert: InsulationRoof_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateInsulationRoofWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInsulationRoofWithEnergyResult, CreateInsulationRoofWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateInsulationRoofWithEnergyResult` mutation requires an argument of type `CreateInsulationRoofWithEnergyResultVariables`:
const createInsulationRoofWithEnergyResultVars: CreateInsulationRoofWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createInsulationRoofWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInsulationRoofWithEnergyResult(createInsulationRoofWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createInsulationRoofWithEnergyResult({ id: ..., buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInsulationRoofWithEnergyResult(dataConnect, createInsulationRoofWithEnergyResultVars);

console.log(data.insulationRoof_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createInsulationRoofWithEnergyResult(createInsulationRoofWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateInsulationRoofWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInsulationRoofWithEnergyResultRef, CreateInsulationRoofWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateInsulationRoofWithEnergyResult` mutation requires an argument of type `CreateInsulationRoofWithEnergyResultVariables`:
const createInsulationRoofWithEnergyResultVars: CreateInsulationRoofWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createInsulationRoofWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createInsulationRoofWithEnergyResultRef(createInsulationRoofWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createInsulationRoofWithEnergyResultRef({ id: ..., buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInsulationRoofWithEnergyResultRef(dataConnect, createInsulationRoofWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationRoof_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_insert);
  console.log(data.energyResult_insert);
});
```

## CreateInsulationWallWithEnergyResult
You can execute the `CreateInsulationWallWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createInsulationWallWithEnergyResult(vars: CreateInsulationWallWithEnergyResultVariables): MutationPromise<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;

interface CreateInsulationWallWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInsulationWallWithEnergyResultVariables): MutationRef<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;
}
export const createInsulationWallWithEnergyResultRef: CreateInsulationWallWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createInsulationWallWithEnergyResult(dc: DataConnect, vars: CreateInsulationWallWithEnergyResultVariables): MutationPromise<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;

interface CreateInsulationWallWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateInsulationWallWithEnergyResultVariables): MutationRef<CreateInsulationWallWithEnergyResultData, CreateInsulationWallWithEnergyResultVariables>;
}
export const createInsulationWallWithEnergyResultRef: CreateInsulationWallWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createInsulationWallWithEnergyResultRef:
```typescript
const name = createInsulationWallWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateInsulationWallWithEnergyResult` mutation requires an argument of type `CreateInsulationWallWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateInsulationWallWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateInsulationWallWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateInsulationWallWithEnergyResultData {
  insulationWall_insert: InsulationWall_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateInsulationWallWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createInsulationWallWithEnergyResult, CreateInsulationWallWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateInsulationWallWithEnergyResult` mutation requires an argument of type `CreateInsulationWallWithEnergyResultVariables`:
const createInsulationWallWithEnergyResultVars: CreateInsulationWallWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createInsulationWallWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createInsulationWallWithEnergyResult(createInsulationWallWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createInsulationWallWithEnergyResult({ id: ..., buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createInsulationWallWithEnergyResult(dataConnect, createInsulationWallWithEnergyResultVars);

console.log(data.insulationWall_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createInsulationWallWithEnergyResult(createInsulationWallWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateInsulationWallWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createInsulationWallWithEnergyResultRef, CreateInsulationWallWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateInsulationWallWithEnergyResult` mutation requires an argument of type `CreateInsulationWallWithEnergyResultVariables`:
const createInsulationWallWithEnergyResultVars: CreateInsulationWallWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  thickness: ..., 
  rValue: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createInsulationWallWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createInsulationWallWithEnergyResultRef(createInsulationWallWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createInsulationWallWithEnergyResultRef({ id: ..., buildingParametersId: ..., type: ..., thickness: ..., rValue: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createInsulationWallWithEnergyResultRef(dataConnect, createInsulationWallWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationWall_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_insert);
  console.log(data.energyResult_insert);
});
```

## CreateWindowSizeWithEnergyResult
You can execute the `CreateWindowSizeWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWindowSizeWithEnergyResult(vars: CreateWindowSizeWithEnergyResultVariables): MutationPromise<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;

interface CreateWindowSizeWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowSizeWithEnergyResultVariables): MutationRef<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;
}
export const createWindowSizeWithEnergyResultRef: CreateWindowSizeWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWindowSizeWithEnergyResult(dc: DataConnect, vars: CreateWindowSizeWithEnergyResultVariables): MutationPromise<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;

interface CreateWindowSizeWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateWindowSizeWithEnergyResultVariables): MutationRef<CreateWindowSizeWithEnergyResultData, CreateWindowSizeWithEnergyResultVariables>;
}
export const createWindowSizeWithEnergyResultRef: CreateWindowSizeWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWindowSizeWithEnergyResultRef:
```typescript
const name = createWindowSizeWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateWindowSizeWithEnergyResult` mutation requires an argument of type `CreateWindowSizeWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateWindowSizeWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWindowSizeWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWindowSizeWithEnergyResultData {
  windowSize_insert: WindowSize_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateWindowSizeWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWindowSizeWithEnergyResult, CreateWindowSizeWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateWindowSizeWithEnergyResult` mutation requires an argument of type `CreateWindowSizeWithEnergyResultVariables`:
const createWindowSizeWithEnergyResultVars: CreateWindowSizeWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  area: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createWindowSizeWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowSizeWithEnergyResult(createWindowSizeWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createWindowSizeWithEnergyResult({ id: ..., buildingParametersId: ..., area: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWindowSizeWithEnergyResult(dataConnect, createWindowSizeWithEnergyResultVars);

console.log(data.windowSize_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createWindowSizeWithEnergyResult(createWindowSizeWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.windowSize_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateWindowSizeWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWindowSizeWithEnergyResultRef, CreateWindowSizeWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateWindowSizeWithEnergyResult` mutation requires an argument of type `CreateWindowSizeWithEnergyResultVariables`:
const createWindowSizeWithEnergyResultVars: CreateWindowSizeWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  area: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createWindowSizeWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createWindowSizeWithEnergyResultRef(createWindowSizeWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createWindowSizeWithEnergyResultRef({ id: ..., buildingParametersId: ..., area: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWindowSizeWithEnergyResultRef(dataConnect, createWindowSizeWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowSize_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowSize_insert);
  console.log(data.energyResult_insert);
});
```

## CreateWindowGlazingWithEnergyResult
You can execute the `CreateWindowGlazingWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWindowGlazingWithEnergyResult(vars: CreateWindowGlazingWithEnergyResultVariables): MutationPromise<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;

interface CreateWindowGlazingWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowGlazingWithEnergyResultVariables): MutationRef<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;
}
export const createWindowGlazingWithEnergyResultRef: CreateWindowGlazingWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWindowGlazingWithEnergyResult(dc: DataConnect, vars: CreateWindowGlazingWithEnergyResultVariables): MutationPromise<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;

interface CreateWindowGlazingWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateWindowGlazingWithEnergyResultVariables): MutationRef<CreateWindowGlazingWithEnergyResultData, CreateWindowGlazingWithEnergyResultVariables>;
}
export const createWindowGlazingWithEnergyResultRef: CreateWindowGlazingWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWindowGlazingWithEnergyResultRef:
```typescript
const name = createWindowGlazingWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateWindowGlazingWithEnergyResult` mutation requires an argument of type `CreateWindowGlazingWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateWindowGlazingWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWindowGlazingWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWindowGlazingWithEnergyResultData {
  windowGlazing_insert: WindowGlazing_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateWindowGlazingWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWindowGlazingWithEnergyResult, CreateWindowGlazingWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateWindowGlazingWithEnergyResult` mutation requires an argument of type `CreateWindowGlazingWithEnergyResultVariables`:
const createWindowGlazingWithEnergyResultVars: CreateWindowGlazingWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  rValue: ..., 
  shgc: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createWindowGlazingWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowGlazingWithEnergyResult(createWindowGlazingWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createWindowGlazingWithEnergyResult({ id: ..., buildingParametersId: ..., type: ..., rValue: ..., shgc: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWindowGlazingWithEnergyResult(dataConnect, createWindowGlazingWithEnergyResultVars);

console.log(data.windowGlazing_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createWindowGlazingWithEnergyResult(createWindowGlazingWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateWindowGlazingWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWindowGlazingWithEnergyResultRef, CreateWindowGlazingWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateWindowGlazingWithEnergyResult` mutation requires an argument of type `CreateWindowGlazingWithEnergyResultVariables`:
const createWindowGlazingWithEnergyResultVars: CreateWindowGlazingWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  rValue: ..., 
  shgc: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createWindowGlazingWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createWindowGlazingWithEnergyResultRef(createWindowGlazingWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createWindowGlazingWithEnergyResultRef({ id: ..., buildingParametersId: ..., type: ..., rValue: ..., shgc: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWindowGlazingWithEnergyResultRef(dataConnect, createWindowGlazingWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowGlazing_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_insert);
  console.log(data.energyResult_insert);
});
```

## CreateOrientationWithEnergyResult
You can execute the `CreateOrientationWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createOrientationWithEnergyResult(vars: CreateOrientationWithEnergyResultVariables): MutationPromise<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;

interface CreateOrientationWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOrientationWithEnergyResultVariables): MutationRef<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;
}
export const createOrientationWithEnergyResultRef: CreateOrientationWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createOrientationWithEnergyResult(dc: DataConnect, vars: CreateOrientationWithEnergyResultVariables): MutationPromise<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;

interface CreateOrientationWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateOrientationWithEnergyResultVariables): MutationRef<CreateOrientationWithEnergyResultData, CreateOrientationWithEnergyResultVariables>;
}
export const createOrientationWithEnergyResultRef: CreateOrientationWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createOrientationWithEnergyResultRef:
```typescript
const name = createOrientationWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateOrientationWithEnergyResult` mutation requires an argument of type `CreateOrientationWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateOrientationWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateOrientationWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateOrientationWithEnergyResultData {
  orientation_insert: Orientation_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateOrientationWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createOrientationWithEnergyResult, CreateOrientationWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateOrientationWithEnergyResult` mutation requires an argument of type `CreateOrientationWithEnergyResultVariables`:
const createOrientationWithEnergyResultVars: CreateOrientationWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  direction: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createOrientationWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOrientationWithEnergyResult(createOrientationWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createOrientationWithEnergyResult({ id: ..., buildingParametersId: ..., direction: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createOrientationWithEnergyResult(dataConnect, createOrientationWithEnergyResultVars);

console.log(data.orientation_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createOrientationWithEnergyResult(createOrientationWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.orientation_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateOrientationWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOrientationWithEnergyResultRef, CreateOrientationWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateOrientationWithEnergyResult` mutation requires an argument of type `CreateOrientationWithEnergyResultVariables`:
const createOrientationWithEnergyResultVars: CreateOrientationWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  direction: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createOrientationWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createOrientationWithEnergyResultRef(createOrientationWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createOrientationWithEnergyResultRef({ id: ..., buildingParametersId: ..., direction: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createOrientationWithEnergyResultRef(dataConnect, createOrientationWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orientation_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orientation_insert);
  console.log(data.energyResult_insert);
});
```

## CreateOccupancyWithEnergyResult
You can execute the `CreateOccupancyWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createOccupancyWithEnergyResult(vars: CreateOccupancyWithEnergyResultVariables): MutationPromise<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;

interface CreateOccupancyWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateOccupancyWithEnergyResultVariables): MutationRef<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;
}
export const createOccupancyWithEnergyResultRef: CreateOccupancyWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createOccupancyWithEnergyResult(dc: DataConnect, vars: CreateOccupancyWithEnergyResultVariables): MutationPromise<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;

interface CreateOccupancyWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateOccupancyWithEnergyResultVariables): MutationRef<CreateOccupancyWithEnergyResultData, CreateOccupancyWithEnergyResultVariables>;
}
export const createOccupancyWithEnergyResultRef: CreateOccupancyWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createOccupancyWithEnergyResultRef:
```typescript
const name = createOccupancyWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateOccupancyWithEnergyResult` mutation requires an argument of type `CreateOccupancyWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateOccupancyWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateOccupancyWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateOccupancyWithEnergyResultData {
  occupancy_insert: Occupancy_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateOccupancyWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createOccupancyWithEnergyResult, CreateOccupancyWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateOccupancyWithEnergyResult` mutation requires an argument of type `CreateOccupancyWithEnergyResultVariables`:
const createOccupancyWithEnergyResultVars: CreateOccupancyWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  numberOfPeople: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createOccupancyWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createOccupancyWithEnergyResult(createOccupancyWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createOccupancyWithEnergyResult({ id: ..., buildingParametersId: ..., numberOfPeople: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createOccupancyWithEnergyResult(dataConnect, createOccupancyWithEnergyResultVars);

console.log(data.occupancy_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createOccupancyWithEnergyResult(createOccupancyWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.occupancy_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateOccupancyWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createOccupancyWithEnergyResultRef, CreateOccupancyWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateOccupancyWithEnergyResult` mutation requires an argument of type `CreateOccupancyWithEnergyResultVariables`:
const createOccupancyWithEnergyResultVars: CreateOccupancyWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  numberOfPeople: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createOccupancyWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createOccupancyWithEnergyResultRef(createOccupancyWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createOccupancyWithEnergyResultRef({ id: ..., buildingParametersId: ..., numberOfPeople: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createOccupancyWithEnergyResultRef(dataConnect, createOccupancyWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.occupancy_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.occupancy_insert);
  console.log(data.energyResult_insert);
});
```

## CreateWindowShadingWithEnergyResult
You can execute the `CreateWindowShadingWithEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createWindowShadingWithEnergyResult(vars: CreateWindowShadingWithEnergyResultVariables): MutationPromise<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;

interface CreateWindowShadingWithEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateWindowShadingWithEnergyResultVariables): MutationRef<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;
}
export const createWindowShadingWithEnergyResultRef: CreateWindowShadingWithEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createWindowShadingWithEnergyResult(dc: DataConnect, vars: CreateWindowShadingWithEnergyResultVariables): MutationPromise<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;

interface CreateWindowShadingWithEnergyResultRef {
  ...
  (dc: DataConnect, vars: CreateWindowShadingWithEnergyResultVariables): MutationRef<CreateWindowShadingWithEnergyResultData, CreateWindowShadingWithEnergyResultVariables>;
}
export const createWindowShadingWithEnergyResultRef: CreateWindowShadingWithEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createWindowShadingWithEnergyResultRef:
```typescript
const name = createWindowShadingWithEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `CreateWindowShadingWithEnergyResult` mutation requires an argument of type `CreateWindowShadingWithEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
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
```
### Return Type
Recall that executing the `CreateWindowShadingWithEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateWindowShadingWithEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateWindowShadingWithEnergyResultData {
  windowShading_insert: WindowShading_Key;
  energyResult_insert: EnergyResult_Key;
}
```
### Using `CreateWindowShadingWithEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createWindowShadingWithEnergyResult, CreateWindowShadingWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateWindowShadingWithEnergyResult` mutation requires an argument of type `CreateWindowShadingWithEnergyResultVariables`:
const createWindowShadingWithEnergyResultVars: CreateWindowShadingWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  isExternal: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createWindowShadingWithEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowShadingWithEnergyResult(createWindowShadingWithEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await createWindowShadingWithEnergyResult({ id: ..., buildingParametersId: ..., type: ..., isExternal: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createWindowShadingWithEnergyResult(dataConnect, createWindowShadingWithEnergyResultVars);

console.log(data.windowShading_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
createWindowShadingWithEnergyResult(createWindowShadingWithEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.windowShading_insert);
  console.log(data.energyResult_insert);
});
```

### Using `CreateWindowShadingWithEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createWindowShadingWithEnergyResultRef, CreateWindowShadingWithEnergyResultVariables } from '@dataconnect/generated';

// The `CreateWindowShadingWithEnergyResult` mutation requires an argument of type `CreateWindowShadingWithEnergyResultVariables`:
const createWindowShadingWithEnergyResultVars: CreateWindowShadingWithEnergyResultVariables = {
  id: ..., 
  buildingParametersId: ..., 
  type: ..., 
  isExternal: ..., 
  cooling: ..., 
  heating: ..., 
  total: ..., 
  carbon: ..., 
  cost: ..., 
};

// Call the `createWindowShadingWithEnergyResultRef()` function to get a reference to the mutation.
const ref = createWindowShadingWithEnergyResultRef(createWindowShadingWithEnergyResultVars);
// Variables can be defined inline as well.
const ref = createWindowShadingWithEnergyResultRef({ id: ..., buildingParametersId: ..., type: ..., isExternal: ..., cooling: ..., heating: ..., total: ..., carbon: ..., cost: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createWindowShadingWithEnergyResultRef(dataConnect, createWindowShadingWithEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowShading_insert);
console.log(data.energyResult_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowShading_insert);
  console.log(data.energyResult_insert);
});
```

## DeleteBuilding
You can execute the `DeleteBuilding` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteBuilding(vars: DeleteBuildingVariables): MutationPromise<DeleteBuildingData, DeleteBuildingVariables>;

interface DeleteBuildingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteBuildingVariables): MutationRef<DeleteBuildingData, DeleteBuildingVariables>;
}
export const deleteBuildingRef: DeleteBuildingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteBuilding(dc: DataConnect, vars: DeleteBuildingVariables): MutationPromise<DeleteBuildingData, DeleteBuildingVariables>;

interface DeleteBuildingRef {
  ...
  (dc: DataConnect, vars: DeleteBuildingVariables): MutationRef<DeleteBuildingData, DeleteBuildingVariables>;
}
export const deleteBuildingRef: DeleteBuildingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteBuildingRef:
```typescript
const name = deleteBuildingRef.operationName;
console.log(name);
```

### Variables
The `DeleteBuilding` mutation requires an argument of type `DeleteBuildingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteBuildingVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteBuilding` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteBuildingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteBuildingData {
  building_delete?: Building_Key | null;
}
```
### Using `DeleteBuilding`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteBuilding, DeleteBuildingVariables } from '@dataconnect/generated';

// The `DeleteBuilding` mutation requires an argument of type `DeleteBuildingVariables`:
const deleteBuildingVars: DeleteBuildingVariables = {
  id: ..., 
};

// Call the `deleteBuilding()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteBuilding(deleteBuildingVars);
// Variables can be defined inline as well.
const { data } = await deleteBuilding({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteBuilding(dataConnect, deleteBuildingVars);

console.log(data.building_delete);

// Or, you can use the `Promise` API.
deleteBuilding(deleteBuildingVars).then((response) => {
  const data = response.data;
  console.log(data.building_delete);
});
```

### Using `DeleteBuilding`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteBuildingRef, DeleteBuildingVariables } from '@dataconnect/generated';

// The `DeleteBuilding` mutation requires an argument of type `DeleteBuildingVariables`:
const deleteBuildingVars: DeleteBuildingVariables = {
  id: ..., 
};

// Call the `deleteBuildingRef()` function to get a reference to the mutation.
const ref = deleteBuildingRef(deleteBuildingVars);
// Variables can be defined inline as well.
const ref = deleteBuildingRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteBuildingRef(dataConnect, deleteBuildingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.building_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.building_delete);
});
```

## DeleteBuildingParameters
You can execute the `DeleteBuildingParameters` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteBuildingParameters(vars: DeleteBuildingParametersVariables): MutationPromise<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;

interface DeleteBuildingParametersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteBuildingParametersVariables): MutationRef<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;
}
export const deleteBuildingParametersRef: DeleteBuildingParametersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteBuildingParameters(dc: DataConnect, vars: DeleteBuildingParametersVariables): MutationPromise<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;

interface DeleteBuildingParametersRef {
  ...
  (dc: DataConnect, vars: DeleteBuildingParametersVariables): MutationRef<DeleteBuildingParametersData, DeleteBuildingParametersVariables>;
}
export const deleteBuildingParametersRef: DeleteBuildingParametersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteBuildingParametersRef:
```typescript
const name = deleteBuildingParametersRef.operationName;
console.log(name);
```

### Variables
The `DeleteBuildingParameters` mutation requires an argument of type `DeleteBuildingParametersVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteBuildingParametersVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteBuildingParameters` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteBuildingParametersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteBuildingParametersData {
  buildingParameters_delete?: BuildingParameters_Key | null;
}
```
### Using `DeleteBuildingParameters`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteBuildingParameters, DeleteBuildingParametersVariables } from '@dataconnect/generated';

// The `DeleteBuildingParameters` mutation requires an argument of type `DeleteBuildingParametersVariables`:
const deleteBuildingParametersVars: DeleteBuildingParametersVariables = {
  id: ..., 
};

// Call the `deleteBuildingParameters()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteBuildingParameters(deleteBuildingParametersVars);
// Variables can be defined inline as well.
const { data } = await deleteBuildingParameters({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteBuildingParameters(dataConnect, deleteBuildingParametersVars);

console.log(data.buildingParameters_delete);

// Or, you can use the `Promise` API.
deleteBuildingParameters(deleteBuildingParametersVars).then((response) => {
  const data = response.data;
  console.log(data.buildingParameters_delete);
});
```

### Using `DeleteBuildingParameters`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteBuildingParametersRef, DeleteBuildingParametersVariables } from '@dataconnect/generated';

// The `DeleteBuildingParameters` mutation requires an argument of type `DeleteBuildingParametersVariables`:
const deleteBuildingParametersVars: DeleteBuildingParametersVariables = {
  id: ..., 
};

// Call the `deleteBuildingParametersRef()` function to get a reference to the mutation.
const ref = deleteBuildingParametersRef(deleteBuildingParametersVars);
// Variables can be defined inline as well.
const ref = deleteBuildingParametersRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteBuildingParametersRef(dataConnect, deleteBuildingParametersVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.buildingParameters_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.buildingParameters_delete);
});
```

## DeleteInsulationRoof
You can execute the `DeleteInsulationRoof` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteInsulationRoof(vars: DeleteInsulationRoofVariables): MutationPromise<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;

interface DeleteInsulationRoofRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInsulationRoofVariables): MutationRef<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;
}
export const deleteInsulationRoofRef: DeleteInsulationRoofRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteInsulationRoof(dc: DataConnect, vars: DeleteInsulationRoofVariables): MutationPromise<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;

interface DeleteInsulationRoofRef {
  ...
  (dc: DataConnect, vars: DeleteInsulationRoofVariables): MutationRef<DeleteInsulationRoofData, DeleteInsulationRoofVariables>;
}
export const deleteInsulationRoofRef: DeleteInsulationRoofRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteInsulationRoofRef:
```typescript
const name = deleteInsulationRoofRef.operationName;
console.log(name);
```

### Variables
The `DeleteInsulationRoof` mutation requires an argument of type `DeleteInsulationRoofVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteInsulationRoofVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteInsulationRoof` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteInsulationRoofData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteInsulationRoofData {
  insulationRoof_delete?: InsulationRoof_Key | null;
}
```
### Using `DeleteInsulationRoof`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteInsulationRoof, DeleteInsulationRoofVariables } from '@dataconnect/generated';

// The `DeleteInsulationRoof` mutation requires an argument of type `DeleteInsulationRoofVariables`:
const deleteInsulationRoofVars: DeleteInsulationRoofVariables = {
  id: ..., 
};

// Call the `deleteInsulationRoof()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteInsulationRoof(deleteInsulationRoofVars);
// Variables can be defined inline as well.
const { data } = await deleteInsulationRoof({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteInsulationRoof(dataConnect, deleteInsulationRoofVars);

console.log(data.insulationRoof_delete);

// Or, you can use the `Promise` API.
deleteInsulationRoof(deleteInsulationRoofVars).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_delete);
});
```

### Using `DeleteInsulationRoof`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteInsulationRoofRef, DeleteInsulationRoofVariables } from '@dataconnect/generated';

// The `DeleteInsulationRoof` mutation requires an argument of type `DeleteInsulationRoofVariables`:
const deleteInsulationRoofVars: DeleteInsulationRoofVariables = {
  id: ..., 
};

// Call the `deleteInsulationRoofRef()` function to get a reference to the mutation.
const ref = deleteInsulationRoofRef(deleteInsulationRoofVars);
// Variables can be defined inline as well.
const ref = deleteInsulationRoofRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteInsulationRoofRef(dataConnect, deleteInsulationRoofVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationRoof_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationRoof_delete);
});
```

## DeleteInsulationWall
You can execute the `DeleteInsulationWall` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteInsulationWall(vars: DeleteInsulationWallVariables): MutationPromise<DeleteInsulationWallData, DeleteInsulationWallVariables>;

interface DeleteInsulationWallRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInsulationWallVariables): MutationRef<DeleteInsulationWallData, DeleteInsulationWallVariables>;
}
export const deleteInsulationWallRef: DeleteInsulationWallRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteInsulationWall(dc: DataConnect, vars: DeleteInsulationWallVariables): MutationPromise<DeleteInsulationWallData, DeleteInsulationWallVariables>;

interface DeleteInsulationWallRef {
  ...
  (dc: DataConnect, vars: DeleteInsulationWallVariables): MutationRef<DeleteInsulationWallData, DeleteInsulationWallVariables>;
}
export const deleteInsulationWallRef: DeleteInsulationWallRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteInsulationWallRef:
```typescript
const name = deleteInsulationWallRef.operationName;
console.log(name);
```

### Variables
The `DeleteInsulationWall` mutation requires an argument of type `DeleteInsulationWallVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteInsulationWallVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteInsulationWall` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteInsulationWallData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteInsulationWallData {
  insulationWall_delete?: InsulationWall_Key | null;
}
```
### Using `DeleteInsulationWall`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteInsulationWall, DeleteInsulationWallVariables } from '@dataconnect/generated';

// The `DeleteInsulationWall` mutation requires an argument of type `DeleteInsulationWallVariables`:
const deleteInsulationWallVars: DeleteInsulationWallVariables = {
  id: ..., 
};

// Call the `deleteInsulationWall()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteInsulationWall(deleteInsulationWallVars);
// Variables can be defined inline as well.
const { data } = await deleteInsulationWall({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteInsulationWall(dataConnect, deleteInsulationWallVars);

console.log(data.insulationWall_delete);

// Or, you can use the `Promise` API.
deleteInsulationWall(deleteInsulationWallVars).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_delete);
});
```

### Using `DeleteInsulationWall`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteInsulationWallRef, DeleteInsulationWallVariables } from '@dataconnect/generated';

// The `DeleteInsulationWall` mutation requires an argument of type `DeleteInsulationWallVariables`:
const deleteInsulationWallVars: DeleteInsulationWallVariables = {
  id: ..., 
};

// Call the `deleteInsulationWallRef()` function to get a reference to the mutation.
const ref = deleteInsulationWallRef(deleteInsulationWallVars);
// Variables can be defined inline as well.
const ref = deleteInsulationWallRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteInsulationWallRef(dataConnect, deleteInsulationWallVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.insulationWall_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.insulationWall_delete);
});
```

## DeleteWindowSize
You can execute the `DeleteWindowSize` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteWindowSize(vars: DeleteWindowSizeVariables): MutationPromise<DeleteWindowSizeData, DeleteWindowSizeVariables>;

interface DeleteWindowSizeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWindowSizeVariables): MutationRef<DeleteWindowSizeData, DeleteWindowSizeVariables>;
}
export const deleteWindowSizeRef: DeleteWindowSizeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteWindowSize(dc: DataConnect, vars: DeleteWindowSizeVariables): MutationPromise<DeleteWindowSizeData, DeleteWindowSizeVariables>;

interface DeleteWindowSizeRef {
  ...
  (dc: DataConnect, vars: DeleteWindowSizeVariables): MutationRef<DeleteWindowSizeData, DeleteWindowSizeVariables>;
}
export const deleteWindowSizeRef: DeleteWindowSizeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteWindowSizeRef:
```typescript
const name = deleteWindowSizeRef.operationName;
console.log(name);
```

### Variables
The `DeleteWindowSize` mutation requires an argument of type `DeleteWindowSizeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteWindowSizeVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteWindowSize` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteWindowSizeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteWindowSizeData {
  windowSize_delete?: WindowSize_Key | null;
}
```
### Using `DeleteWindowSize`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteWindowSize, DeleteWindowSizeVariables } from '@dataconnect/generated';

// The `DeleteWindowSize` mutation requires an argument of type `DeleteWindowSizeVariables`:
const deleteWindowSizeVars: DeleteWindowSizeVariables = {
  id: ..., 
};

// Call the `deleteWindowSize()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteWindowSize(deleteWindowSizeVars);
// Variables can be defined inline as well.
const { data } = await deleteWindowSize({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteWindowSize(dataConnect, deleteWindowSizeVars);

console.log(data.windowSize_delete);

// Or, you can use the `Promise` API.
deleteWindowSize(deleteWindowSizeVars).then((response) => {
  const data = response.data;
  console.log(data.windowSize_delete);
});
```

### Using `DeleteWindowSize`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteWindowSizeRef, DeleteWindowSizeVariables } from '@dataconnect/generated';

// The `DeleteWindowSize` mutation requires an argument of type `DeleteWindowSizeVariables`:
const deleteWindowSizeVars: DeleteWindowSizeVariables = {
  id: ..., 
};

// Call the `deleteWindowSizeRef()` function to get a reference to the mutation.
const ref = deleteWindowSizeRef(deleteWindowSizeVars);
// Variables can be defined inline as well.
const ref = deleteWindowSizeRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteWindowSizeRef(dataConnect, deleteWindowSizeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowSize_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowSize_delete);
});
```

## DeleteWindowGlazing
You can execute the `DeleteWindowGlazing` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteWindowGlazing(vars: DeleteWindowGlazingVariables): MutationPromise<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;

interface DeleteWindowGlazingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWindowGlazingVariables): MutationRef<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;
}
export const deleteWindowGlazingRef: DeleteWindowGlazingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteWindowGlazing(dc: DataConnect, vars: DeleteWindowGlazingVariables): MutationPromise<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;

interface DeleteWindowGlazingRef {
  ...
  (dc: DataConnect, vars: DeleteWindowGlazingVariables): MutationRef<DeleteWindowGlazingData, DeleteWindowGlazingVariables>;
}
export const deleteWindowGlazingRef: DeleteWindowGlazingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteWindowGlazingRef:
```typescript
const name = deleteWindowGlazingRef.operationName;
console.log(name);
```

### Variables
The `DeleteWindowGlazing` mutation requires an argument of type `DeleteWindowGlazingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteWindowGlazingVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteWindowGlazing` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteWindowGlazingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteWindowGlazingData {
  windowGlazing_delete?: WindowGlazing_Key | null;
}
```
### Using `DeleteWindowGlazing`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteWindowGlazing, DeleteWindowGlazingVariables } from '@dataconnect/generated';

// The `DeleteWindowGlazing` mutation requires an argument of type `DeleteWindowGlazingVariables`:
const deleteWindowGlazingVars: DeleteWindowGlazingVariables = {
  id: ..., 
};

// Call the `deleteWindowGlazing()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteWindowGlazing(deleteWindowGlazingVars);
// Variables can be defined inline as well.
const { data } = await deleteWindowGlazing({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteWindowGlazing(dataConnect, deleteWindowGlazingVars);

console.log(data.windowGlazing_delete);

// Or, you can use the `Promise` API.
deleteWindowGlazing(deleteWindowGlazingVars).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_delete);
});
```

### Using `DeleteWindowGlazing`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteWindowGlazingRef, DeleteWindowGlazingVariables } from '@dataconnect/generated';

// The `DeleteWindowGlazing` mutation requires an argument of type `DeleteWindowGlazingVariables`:
const deleteWindowGlazingVars: DeleteWindowGlazingVariables = {
  id: ..., 
};

// Call the `deleteWindowGlazingRef()` function to get a reference to the mutation.
const ref = deleteWindowGlazingRef(deleteWindowGlazingVars);
// Variables can be defined inline as well.
const ref = deleteWindowGlazingRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteWindowGlazingRef(dataConnect, deleteWindowGlazingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowGlazing_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowGlazing_delete);
});
```

## DeleteOrientation
You can execute the `DeleteOrientation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteOrientation(vars: DeleteOrientationVariables): MutationPromise<DeleteOrientationData, DeleteOrientationVariables>;

interface DeleteOrientationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOrientationVariables): MutationRef<DeleteOrientationData, DeleteOrientationVariables>;
}
export const deleteOrientationRef: DeleteOrientationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteOrientation(dc: DataConnect, vars: DeleteOrientationVariables): MutationPromise<DeleteOrientationData, DeleteOrientationVariables>;

interface DeleteOrientationRef {
  ...
  (dc: DataConnect, vars: DeleteOrientationVariables): MutationRef<DeleteOrientationData, DeleteOrientationVariables>;
}
export const deleteOrientationRef: DeleteOrientationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteOrientationRef:
```typescript
const name = deleteOrientationRef.operationName;
console.log(name);
```

### Variables
The `DeleteOrientation` mutation requires an argument of type `DeleteOrientationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteOrientationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteOrientation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteOrientationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteOrientationData {
  orientation_delete?: Orientation_Key | null;
}
```
### Using `DeleteOrientation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteOrientation, DeleteOrientationVariables } from '@dataconnect/generated';

// The `DeleteOrientation` mutation requires an argument of type `DeleteOrientationVariables`:
const deleteOrientationVars: DeleteOrientationVariables = {
  id: ..., 
};

// Call the `deleteOrientation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteOrientation(deleteOrientationVars);
// Variables can be defined inline as well.
const { data } = await deleteOrientation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteOrientation(dataConnect, deleteOrientationVars);

console.log(data.orientation_delete);

// Or, you can use the `Promise` API.
deleteOrientation(deleteOrientationVars).then((response) => {
  const data = response.data;
  console.log(data.orientation_delete);
});
```

### Using `DeleteOrientation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteOrientationRef, DeleteOrientationVariables } from '@dataconnect/generated';

// The `DeleteOrientation` mutation requires an argument of type `DeleteOrientationVariables`:
const deleteOrientationVars: DeleteOrientationVariables = {
  id: ..., 
};

// Call the `deleteOrientationRef()` function to get a reference to the mutation.
const ref = deleteOrientationRef(deleteOrientationVars);
// Variables can be defined inline as well.
const ref = deleteOrientationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteOrientationRef(dataConnect, deleteOrientationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.orientation_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.orientation_delete);
});
```

## DeleteOccupancy
You can execute the `DeleteOccupancy` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteOccupancy(vars: DeleteOccupancyVariables): MutationPromise<DeleteOccupancyData, DeleteOccupancyVariables>;

interface DeleteOccupancyRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteOccupancyVariables): MutationRef<DeleteOccupancyData, DeleteOccupancyVariables>;
}
export const deleteOccupancyRef: DeleteOccupancyRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteOccupancy(dc: DataConnect, vars: DeleteOccupancyVariables): MutationPromise<DeleteOccupancyData, DeleteOccupancyVariables>;

interface DeleteOccupancyRef {
  ...
  (dc: DataConnect, vars: DeleteOccupancyVariables): MutationRef<DeleteOccupancyData, DeleteOccupancyVariables>;
}
export const deleteOccupancyRef: DeleteOccupancyRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteOccupancyRef:
```typescript
const name = deleteOccupancyRef.operationName;
console.log(name);
```

### Variables
The `DeleteOccupancy` mutation requires an argument of type `DeleteOccupancyVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteOccupancyVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteOccupancy` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteOccupancyData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteOccupancyData {
  occupancy_delete?: Occupancy_Key | null;
}
```
### Using `DeleteOccupancy`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteOccupancy, DeleteOccupancyVariables } from '@dataconnect/generated';

// The `DeleteOccupancy` mutation requires an argument of type `DeleteOccupancyVariables`:
const deleteOccupancyVars: DeleteOccupancyVariables = {
  id: ..., 
};

// Call the `deleteOccupancy()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteOccupancy(deleteOccupancyVars);
// Variables can be defined inline as well.
const { data } = await deleteOccupancy({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteOccupancy(dataConnect, deleteOccupancyVars);

console.log(data.occupancy_delete);

// Or, you can use the `Promise` API.
deleteOccupancy(deleteOccupancyVars).then((response) => {
  const data = response.data;
  console.log(data.occupancy_delete);
});
```

### Using `DeleteOccupancy`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteOccupancyRef, DeleteOccupancyVariables } from '@dataconnect/generated';

// The `DeleteOccupancy` mutation requires an argument of type `DeleteOccupancyVariables`:
const deleteOccupancyVars: DeleteOccupancyVariables = {
  id: ..., 
};

// Call the `deleteOccupancyRef()` function to get a reference to the mutation.
const ref = deleteOccupancyRef(deleteOccupancyVars);
// Variables can be defined inline as well.
const ref = deleteOccupancyRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteOccupancyRef(dataConnect, deleteOccupancyVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.occupancy_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.occupancy_delete);
});
```

## DeleteWindowShading
You can execute the `DeleteWindowShading` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteWindowShading(vars: DeleteWindowShadingVariables): MutationPromise<DeleteWindowShadingData, DeleteWindowShadingVariables>;

interface DeleteWindowShadingRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteWindowShadingVariables): MutationRef<DeleteWindowShadingData, DeleteWindowShadingVariables>;
}
export const deleteWindowShadingRef: DeleteWindowShadingRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteWindowShading(dc: DataConnect, vars: DeleteWindowShadingVariables): MutationPromise<DeleteWindowShadingData, DeleteWindowShadingVariables>;

interface DeleteWindowShadingRef {
  ...
  (dc: DataConnect, vars: DeleteWindowShadingVariables): MutationRef<DeleteWindowShadingData, DeleteWindowShadingVariables>;
}
export const deleteWindowShadingRef: DeleteWindowShadingRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteWindowShadingRef:
```typescript
const name = deleteWindowShadingRef.operationName;
console.log(name);
```

### Variables
The `DeleteWindowShading` mutation requires an argument of type `DeleteWindowShadingVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteWindowShadingVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteWindowShading` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteWindowShadingData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteWindowShadingData {
  windowShading_delete?: WindowShading_Key | null;
}
```
### Using `DeleteWindowShading`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteWindowShading, DeleteWindowShadingVariables } from '@dataconnect/generated';

// The `DeleteWindowShading` mutation requires an argument of type `DeleteWindowShadingVariables`:
const deleteWindowShadingVars: DeleteWindowShadingVariables = {
  id: ..., 
};

// Call the `deleteWindowShading()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteWindowShading(deleteWindowShadingVars);
// Variables can be defined inline as well.
const { data } = await deleteWindowShading({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteWindowShading(dataConnect, deleteWindowShadingVars);

console.log(data.windowShading_delete);

// Or, you can use the `Promise` API.
deleteWindowShading(deleteWindowShadingVars).then((response) => {
  const data = response.data;
  console.log(data.windowShading_delete);
});
```

### Using `DeleteWindowShading`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteWindowShadingRef, DeleteWindowShadingVariables } from '@dataconnect/generated';

// The `DeleteWindowShading` mutation requires an argument of type `DeleteWindowShadingVariables`:
const deleteWindowShadingVars: DeleteWindowShadingVariables = {
  id: ..., 
};

// Call the `deleteWindowShadingRef()` function to get a reference to the mutation.
const ref = deleteWindowShadingRef(deleteWindowShadingVars);
// Variables can be defined inline as well.
const ref = deleteWindowShadingRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteWindowShadingRef(dataConnect, deleteWindowShadingVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.windowShading_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.windowShading_delete);
});
```

## DeleteEnergyResult
You can execute the `DeleteEnergyResult` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteEnergyResult(vars: DeleteEnergyResultVariables): MutationPromise<DeleteEnergyResultData, DeleteEnergyResultVariables>;

interface DeleteEnergyResultRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEnergyResultVariables): MutationRef<DeleteEnergyResultData, DeleteEnergyResultVariables>;
}
export const deleteEnergyResultRef: DeleteEnergyResultRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteEnergyResult(dc: DataConnect, vars: DeleteEnergyResultVariables): MutationPromise<DeleteEnergyResultData, DeleteEnergyResultVariables>;

interface DeleteEnergyResultRef {
  ...
  (dc: DataConnect, vars: DeleteEnergyResultVariables): MutationRef<DeleteEnergyResultData, DeleteEnergyResultVariables>;
}
export const deleteEnergyResultRef: DeleteEnergyResultRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteEnergyResultRef:
```typescript
const name = deleteEnergyResultRef.operationName;
console.log(name);
```

### Variables
The `DeleteEnergyResult` mutation requires an argument of type `DeleteEnergyResultVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteEnergyResultVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteEnergyResult` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteEnergyResultData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteEnergyResultData {
  energyResult_delete?: EnergyResult_Key | null;
}
```
### Using `DeleteEnergyResult`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteEnergyResult, DeleteEnergyResultVariables } from '@dataconnect/generated';

// The `DeleteEnergyResult` mutation requires an argument of type `DeleteEnergyResultVariables`:
const deleteEnergyResultVars: DeleteEnergyResultVariables = {
  id: ..., 
};

// Call the `deleteEnergyResult()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteEnergyResult(deleteEnergyResultVars);
// Variables can be defined inline as well.
const { data } = await deleteEnergyResult({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteEnergyResult(dataConnect, deleteEnergyResultVars);

console.log(data.energyResult_delete);

// Or, you can use the `Promise` API.
deleteEnergyResult(deleteEnergyResultVars).then((response) => {
  const data = response.data;
  console.log(data.energyResult_delete);
});
```

### Using `DeleteEnergyResult`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteEnergyResultRef, DeleteEnergyResultVariables } from '@dataconnect/generated';

// The `DeleteEnergyResult` mutation requires an argument of type `DeleteEnergyResultVariables`:
const deleteEnergyResultVars: DeleteEnergyResultVariables = {
  id: ..., 
};

// Call the `deleteEnergyResultRef()` function to get a reference to the mutation.
const ref = deleteEnergyResultRef(deleteEnergyResultVars);
// Variables can be defined inline as well.
const ref = deleteEnergyResultRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteEnergyResultRef(dataConnect, deleteEnergyResultVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.energyResult_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.energyResult_delete);
});
```

