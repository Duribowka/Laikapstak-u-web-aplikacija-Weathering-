const temp = document.getElementById("temp__system");
const toggle = document.createElement("p");
cycle = 0;

toggle.textContent = `K`;
temp.appendChild(toggle);
temp.addEventListener("click", () => {
  if (cycle == 0) {
    cycle += 1;
    toggle.textContent = `°F`;
  } else if (cycle == 1) {
    cycle += 1;
    toggle.textContent = `°C`;
  } else {
    cycle = 0;
    toggle.textContent = `K`;
  }
});
