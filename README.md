# WSU Building Energy Analysis

Web app for capturing building parameters, managing improvement options, and storing linked energy results using Firebase Data Connect.

Project Console: https://console.firebase.google.com/project/building-energy-analysis/overview

Hosting URL: https://building-energy-analysis.web.app

## Data Structure

```
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
```

EnergyResult is a shared table with optional foreign key links to each improvement type.

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

## Prerequisites

- Node.js and npm
- Firebase CLI
- Firebase project access permissions

Install Firebase CLI globally if needed:

```bash
npm install -g firebase-tools
```

If login is blocked in the terminal, use the Firebase console:
https://console.firebase.google.com/u/1/project/building-energy-analysis/hosting/sites/building-energy-analysis

## Update:

1. Update schema or GraphQL operations under `dataconnect/`
2. Regenerate the source Data Connect client if needed
3. Run `npm run deploy:dataconnect` for backend changes
4. Run `npm run sync:dataconnect-browser` This takes the files generated in src/dataconnect-generated/esm and copies them into the pubilc files. (Needed for when any changes are made to dataconnect only)
5. Run `npm run deploy:hosting` for browser changes

## For Future Contributors

This section is for anyone taking over or extending the project.

### Quick Start Checklist

1. Pull latest changes from `main`.
2. Run `npm install`.
3. Confirm Firebase access works with `firebase login`.
4. Make a small test change and deploy hosting once to verify your setup.

### Which Files to Edit

- UI layout/content changes: `public/*.html`
- Styling changes: `public/styles.css`
- Page behavior changes: `public/scripts/pages/*.js`
- Shared app/bootstrap behavior: `public/scripts/app.js`
- Data Connect schema: `dataconnect/schema/schema.gql`
- Data Connect operations: `dataconnect/queries/*.gql`

### Safe Change Workflow

1. Make code changes.
2. If you changed Data Connect schema/queries:
	- Deploy backend with `npm run deploy:dataconnect`
	- Sync generated browser client with `npm run sync:dataconnect-browser`
3. Deploy frontend with `npm run deploy:hosting`.
4. Validate end-to-end in hosted app:
	- Create/update a building
	- Add/edit/delete improvements
	- Confirm linked energy values persist correctly

### Naming and Routing Notes

Current page files in `public/` are:

- `index.html`
- `parameters.html`
- `buildings.html`
- `buildingImprovements.html`
- `addImprovement.html`

If you rename pages, update all links and script references together.

### Common Issues you may face

- Data Connect changes are not enough by themselves; browser client sync is also required.
- A building must have `BuildingParameters` before improvements can be created.
- Deleting a building requires deleting child improvement rows first (handled in current script logic).

### Suggested Major Improvements

1. Implement better visualization on the buildings and improvements pages for better viewing at scale.
2. Add role-based access control and authentication rules so only authorized users can create, edit, or delete records. @auth(level: PUBLIC) -> @auth(level: ADMIN)
3. Add a data import/export feature (CSV/JSON) for buildings, improvements, and linked energy results.
4. Evaluate migration options from Firebase/Data Connect to alternative no-cost or lower-cost database stacks (for example Firestore, Postgres, Appwrite, or self-hosted Postgres) to reduce long-term operating cost. Current cost is approximately $10 per month.
5. Consider consolidating the `Building` and `BuildingParameters` schema into a single entity to simplify queries, reduce join complexity, and make create/update flows easier to maintain.
6. Add soft-delete and recovery support to prevent accidental permanent data loss.
7. Add audit fields (`createdAt`, `updatedAt`, `createdBy`, `updatedBy`) across entities for traceability.
8. Add baseline comparison views and automatic recommendations for best-performing improvements.





