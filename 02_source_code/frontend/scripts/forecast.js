const forecastContainer = document.querySelector(".forecastContainer");

async function displayForecast(city) {
  try {
    const data = await getForecastData(city);

    forecastContainer.textContent = "";

    const days = {};

    data.list.forEach((item) => {
      const date = item.dt_txt.split(" ")[0];

      if (!days[date]) {
        days[date] = [];
      }

      days[date].push(item);
    });

    Object.entries(days)
      .slice(0, 5)
      .forEach(([date, forecasts]) => {
        createForecastCard(date, forecasts);
      });
  } catch (error) {
    console.error(error);
  }
}

async function getForecastData(city) {
  const apiUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Couldn't fetch forecast data");
  }

  return await response.json();
}

function createForecastCard(date, forecasts) {
  const card = document.createElement("div");
  const dateDisplay = document.createElement("h3");
  const emojiDisplay = document.createElement("p");
  const tempDisplay = document.createElement("p");

  card.classList.add("forecastCard");
  dateDisplay.classList.add("forecastDate");
  emojiDisplay.classList.add("forecastEmoji");
  tempDisplay.classList.add("forecastTemp");

  if (document.body.classList.contains("light")) {
    card.classList.add("light");
    dateDisplay.classList.add("light");
    emojiDisplay.classList.add("light");
    tempDisplay.classList.add("light");
  }

  dateDisplay.textContent = new Date(date).toLocaleDateString(
    "en-GB",
    {
      weekday: "short",
      day: "numeric",
      month: "short",
    }
  );

  const temps = forecasts.map((f) => f.main.temp);

  const minTemp = Math.min(...temps);
  const maxTemp = Math.max(...temps);

  const middayForecast =
    forecasts.find((f) =>
      f.dt_txt.includes("12:00:00")
    ) || forecasts[Math.floor(forecasts.length / 2)];

  emojiDisplay.textContent =
    getForecastEmoji(middayForecast.weather[0].id);

  if (cycle == 0) {
    tempDisplay.textContent =
      `${minTemp.toFixed(1)}K / ${maxTemp.toFixed(1)}K`;
  } else if (cycle == 1) {
    tempDisplay.textContent =
      `${((minTemp - 273.15) * (9 / 5) + 32).toFixed(1)}°F / ${((maxTemp - 273.15) * (9 / 5) + 32).toFixed(1)}°F`;
  } else {
    tempDisplay.textContent =
      `${(minTemp - 273.15).toFixed(1)}°C / ${(maxTemp - 273.15).toFixed(1)}°C`;
  }

  card.appendChild(dateDisplay);
  card.appendChild(emojiDisplay);
  card.appendChild(tempDisplay);

  forecastContainer.appendChild(card);
}

function getForecastEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return "⛈";
    case weatherId >= 300 && weatherId < 400:
      return "🌧";
    case weatherId >= 500 && weatherId < 600:
      return "🌧";
    case weatherId >= 600 && weatherId < 700:
      return "❄";
    case weatherId >= 700 && weatherId < 800:
      return "🌫";
    case weatherId === 800:
      return "☀";
    case weatherId >= 801 && weatherId < 810:
      return "☁";
    default:
      return "❓";
  }
}