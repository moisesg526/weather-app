let key = "S5993HFYTHTPJ65Q3QMB3NEEJ";
fetch(
  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=${key}`,
  { mode: "cors" }
)
  .then(function (res) {
    console.log(res.json());
  })
  
