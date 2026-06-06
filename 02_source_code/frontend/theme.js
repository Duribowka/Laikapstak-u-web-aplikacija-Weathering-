const theme = document.getElementById("theme");
const emoji = document.createElement("p");
first__click = 0;

emoji.textContent = `🌙`;
theme.appendChild(emoji);
theme.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    emoji.textContent = `🌙`;
  } else {
    emoji.textContent = `☀️`;
  }
  first__click = 1;
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
  document.querySelectorAll(".bottun:hover").forEach((element) => {
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
  document.querySelectorAll(".form button:hover").forEach((element) => {
    element.classList.toggle("light");
  });
});
