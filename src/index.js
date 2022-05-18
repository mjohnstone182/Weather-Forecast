function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function displayWeatherCurrent(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temps").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchCity(city) {
  let apiKey = "187ee23d0b9957fa5f612328e679b48c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitute}&appid={apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCurrent);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function showTemperature(response) {
  console.log(response.data);
  let temps = Math.round(response.data.main.temp);
  let tempsElement = document.querySelector("#temps");
  tempsElement.innerHTML = `${temps}°C`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;

  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSubmit);
  searchCity();
}
