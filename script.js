let key = "S5993HFYTHTPJ65Q3QMB3NEEJ";
let locationOfWeather = prompt("Location");

let weatherBlock = document.querySelector(".weather-block");
let h1 = document.createElement("h1");
weatherBlock.appendChild(h1);

let temp;

fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationOfWeather}?key=${key}`,
  { mode: "cors" }
)
  .then((res) => res.json())
  .then((data) => {
    temp = data.currentConditions.temp;
    h1.textContent = temp;
  })
  .catch((err) => {
    console.error(err);
  });
