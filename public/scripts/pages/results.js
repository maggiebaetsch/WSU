import { dc } from "../app.js";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  // Find the results container and the last saved parameter id.
  const resultsDiv = document.getElementById("results-content");
  const buildingParametersId = localStorage.getItem("buildingParametersId");

  if (!buildingParametersId) {
    resultsDiv.innerHTML = "<p>No building parameters found. Please start a new calculation.</p>";
    return;
  }

  try {
    // Fetch the saved building parameter row directly.
    const query = `query GetResults($id: String!) { buildingParameters_by_pk(id: $id) { id climate floorArea buildingType envelope isAC } }`;
    const res = await dc.query(query, { id: buildingParametersId });

    if (res.data && res.data.buildingParameters_by_pk) {
      // Render the saved values if a matching record exists.
      const bp = res.data.buildingParameters_by_pk;
      resultsDiv.innerHTML = `<h2>Building Parameters</h2>
        <ul>
          <li><b>Climate:</b> ${bp.climate}</li>
          <li><b>Floor Area:</b> ${bp.floorArea}</li>
          <li><b>Building Type:</b> ${bp.buildingType}</li>
          <li><b>Envelope:</b> ${bp.envelope}</li>
          <li><b>Air Conditioned:</b> ${bp.isAC ? "Yes" : "No"}</li>
        </ul>`;
    } else {
      // Show when no matching row exists.
      resultsDiv.innerHTML = "<p>No results found for this building.</p>";
    }
  } catch (error) {
    // Show a error if the query fails.
    resultsDiv.innerHTML = `<p>Error loading results: ${error.message}</p>`;
  }
}