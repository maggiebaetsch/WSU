// Landing page script.
// Purpose: when the user starts a new workflow, clear any persisted IDs from
// previous sessions so parameter/improvement pages do not open stale records.
document.addEventListener("DOMContentLoaded", () => {
  const startLink = document.getElementById("start-new-calculation");

  if (startLink) {
    startLink.addEventListener("click", () => {
      // `buildingParametersId` is used by downstream pages to load records.
      // Clearing both keys guarantees the next run creates/selects a new chain.
      localStorage.removeItem("buildingParametersId");
      localStorage.removeItem("buildingId");
    });
  }
});