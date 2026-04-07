# WSU

Please use index.html to update the web app. 

Firebase hosting was setup but not with github, need auth for this. 

Steps
    1. npm install firebase
    2. npm install -g firebase-tools
    3. firebase login
    4. firebase deploy
        If you are unable to login: https://console.firebase.google.com/u/1/project/building-energy-analysis/hosting/sites/building-energy-analysis

Project Console: https://console.firebase.google.com/project/building-energy-analysis/overview

Hosting URL: https://building-energy-analysis.web.app


DATA STUFF
    Structure:
    User
    └── Building
        ├── BuildingParameters (1:1)
        ├── InsulationRoof (1:many)
        │   └── EnergyResult (0..1 per row)
        ├── InsulationWall (1:many)
        │   └── EnergyResult (0..1 per row)
        ├── WindowSize (1:many)
        │   └── EnergyResult (0..1 per row)
        ├── WindowGlazing (1:many)
        │   └── EnergyResult (0..1 per row)
        ├── Orientation (1:many)
        │   └── EnergyResult (0..1 per row)
        ├── Occupancy (1:many)
        │   └── EnergyResult (0..1 per row)
        └── WindowShading (1:many)
            └── EnergyResult (0..1 per row)

    Note: EnergyResult is one shared table with optional links to each improvement type.

    To deploy only changes to Firebase Data: firebase deploy --only dataconnect

How to view and confirm that the data structure is working with Schema: https://console.firebase.google.com/u/1/project/building-energy-analysis/dataconnect/locations/us-east4/services/wsu/schema

