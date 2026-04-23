# Data Connect Query Reference

This file shows practical examples for the operations in this folder.

## Useful Test IDs

These IDs match the seed data and are good for testing:

- Building ID: 11111111-1111-1111-1111-111111111111
- BuildingParameters ID: aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1
- Roof ID: b1111111-1111-1111-1111-111111111111
- EnergyResult ID: c1111111-1111-1111-1111-111111111111

## How To Run

Use one of these:

- Firebase Data Connect query editor
- Generated SDK in src/dataconnect-generated
- Any GraphQL client pointed at your Data Connect endpoint

For every example below:

1. Paste the operation text in the query/mutation panel.
2. Paste the variables JSON in the variables panel.
3. Execute.

---

## Read Examples

### 1) Get all buildings

```graphql
query GetAllBuildings {
  buildings {
    id
    name
  }
}
```

Variables:

```json
{}
```

### 2) Get building by ID

```graphql
query GetBuildingById($id: UUID!) {
  building(key: { id: $id }) {
    id
    name
    buildingParameters {
      id
      climate
      floorArea
      buildingType
      envelope
      isAC
    }
  }
}
```

Variables:

```json
{
  "id": "11111111-1111-1111-1111-111111111111"
}
```

### 3) Get improvements for one BuildingParameters

```graphql
query GetInsulationRoofs($buildingParametersId: UUID!) {
  insulationRoofs(where: { buildingParameters: { id: { eq: $buildingParametersId } } }) {
    id
    type
    thickness
    rValue
    energyResult {
      cooling
      heating
      total
      carbon
      cost
    }
  }
}
```

Variables:

```json
{
  "buildingParametersId": "aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1"
}
```

You can do the same pattern with:

- GetInsulationWalls
- GetWindowSizes
- GetWindowGlazings
- GetOrientations
- GetOccupancies
- GetWindowShadings

### 4) Get all detailed data for one building

```graphql
query GetFullBuildingDetails($buildingId: UUID!) {
  building(key: { id: $buildingId }) {
    id
    name
    buildingParameters {
      id
      climate
      floorArea
      buildingType
      envelope
      isAC
    }
  }
  insulationRoofs(where: { buildingParameters: { building: { id: { eq: $buildingId } } } }) {
    id
    type
  }
  insulationWalls(where: { buildingParameters: { building: { id: { eq: $buildingId } } } }) {
    id
    type
  }
}
```

Variables:

```json
{
  "buildingId": "11111111-1111-1111-1111-111111111111"
}
```

### 5) Get energy result by ID

```graphql
query GetEnergyResultById($id: UUID!) {
  energyResult(key: { id: $id }) {
    id
    improvementType
    cooling
    heating
    total
    carbon
    cost
  }
}
```

Variables:

```json
{
  "id": "c1111111-1111-1111-1111-111111111111"
}
```

---

## Create Examples

### 6) Create building and parameters (2-step)

```graphql
mutation CreateBuilding($name: String!) {
  building_insert(data: { name: $name })
}
```

Variables:

```json
{
  "name": "Office Building X"
}
```

Then:

```graphql
mutation CreateBuildingParameters(
  $buildingId: UUID!,
  $climate: Climate!,
  $floorArea: String!,
  $buildingType: BuildingType!,
  $envelope: EnvelopeType!,
  $isAC: Boolean!
) {
  buildingParameters_insert(data: {
    building: { id: $buildingId }
    climate: $climate
    floorArea: $floorArea
    buildingType: $buildingType
    envelope: $envelope
    isAC: $isAC
  })
}
```

Variables:

```json
{
  "buildingId": "11111111-1111-1111-1111-111111111111",
  "climate": "TEMPERATE",
  "floorArea": "7200",
  "buildingType": "OFFICE",
  "envelope": "GLAZED",
  "isAC": true
}
```

### 7) Create improvement and energy result in one mutation

Note:

- IDs are auto-generated for normal create mutations when you do not pass `id`.
- In this combined mutation, `id` is required so both inserts can reference the same new improvement row in one call.
- Generate this UUID in your client (for example, `crypto.randomUUID()`), then pass it as `$id`.

```graphql
mutation CreateInsulationRoofWithEnergyResult(
  $id: UUID!,
  $buildingParametersId: UUID!,
  $type: String!,
  $thickness: Float!,
  $rValue: Float!,
  $cooling: Float!,
  $heating: Float!,
  $total: Float!,
  $carbon: Float!,
  $cost: Float!
) {
  insulationRoof_insert(data: {
    id: $id
    buildingParameters: { id: $buildingParametersId }
    type: $type
    thickness: $thickness
    rValue: $rValue
  })
  energyResult_insert(data: {
    insulationRoof: { id: $id }
    improvementType: "INSULATION_ROOF"
    cooling: $cooling
    heating: $heating
    total: $total
    carbon: $carbon
    cost: $cost
  })
}
```

Variables:

```json
{
  "id": "<client-generated-uuid>",
  "buildingParametersId": "aaaaaaa1-aaaa-aaaa-aaaa-aaaaaaaaaaa1",
  "type": "Mineral Wool",
  "thickness": 7.0,
  "rValue": 24.0,
  "cooling": 110.0,
  "heating": 86.0,
  "total": 196.0,
  "carbon": 48.0,
  "cost": 295.0
}
```

You can use the same pattern with:

- CreateInsulationWallWithEnergyResult
- CreateWindowSizeWithEnergyResult
- CreateWindowGlazingWithEnergyResult
- CreateOrientationWithEnergyResult
- CreateOccupancyWithEnergyResult
- CreateWindowShadingWithEnergyResult

---

## Update Example

### 8) Update one energy result

```graphql
mutation UpdateEnergyResult(
  $id: UUID!,
  $improvementType: String!,
  $cooling: Float!,
  $heating: Float!,
  $total: Float!,
  $carbon: Float!,
  $cost: Float!
) {
  energyResult_update(
    key: { id: $id }
    data: {
      improvementType: $improvementType
      cooling: $cooling
      heating: $heating
      total: $total
      carbon: $carbon
      cost: $cost
    }
  )
}
```

Variables:

```json
{
  "id": "c1111111-1111-1111-1111-111111111111",
  "improvementType": "INSULATION_ROOF",
  "cooling": 118.0,
  "heating": 93.0,
  "total": 211.0,
  "carbon": 53.0,
  "cost": 315.0
}
```

---

## Delete Example

### 9) Delete one improvement row

```graphql
mutation DeleteInsulationRoof($id: UUID!) {
  insulationRoof_delete(key: { id: $id })
}
```

Variables:

```json
{
  "id": "b1111111-1111-1111-1111-111111111111"
}
```

Tip: if a linked EnergyResult exists, delete EnergyResult first, then the improvement row.

---

## Operation Source Files

- getBuildingDetails.gql
- getImprovements.gql
- energyResults.gql
- createMutations.gql
- createWithEnergy.gql
- updateMutations.gql
- delete.gql
