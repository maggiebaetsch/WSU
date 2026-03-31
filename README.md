# WSU

Please use index.html to update the web app. 

Firebase hosting was setup but not with github, need auth for this. 

Steps
    1. npm install firebase
    2. firebase login
    3. firebase deploy
        If you are unable to login: https://console.firebase.google.com/u/1/project/building-energy-analysis/hosting/sites/building-energy-analysis

Project Console: https://console.firebase.google.com/project/building-energy-analysis/overview
Hosting URL: https://building-energy-analysis.web.app (Broken because index moved)


DATA STUFFFFF!!!!!!!!!!!!!!!
    Structure:
    User
    └── Building
        ├── BuildingParameters (1:1)
        ├── Improvements (1:many)
        │   ├── InsulationRoof
        │   ├── InsulationWall
        │   ├── WindowSize
        │   ├── WindowGlazing
        │   ├── Orientation
        │   ├── Occupancy
        │   └── WindowShading
        └── EnergyResult

How to veiw and confirm that the data structure is working with Schema: https://console.firebase.google.com/u/1/project/building-energy-analysis/dataconnect/locations/us-east4/services/wsu/schema

