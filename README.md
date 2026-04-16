# WSU

Project Console: https://console.firebase.google.com/project/building-energy-analysis/overview

Hosting URL: https://building-energy-analysis.web.app

## Data Structure

Building
├── BuildingParameters (1:1)
│   ├── InsulationRoof (1:many)
│   │   └── EnergyResult (0..1 per row)
│   ├── InsulationWall (1:many)
│   │   └── EnergyResult (0..1 per row)
│   ├── WindowSize (1:many)
│   │   └── EnergyResult (0..1 per row)
│   ├── WindowGlazing (1:many)
│   │   └── EnergyResult (0..1 per row)
│   ├── Orientation (1:many)
│   │   └── EnergyResult (0..1 per row)
│   ├── Occupancy (1:many)
│   │   └── EnergyResult (0..1 per row)
│   └── WindowShading (1:many)
│       └── EnergyResult (0..1 per row)


EnergyResult is one shared table with optional links to each improvement type.

## Current Structure

- `public/`: hosted HTML and CSS
- `public/scripts/app.js`: Firebase and Data Connect browser bootstrap
- `public/scripts/pages/`: page-specific browser modules extracted from HTML
- `public/scripts/dataconnect-generated/esm/`: browser-served generated Data Connect client
- `src/dataconnect-generated/`: source generated Data Connect client
- `dataconnect/queries/`: GraphQL queries and mutations
- `dataconnect/schema/schema.gql`: Data Connect schema

## Current Page Flow

- `index.html`: entry page
- `parameters.html`: create or update a building and its building parameters
- `all-buildings.html`: list all buildings and open actions for each
- `building-improvements.html`: list all improvements for one building and show linked energy results
- `add-improvement.html`: create or edit one improvement record and its energy result

## Setup

1. `npm install`
2. `npm install -g firebase-tools`
3. `firebase login`

If login is blocked in the terminal, use the Firebase console:
https://console.firebase.google.com/u/1/project/building-energy-analysis/hosting/sites/building-energy-analysis

## Update:

1. Update schema or GraphQL operations under `dataconnect/`
2. Regenerate the source Data Connect client if needed
3. Run `npm run sync:dataconnect-browser`
4. Run `npm run deploy:dataconnect` for backend changes
5. Run `npm run deploy:hosting` for browser changes


