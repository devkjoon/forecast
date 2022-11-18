# Weather Dashboard

## Description

Search the current and future weather conditions for multiple cities. This application utilizes OpenWeather API to retrieve weather data for cities and displays the weather consisting of temperature, weather condition, humidity, and wind speed of the current day and the five following days.

## Table of Contents

- [Acceptance Criteria](#acceptance-criteria)
- [Built With](#built-with)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [License](#license)
- [DeployedLink](#deployed-link) 

## Acceptance Criteria

User Story
- AS A traveler
- I WANT to see the weather outlook for multiple cities
- SO THAT I can plan a trip accordingly

Acceptance Criteria
- GIVEN a weather dashboard with form inputs
- WHEN I search for a city
- THEN I am presented with current and future conditions for that city and that city is added to the search history
- WHEN I view current weather conditions for that city
- THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
- WHEN I view future weather conditions for that city
- THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
- WHEN I click on a city in the search history
- THEN I am again presented with current and future conditions for that city

## Built With

- HTML
- CSS
- JavaScript
- JSON
- jQuery
- Bootstrap
- OpenWeather API

## Usage

- Upon page load, accept location services request
- Weather for current location will be shown
- Type in a city name on search bar
- Weather for that city will be reflected upon pressing enter
- Today's temperature, time, and condition description will be shown in the middle
- Today's weather data will be shown on the right 
- Future weather for the next five days will be below, consisting of condition, date, humidity, and wind speeds
- Search bar on click will drop down to see previous searched history
- Upon clicking this will prompt appplication to show that city's weather again.

## Screenshot

![image](https://user-images.githubusercontent.com/114375310/202767865-040a357d-c18c-4681-9775-abd3284ece68.png)

## License

See LICENSE in repo

## Deployed Link

https://joonkidk.github.io/weather-dashboard/