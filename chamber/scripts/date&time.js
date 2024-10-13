// determine the year for footer
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = ` <span class="highlight">&copy;${today.getFullYear()} Boise Chamber of Commerce</span>`;

// determines date last modified for footer
let aLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `<span class="highlight">Last Update: ${aLastModif.getMonth()}/${aLastModif.getDay()}/${aLastModif.getFullYear()} ${aLastModif.toLocaleTimeString()}</span>`;
