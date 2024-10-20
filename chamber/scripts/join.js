const memberships = [
  {
    level: "NP Membership",
    cost: "Free",
    benefits: ["Access to community events", "Basic training materials"],
  },
  {
    level: "Bronze Membership",
    cost: "$20/month",
    benefits: [
      "All NP Membership benefits",
      "Access to special events",
      "Discounts on workshops",
    ],
  },
  {
    level: "Silver Membership",
    cost: "$50/month",
    benefits: [
      "All Bronze Membership benefits",
      "Personalized training sessions",
      "Spotlight positions on the home page",
    ],
  },
  {
    level: "Gold Membership",
    cost: "$100/month",
    benefits: [
      "All Silver Membership benefits",
      "Free entry to all events",
      "Exclusive advertising opportunities",
    ],
  },
];

//display & format membership card levels
for (let i = 0; i < memberships.length; i++) {
  const cards = document.querySelector(".membership-cards");
  const mCard = document.createElement("div");
  mCard.innerHTML = `
    <h3>${memberships[i].level}</h3>
    <button class="learnMore">Learn More</button>
    `;
  mCard.classList.add("membershipCard");
  cards.appendChild(mCard);
  const buttonModal = mCard.querySelector(".learnMore");
  buttonModal.addEventListener("click", () => displayModal(memberships[i]));
}

//join membership membership info
function displayModal(membership) {
  const membershipDetails = document.querySelector(".modal");
  membershipDetails.innerHTML = "";
  membershipDetails.innerHTML = `
  <button id="closeModal">x</button>
  <h3>${membership.level}</h3>
  <p><strong>Cost</strong>: ${membership.cost}</p>
  <p><strong>Benefits</strong>: ${membership.benefits}</p>
  `;

  membershipDetails.style.display = "block";

  function closeModal() {
    membershipDetails.style.display = "none";
  }

  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", closeModal);

  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}
