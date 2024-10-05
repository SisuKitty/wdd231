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
