function displayLocalTime() {
  const now = new Date();
  document.querySelector("#local-time").textContent = `Local Time: ${formatDate(
    now
  )}`;
}
