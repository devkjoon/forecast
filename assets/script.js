const date = document.querySelector("#date");
const time = document.querySelector("#time");
const dayOfWeek = document.querySelector("#today");

const input = document.querySelector("#userInput");

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windspeed");
const feelsLike = document.querySelector("#feelslike");
const tempHigh = document.querySelector("#tempHigh");
const tempLow = document.querySelector("#tempLow");

date.innerText = moment().format("MMMM Do YYYY");
time.innerText = moment().format("h:mm A");
dayOfWeek.innerText = moment().format("dddd");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    getApi();
    input.value = "";
  }
});

function getApi() {
  let cityName = document.querySelector("#userInput").value;

  let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b169b31281ffa2a2b70b9e8ac22c3e88&units=imperial`;
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
  tempHigh.innerText = weatherData.main.temp_max + "\u00B0 F";
  tempLow.innerText = weatherData.main.temp_min + "\u00B0 F";

  let fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&appid=b169b31281ffa2a2b70b9e8ac22c3e88&units=imperial`;
  fetch(fiveDayURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      fiveDayWeather(data);
    });
};

let fiveDayWeather = function (weatherValue) {
  const date1 = document.querySelector("#date1");
  const date2 = document.querySelector("#date2");
  const date3 = document.querySelector("#date3");
  const date4 = document.querySelector("#date4");
  const date5 = document.querySelector("#date5");

  const date1Temp = document.querySelector("#date1Temp");
  const date2Temp = document.querySelector("#date2Temp");
  const date3Temp = document.querySelector("#date3Temp");
  const date4Temp = document.querySelector("#date4Temp");
  const date5Temp = document.querySelector("#date5Temp");

  let todaysMonth = dayjs().$M;
  let tomorrow = dayjs().$D + 1;
  let twoDaysAfter = dayjs().$D + 2;
  let threeDaysAfter = dayjs().$D + 3;
  let fourDaysAfter = dayjs().$D + 4;
  let fiveDaysAfter = dayjs().$D + 5;

  date1.innerText = `${todaysMonth}/${tomorrow}`;
  date1Temp.innerText = weatherValue.list[1].main.temp + "\u00B0 F";
  date2.innerText = `${todaysMonth}/${twoDaysAfter}`;
  date2Temp.innerText = weatherValue.list[2].main.temp + "\u00B0 F";
  date3.innerText = `${todaysMonth}/${threeDaysAfter}`;
  date3Temp.innerText = weatherValue.list[3].main.temp + "\u00B0 F";
  date4.innerText = `${todaysMonth}/${fourDaysAfter}`;
  date4Temp.innerText = weatherValue.list[4].main.temp + "\u00B0 F";
  date5.innerText = `${todaysMonth}/${fiveDaysAfter}`;
  date5Temp.innerText = weatherValue.list[5].main.temp + "\u00B0 F";

  console.log(fiveDaysAfter);
};
