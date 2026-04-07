# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getAllBuildings, getBuildingById, getAllBuildingParameters, createBuilding, createBuildingParameters, createInsulationRoof, createInsulationWall, createWindowSize, createWindowGlazing, createOrientation } from '@dataconnect/generated';


// Operation GetAllBuildings: 
const { data } = await GetAllBuildings(dataConnect);

// Operation GetBuildingById:  For variables, look at type GetBuildingByIdVars in ../index.d.ts
const { data } = await GetBuildingById(dataConnect, getBuildingByIdVars);

// Operation GetAllBuildingParameters: 
const { data } = await GetAllBuildingParameters(dataConnect);

// Operation CreateBuilding:  For variables, look at type CreateBuildingVars in ../index.d.ts
const { data } = await CreateBuilding(dataConnect, createBuildingVars);

// Operation CreateBuildingParameters:  For variables, look at type CreateBuildingParametersVars in ../index.d.ts
const { data } = await CreateBuildingParameters(dataConnect, createBuildingParametersVars);

// Operation CreateInsulationRoof:  For variables, look at type CreateInsulationRoofVars in ../index.d.ts
const { data } = await CreateInsulationRoof(dataConnect, createInsulationRoofVars);

// Operation CreateInsulationWall:  For variables, look at type CreateInsulationWallVars in ../index.d.ts
const { data } = await CreateInsulationWall(dataConnect, createInsulationWallVars);

// Operation CreateWindowSize:  For variables, look at type CreateWindowSizeVars in ../index.d.ts
const { data } = await CreateWindowSize(dataConnect, createWindowSizeVars);

// Operation CreateWindowGlazing:  For variables, look at type CreateWindowGlazingVars in ../index.d.ts
const { data } = await CreateWindowGlazing(dataConnect, createWindowGlazingVars);

// Operation CreateOrientation:  For variables, look at type CreateOrientationVars in ../index.d.ts
const { data } = await CreateOrientation(dataConnect, createOrientationVars);


```