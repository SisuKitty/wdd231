const memberList = "./data/members.json";
const card = document.querySelector(".business");

async function getMemberData(file) {
  const response = await fetch(file);
  const data = await response.json();
  displayMembers(data);
}

const displayMembers = (members) => {
  const cardContainer = document.querySelector(".members");
  members.forEach((member) => {
    const memberCard = document.createElement("section");
    memberCard.classList.add("business");

    const memberName = document.createElement("h1");
    const tagline = document.createElement("p");
    const logo = document.createElement("img");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const webAddress = document.createElement("p");

    memberName.classList.add("businessName");
    tagline.classList.add("tagline");
    logo.classList.add("businessLogo");
    address.classList.add("email");
    phone.classList.add("phone");
    webAddress.classList.add("url");

    memberName.textContent = `${member.name}`;
    tagline.textContent = `${member.otherInfo}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    webAddress.textContent = `${member.website}`;
    logo.textContent = `${member.website}`;

    memberCard.appendChild(memberName);
    memberCard.appendChild(tagline);
    memberCard.appendChild(logo);
    memberCard.appendChild(address);
    memberCard.appendChild(phone);
    memberCard.appendChild(webAddress);

    cardContainer.appendChild(memberCard);
  });
};

getMemberData(memberList);

//Determine how long since visit
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
alert.appendChild(message);
