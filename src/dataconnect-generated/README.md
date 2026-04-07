# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetAllBuildings*](#getallbuildings)
  - [*GetBuildingById*](#getbuildingbyid)
  - [*GetAllBuildingParameters*](#getallbuildingparameters)
  - [*GetWindowSizes*](#getwindowsizes)
  - [*GetInsulationRoofs*](#getinsulationroofs)
  - [*GetInsulationWalls*](#getinsulationwalls)
  - [*GetWindowGlazings*](#getwindowglazings)
  - [*GetOrientations*](#getorientations)
  - [*GetOccupancies*](#getoccupancies)
  - [*GetWindowShadings*](#getwindowshadings)
  - [*GetFullBuildingDetails*](#getfullbuildingdetails)
- [**Mutations**](#mutations)
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
  name: string;
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
  name: ..., 
  area: ..., 
};

// Call the `createWindowSize()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createWindowSize(createWindowSizeVars);
// Variables can be defined inline as well.
const { data } = await createWindowSize({ buildingParametersId: ..., name: ..., area: ..., });

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
  name: ..., 
  area: ..., 
};

// Call the `createWindowSizeRef()` function to get a reference to the mutation.
const ref = createWindowSizeRef(createWindowSizeVars);
// Variables can be defined inline as well.
const ref = createWindowSizeRef({ buildingParametersId: ..., name: ..., area: ..., });

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

