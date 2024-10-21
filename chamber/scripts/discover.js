//Determine how long since visit
let userDates = getDates();

const theDateToday = new Date();

if (userDates[0] == null) {
  userDates[0] = theDateToday;
  userDates[1] = Math.floor(
    (Date.now() - theDateToday.getTime()) / (1000 * 60 * 60 * 24)
  );
  userDates[2] = "Welcome! Let us know if you have any questions.";
} else if (userDates[1] < 1) {
  userDates[2] = "Back so soon! Awesome!";
} else {
  userDates[2] = `You last visited ${userDates[1]} days ago`;
}

function setDates(userDatesData) {
  localStorage.setItem("userDatesLocal", JSON.stringify(userDatesData));
}

//Get data from localstorage
function getDates() {
  return JSON.parse(localStorage.getItem("userDatesLocal")) || [];
}
setDates(userDates);
const alert = document.querySelector(".visit");
const message = document.createElement("p");
message.innerHTML = userDates[2];
console.log(message)
alert.appendChild(message);