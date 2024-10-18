let key = "S5993HFYTHTPJ65Q3QMB3NEEJ";
let locationOfWeather = prompt("Location");

let weatherBlock = document.querySelector(".weather-block");

let addressBanner = document.createElement("div");
addressBanner.setAttribute("class", "addressBanner");
weatherBlock.appendChild(addressBanner);

let h1 = document.createElement("h1");
weatherBlock.appendChild(h1);

let h3 = document.createElement("h3");
weatherBlock.appendChild(h3);

function WeatherData(
  temp,
  address,
  description,
  humidity,
  windgust,
  visibility
) {
  this.temp = temp;
  this.address = address;
  this.description = description;
  this.humidity = humidity;
  this.windgust = windgust;
  this.visibility = visibility;
}

fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationOfWeather}?key=${key}`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => {
    const displayInfo = new WeatherData(
      data.currentConditions.temp,
      data.resolvedAddress,
      data.currentConditions.conditions,
      data.currentConditions.humidity,
      data.currentConditions.windgust,
      data.currentConditions.visibility
    );

    console.log(displayInfo);
    function displayWeatherData() {
      addressBanner.innerHTML = `Weather in
        ${displayInfo.address} <br>`;
      h1.innerHTML = `
        ${displayInfo.temp}°
    `;
      h3.innerHTML = `
        ${displayInfo.description} <br>
        Humidity ${displayInfo.humidity}<br>
        Wind ${displayInfo.windgust}<br>
        Visibility ${displayInfo.visibility}<br>
        `;
    }
    displayWeatherData();
  })
  .catch((err) => {
    console.error(err);
  });
