import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getDataConnect } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-data-connect.js";
import { connectorConfig } from "./dataconnect-generated/esm/index.esm.js";

// Firebase project settings for this browser app.
const firebaseConfig = {
  apiKey: "AIzaSyD7nYWpxBM2JnB8MAAGBBme8AjIkxfMDi4",
  authDomain: "building-energy-analysis.firebaseapp.com",
  projectId: "building-energy-analysis",
};

// Start Firebase once, then export the shared Data Connect client.
initializeApp(firebaseConfig);
export const dc = getDataConnect(connectorConfig);