const apiKey = "211c8ca44c06752de485af185bd8adad";
const weatherForm = document.querySelector(".form");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
let clockInterval;

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
      displayForecast(city);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please, enter a valid city.");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Couldn't fetch weather data");
  }

  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    timezone,
    main: { temp, humidity, feels_like, pressure },
    wind: { speed, deg },
    visibility,
    weather: [{ description, id }],
  } = data;
  card.textContent = "";
  card.style.display = "flex";

  const header = document.createElement("div");
  const main = document.createElement("div");
  const stats = document.createElement("div");

  const cityDisplay = document.createElement("h2");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");
  const feelslikeDisplay = document.createElement("p");
  const pressureDisplay = document.createElement("p");
  const windspeedDisplay = document.createElement("p");
  const winddirectionDispay = document.createElement("p");
  const visibilityDisplay = document.createElement("p");
  const timeDisplay = document.createElement("p");

  cityDisplay.textContent = city;
  if (cycle == 0) {
    tempDisplay.textContent = `${temp}K`;
  } else if (cycle == 1) {
    tempDisplay.textContent = `${((temp - 273.15) * (9 / 5) + 32).toFixed(2)}°F`;
  } else {
    tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
  }

  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);
  if (cycle == 0) {
    feelslikeDisplay.textContent = `Feels like: ${feels_like}K`;
  } else if (cycle == 1) {
    feelslikeDisplay.textContent = `Feels like: ${((feels_like - 273.15) * (9 / 5) + 32).toFixed(2)}°F`;
  } else {
    feelslikeDisplay.textContent = `Feels like: ${(feels_like - 273.15).toFixed(2)}°C`;
  }
  pressureDisplay.textContent = `Pressure: ${pressure} hPa`;
  windspeedDisplay.textContent = `Wind: ${speed} m/s`;
  winddirectionDispay.textContent = `Wind direction: ${deg}°`;
  visibilityDisplay.textContent = `Visibility: ${(visibility / 1000).toFixed(1)} km`;

  clearInterval(clockInterval);
  timeDisplay.textContent = `Local Time: ${getCityTime(timezone)}`;
  clockInterval = setInterval(() => {
    timeDisplay.textContent = `Local Time: ${getCityTime(timezone)}`;
  }, 1000);

  header.classList.add("weatherHeader");
  main.classList.add("weatherMain");
  stats.classList.add("weatherStats");

  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");
  feelslikeDisplay.classList.add("feelsLikeDisplay");
  pressureDisplay.classList.add("pressureDisplay");
  windspeedDisplay.classList.add("windSpeedDisplay");
  winddirectionDispay.classList.add("windDirectionDisplay");
  visibilityDisplay.classList.add("visibilityDisplay");
  timeDisplay.classList.add("timeDisplay");

  header.appendChild(cityDisplay);
  header.appendChild(weatherEmoji);

  main.appendChild(tempDisplay);
  main.appendChild(feelslikeDisplay);
  main.appendChild(descDisplay);

  stats.appendChild(humidityDisplay);
  stats.appendChild(windspeedDisplay);
  stats.appendChild(winddirectionDispay);
  stats.appendChild(pressureDisplay);
  stats.appendChild(visibilityDisplay);
  stats.appendChild(timeDisplay);

  card.appendChild(header);
  card.appendChild(main);
  card.appendChild(stats);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      card.style.backgroundImage = 'url("images/thunder.png")';
      return "⛈";
    case weatherId >= 300 && weatherId < 400:
      card.style.backgroundImage = 'url("images/drizzle.png")';
      return "🌧";
    case weatherId >= 500 && weatherId < 600:
      card.style.backgroundImage = 'url("images/rain.png")';
      return "🌧";
    case weatherId >= 600 && weatherId < 700:
      card.style.backgroundImage = 'url("images/snow.png")';
      return "❄";
    case weatherId >= 700 && weatherId < 800:
      card.style.backgroundImage = 'url("images/wind.png")';
      return "🌫";
    case weatherId === 800:
      card.style.backgroundImage = 'url("images/clear.png")';
      return "☀";
    case weatherId >= 801 && weatherId < 810:
      card.style.backgroundImage = 'url("images/cloud.png")';
      return "☁";
    default:
      card.style.backgroundImage = 'url("images/none.png")';
      return "❓";
  }
}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

function getCityTime(timezone) {
  const now = new Date();

  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const cityTime = new Date(utc + timezone * 1000);

  return cityTime.toLocaleTimeString("en-GB");
}
