let key = "S5993HFYTHTPJ65Q3QMB3NEEJ";
let locationOfWeather = prompt("Location");

let weatherBlock = document.querySelector(".weather-block");
let h1 = document.createElement("h1");
weatherBlock.appendChild(h1);

function WeatherData(temp, address, description) {
  this.temp = temp;
  this.address = address;
  this.description = description;
}

fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationOfWeather}?key=${key}`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => {
    const displayInfo = new WeatherData(
      data.currentConditions.temp,
      data.address,
      data.currentConditions.conditions
    );

    console.log(displayInfo);
    function displayWeatherData() {
      h1.innerHTML = `${displayInfo.address} <br>
        ${displayInfo.temp} <br>
        ${displayInfo.description}
    `;
    }
    displayWeatherData();
  })
  .catch((err) => {
    console.error(err);
  });
