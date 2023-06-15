const toggleButton = document.getElementById("toggle");
const toggleRound = document.getElementById("toggle-round");
const darkText = document.querySelector(".dark-text");
const lightText = document.querySelector(".light-text");
const html = document.querySelector("html");
const body = document.querySelector("body");

toggleButton.addEventListener("click", () => {
  toggleRound.classList.toggle("left-9");
  toggleRound.classList.add("duration-300");
  body.classList.add("duration-500");
  darkText.classList.toggle("hidden");
  lightText.classList.toggle("hidden");
  toggle.classList.toggle("bg-ToggleLight");
  html.classList.toggle("dark");
});
