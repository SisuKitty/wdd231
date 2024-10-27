// determine the year for footer
const year = document.querySelector("#currentyear");

const today = new Date();

console.log(year);

year.innerHTML = ` <span class="highlight">&copy;${today.getFullYear()} Sheena Gibbons Portfolio Website</span>`;

// determines date last modified for footer
let aLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `<span class="highlight">Last Update: ${aLastModif.getMonth()}/${aLastModif.getDay()}/${aLastModif.getFullYear()} ${aLastModif.toLocaleTimeString()}</span>`;

//Hamburger Menu
const hamButton = document.getElementById("hamburger");
const mainNav = document.getElementById("nav");

hamButton.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});
