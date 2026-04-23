// Clear the previous building id when starting a new calculation.
document.addEventListener("DOMContentLoaded", () => {
  const startLink = document.getElementById("start-new-calculation");

  if (startLink) {
    startLink.addEventListener("click", () => {
      // Remove the saved id so the next flow starts fresh.
      localStorage.removeItem("buildingParametersId");
      localStorage.removeItem("buildingId");
    });
  }
});