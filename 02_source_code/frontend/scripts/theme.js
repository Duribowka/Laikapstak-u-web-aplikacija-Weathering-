const theme = document.getElementById("theme");
const emoji = document.createElement("p");
let check = 0;


emoji.textContent = `🌙`;
theme.appendChild(emoji);
theme.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    emoji.textContent = `🌙`;
  } else {
    emoji.textContent = `☀️`;
  }
  document.body.classList.toggle("light");
  document.getElementById("logo").classList.toggle("light");

  document.querySelectorAll(".cityInput").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".text").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".button").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".week__day").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".theme__emoji").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".__bar").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".theme__emoji p").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".emoji").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".form button").forEach((element) => {
    element.classList.toggle("light");
  });
  if (check == 0) {
    document.querySelectorAll(".cityDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".tempDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".descDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".weatherEmoji").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".errorDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".humidityDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".visibilityDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".feelsLikeDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".pressureDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".windSpeedDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".windDirectionDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".timeDisplay").forEach((element) => {
    element.classList.toggle("light");
  });
  } else {
    check = 1;
  }
  
  document.querySelectorAll(".card").forEach((element) => {
    element.classList.toggle("light");
  });
  document.querySelectorAll(".hyperlink").forEach((element) => {
    element.classList.toggle("light");
  });
});
