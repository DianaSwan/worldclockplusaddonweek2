function displayLocalTime() {
  const now = new Date();
  document.querySelector("#local-time").textContent = `Local Time: ${formatDate(
    now
  )}`;
}

function displayTimeZoneTime(timeZone, elementId) {
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
  };
  const formatter = new Intl.DateTimeFormat([], options);
  const time = formatter.format(new Date());
  document.querySelector(elementId).textContent = `${
    timeZone.split("/")[1]
  }: ${time}`;
}
