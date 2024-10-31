document.getElementById("city").addEventListener("change", function () {
  const city = this.value;
  const citiesContainer = document.getElementById("cities-container");
  const now = moment();

  citiesContainer.innerHTML = "";

  if (city === "current") {
    const localTime = moment().format("MMMM Do, YYYY h:mm:ss A");
    const localCity = moment.tz.guess();
    citiesContainer.innerHTML += `<div class="cities"><h2>Local Time</h2><div class="date">${localTime}</div></div>`;
  } else if (city) {
    const cityTime = moment.tz(city).format("MMMM Do, YYYY h:mm:ss A");
    citiesContainer.innerHTML += `<div class="cities"><h2>${city.replace(
      /_/g,
      " "
    )}</h2><div class="date">${cityTime}</div></div>`;
  }
});
