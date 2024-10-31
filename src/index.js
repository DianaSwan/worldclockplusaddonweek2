function updateTime() {
  const cities = document.querySelectorAll(".cities");

  cities.forEach((city) => {
    const cityId = city.id;
    let timezone;

    switch (cityId) {
      case "tokyo":
        timezone = "Asia/Tokyo";
        break;
      case "london":
        timezone = "Europe/London";
        break;
      case "paris":
        timezone = "Europe/Paris";
        break;
      case "nairobi":
        timezone = "Africa/Nairobi";
        break;

      default:
        timezone = "UTC";
    }

    const now = moment.tz(timezone);

    city.querySelector(".time").innerHTML = now.format("h:mm:ss A"); // Time format with seconds
    city.querySelector(".date").innerHTML = now.format("MMMM Do, YYYY"); // Full date format
  });
}

function displaySelectedCity(cityTimezone) {
  const citiesContainer = document.getElementById("cities-container");
  citiesContainer.innerHTML = "";

  const cityDiv = document.createElement("div");
  cityDiv.classList.add("cities");
  cityDiv.id = cityTimezone.split("/")[1].toLowerCase();

  const cityInfoDiv = document.createElement("div");
  cityInfoDiv.classList.add("city-info");

  const cityName = cityTimezone.split("/")[1].replace(/_/g, " ");
  cityInfoDiv.innerHTML = `<h2>${cityName}</h2><div class="date"></div>`;

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");

  cityDiv.appendChild(cityInfoDiv);
  cityDiv.appendChild(timeDiv);
  citiesContainer.appendChild(cityDiv);

  const homepageLink = document.getElementById("homepage-link");
  homepageLink.style.display = "block";

  updateTime();
}

document.getElementById("city").addEventListener("change", function () {
  const selectedValue = this.value;

  if (selectedValue) {
    if (selectedValue === "current") {
      const timezone = "Africa/Nairobi";
      displaySelectedCity(timezone);
    } else {
      displaySelectedCity(selectedValue);
    }
  } else {
    resetCities();
  }
});

function resetCities() {
  const citiesContainer = document.getElementById("cities-container");
  citiesContainer.innerHTML = `
    <div class="cities" id="tokyo">
      <div class="city-info">
        <h2>Tokyo</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
    <div class="cities" id="london">
      <div class="city-info">
        <h2>London</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
    <div class="cities" id="paris">
      <div class="city-info">
        <h2>Paris</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
  `;

  const homepageLink = document.getElementById("homepage-link");
  homepageLink.style.display = "none";
}

setInterval(updateTime, 1000);

resetCities();
