const date = document.querySelector("#date");
const time = document.querySelector("#time");
const dayOfWeek = document.querySelector("#today");

const input = document.querySelector("#userInput");
const apiKey = "b169b31281ffa2a2b70b9e8ac22c3e88";

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windspeed");
const feelsLike = document.querySelector("#feelslike");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const day4 = document.querySelector("#day4");
const day5 = document.querySelector("#day5");

date.innerText = moment().format("MMMM Do YYYY");
time.innerText = moment().format("h:mm A");
dayOfWeek.innerText = moment().format("dddd");

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
      console.log(data);
      displayWeather(data);
    });
}

let displayWeather = function (weatherData) {
  cityName.innerText = weatherData.name;
  temperature.innerText = Math.floor(weatherData.main.temp) + "\u00B0";
  humidity.innerText = weatherData.main.humidity + "%";
  windSpeed.innerText = weatherData.wind.speed + " MPH";
  feelsLike.innerText = weatherData.main.feels_like + "\u00B0 F";

  let fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=${apiKey}&units=imperial`;
  fetch(fiveDayURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      fiveDayWeather(data);
    });
};

let fiveDayWeather = function (weatherData) {
  
};
