# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getEnergyResultById, getEnergyResultsByBuildingParameters, getEnergyResultsByBuilding, getAllBuildings, getBuildingById, getAllBuildingParameters, getFullBuildingDetails, getWindowSizes, getInsulationRoofs, getInsulationWalls } from '@dataconnect/generated';


// Operation GetEnergyResultById:  For variables, look at type GetEnergyResultByIdVars in ../index.d.ts
const { data } = await GetEnergyResultById(dataConnect, getEnergyResultByIdVars);

// Operation GetEnergyResultsByBuildingParameters:  For variables, look at type GetEnergyResultsByBuildingParametersVars in ../index.d.ts
const { data } = await GetEnergyResultsByBuildingParameters(dataConnect, getEnergyResultsByBuildingParametersVars);

// Operation GetEnergyResultsByBuilding:  For variables, look at type GetEnergyResultsByBuildingVars in ../index.d.ts
const { data } = await GetEnergyResultsByBuilding(dataConnect, getEnergyResultsByBuildingVars);

// Operation GetAllBuildings: 
const { data } = await GetAllBuildings(dataConnect);

// Operation GetBuildingById:  For variables, look at type GetBuildingByIdVars in ../index.d.ts
const { data } = await GetBuildingById(dataConnect, getBuildingByIdVars);

// Operation GetAllBuildingParameters: 
const { data } = await GetAllBuildingParameters(dataConnect);

// Operation GetFullBuildingDetails:  For variables, look at type GetFullBuildingDetailsVars in ../index.d.ts
const { data } = await GetFullBuildingDetails(dataConnect, getFullBuildingDetailsVars);

// Operation GetWindowSizes:  For variables, look at type GetWindowSizesVars in ../index.d.ts
const { data } = await GetWindowSizes(dataConnect, getWindowSizesVars);

// Operation GetInsulationRoofs:  For variables, look at type GetInsulationRoofsVars in ../index.d.ts
const { data } = await GetInsulationRoofs(dataConnect, getInsulationRoofsVars);

// Operation GetInsulationWalls:  For variables, look at type GetInsulationWallsVars in ../index.d.ts
const { data } = await GetInsulationWalls(dataConnect, getInsulationWallsVars);


```