(() => {
const cityInput = document.querySelector(".cityInput");
const weatherForm = document.querySelector(".form");
const recentSearches = document.getElementById("recents");

cityInput.addEventListener(
  "focus",
  loadRecentSearches
);

async function loadRecentSearches() {
    const response = await fetch("http://localhost:5000/recent-searches");

    const cities = await response.json();

    recentSearches.innerHTML = "";

    cities.forEach(city => {

    const cityButton = document.createElement("button");
    cityButton.type = "button";
    cityButton.classList.add("recentsButton");

    cityButton.textContent = city;

    cityButton.addEventListener(
        "click",
        () => {

            cityInput.value = city;

            recentSearches.innerHTML = "";

            weatherForm.requestSubmit();

        }
    );

    recentSearches.appendChild(
        cityButton
    );

});
}
})();