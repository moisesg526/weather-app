let key = "S5993HFYTHTPJ65Q3QMB3NEEJ";
// let locationOfWeather = prompt("Location");

let weatherBlock = document.querySelector(".weather-block");

let h1 = document.createElement("h1");

let addressBanner = document.createElement("div");
addressBanner.setAttribute("class", "addressBanner");

let conditionStatement = document.createElement("div");
conditionStatement.setAttribute("class", "condition");

let weatherTable = document.createElement("div");
weatherTable.setAttribute("class", "weather-table");

let weatherDataTitle = document.createElement("div");
weatherDataTitle.setAttribute("class", "weather-data-title");

let weatherData = document.createElement("div");
weatherData.setAttribute("class", "weather-data");

weatherBlock.appendChild(addressBanner);
weatherBlock.appendChild(h1);
weatherBlock.appendChild(conditionStatement);
weatherBlock.appendChild(weatherTable);

weatherTable.appendChild(weatherDataTitle);
weatherTable.appendChild(weatherData);

let dataTitle = ["Humidity", "Wind", "visibility"];

function WeatherData(
  temp,
  address,
  conditions,
  description,
  humidity,
  windgust,
  visibility
) {
  this.temp = temp;
  this.address = address;
  this.conditions = conditions;
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
      Math.round(data.currentConditions.temp),
      data.resolvedAddress,
      data.currentConditions.conditions,
      Math.round(data.currentConditions.humidity),
      Math.round(data.currentConditions.windgust),
      Math.round(data.currentConditions.visibility)
    );

    let displayWeatherDataArray = [];
    displayWeatherDataArray.push(displayInfo);

    function displayWeatherData() {
      addressBanner.innerHTML = `Weather in ${displayInfo.address} <br>`;
      h1.innerHTML = `${displayInfo.temp}°`;
      conditionStatement.innerHTML = `${displayInfo.conditions}`;

      dataTitle.forEach((title) => {
        const h3 = document.createElement("h3");
        h3.innerHTML = title;
        weatherDataTitle.appendChild(h3);
      });

      displayWeatherDataArray.forEach((info) => {
        const properties = [
          `${info.humidity}%`,
          `${info.windgust} MPH`,
          `${info.visibility} mi`,
        ];

        properties.forEach((property) => {
          const h3 = document.createElement("h3");
          h3.textContent = property;
          weatherData.appendChild(h3);
        });
      });
    }
    displayWeatherData();
  })
  .catch((err) => {
    console.error(err);
  });
