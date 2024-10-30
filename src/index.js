function displayLocalTime() {
  const now = new Date();
  document.querySelector("#local-time").textContent = `Local Time: ${formatDate(
    now
  )}`;
}

function displayTimeZoneTime(timeZone, elementId) {
  const options = {
    timeZone,
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(new Date());
  const formattedDate = formatParts(parts);
  document.querySelector(elementId).textContent = `${
    timeZone.split("/")[1]
  }: ${formattedDate}`;
}

function formatDate(date) {
  const options = {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const parts = formatter.formatToParts(date);
  return formatParts(parts);
}

function formatParts(parts) {
  let weekday, month, day, year, hour, minute, second;
  parts.forEach(({ type, value }) => {
    switch (type) {
      case "weekday":
        weekday = value;
        break;
      case "month":
        month = value;
        break;
      case "day":
        day = addOrdinalSuffix(value);
        break;
      case "year":
        year = value;
        break;
      case "hour":
        hour = value;
        break;
      case "minute":
        minute = value;
        break;
      case "second":
        second = value;
        break;
    }
  });
  return `${weekday}, ${month} ${day} ${year} ${hour}:${minute}:${second}`;
}

function addOrdinalSuffix(day) {
  if (day > 3 && day < 21) return `${day}th`; // "th" for 4-20
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function updateTimes() {
  displayLocalTime();
  displayTimeZoneTime("America/New_York", "#time-zone-1");
  displayTimeZoneTime("Europe/London", "#time-zone-2");
  displayTimeZoneTime("Asia/Tokyo", "#time-zone-3");
}

document
  .querySelector("#location-select")
  .addEventListener("change", function () {
    const selectedZone = this.value;
    if (selectedZone === "local") {
      displayLocalTime();
    } else {
      displayTimeZoneTime(selectedZone, "#local-time");
    }
  });

setInterval(updateTimes, 1000); // Update every second
updateTimes();
