const date = document.querySelector("#date");
const todaysDate = moment().format("MMMM Do YYYY");
const currentTime = moment().format("h:mm A");
const input = document.querySelector("#userInput");
const time = document.querySelector("#time");
const dayOfWeek = document.querySelector("#today");
const today = moment().format("dddd");
const apiKey = "b169b31281ffa2a2b70b9e8ac22c3e88";

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windspeed");
const feelsLike = document.querySelector("#feelslike");

const dateTomorrow = moment("MM/DD").add('days', 5)

date.innerText = todaysDate;
time.innerText = currentTime;
dayOfWeek.innerText = today;

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getApi();
  }
});

function getApi() {
  let cityName = document.querySelector("#userInput").value;

  let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
  //   let sunConvert = [];
  fetch(requestURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data)
      displayWeather(data);
    });
};

let displayWeather = function (weatherData) {
  cityName.innerText = weatherData.name;
  temperature.innerText = Math.floor(weatherData.main.temp) + "\u00B0";
  humidity.innerText = weatherData.main.humidity + "%";
  windSpeed.innerText = weatherData.wind.speed + " MPH";
  feelsLike.innerText = weatherData.main.feels_like + "\u00B0 F";

  let fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${apiKey}&units=imperial`
  fetch(fiveDayURL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data)
    fiveDayWeather(data)
  });
};

let fiveDayWeather = function (weatherData) {

}
