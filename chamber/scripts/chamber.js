//Switching between grid and list view for members
const gridbutton = document.querySelector(".gridView");
const listbutton = document.querySelector(".listView");
const display = document.querySelector(".members");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

const hamButton = document.getElementById("hamburger");
const mainNav = document.getElementById("nav");

hamButton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});
