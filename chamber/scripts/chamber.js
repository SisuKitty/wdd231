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

// determine the year for footer
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = ` <span class="highlight">&copy;${today.getFullYear()} Boise Chamber of Commerce</span>`;

// determines date last modified for footer
let aLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");

lastModified.innerHTML = `<span class="highlight">Last Update: ${aLastModif.getMonth()}/${aLastModif.getDay()}/${aLastModif.getFullYear()} ${aLastModif.toLocaleTimeString()}</span>`;

//list of members
[
  {
    name: "Oppenheimer Companies",
    address: "877 W Main St Ste 700, Boise, ID 83702",
    phone: "(208) 343-4883",
    website: "https://oppcos.com/",
    image: "oppenheimer_logo.png",
    membershipLevel: 3,
    otherInfo:
      "Privately held corporation operating throughout the United States.",
  },
  {
    name: "Kount (an Equifax Company)",
    address: "1005 W Main St, Boise, ID 83702",
    phone: "(866) 919-2167",
    website: "https://kount.com/",
    image: "kount_logo.png",
    membershipLevel: 2,
    otherInfo:
      "Powered by the Identity Trust Global Network for fraud prevention.",
  },
  {
    name: "Ian and Company Real Estate Group",
    address: "913 W River St Ste 300, Boise, ID 83702",
    phone: "(208) 860-0574",
    website: "https://www.idahohomeandlife.com/",
    image: "ian_realty_logo.png",
    membershipLevel: 1,
    otherInfo: "Real estate agent located in Boise.",
  },
  {
    name: "Ventive",
    address: "121 N 9th St Ste 101, Boise, ID 83702",
    phone: "(208) 477-1667",
    website: "https://www.getventive.com/",
    image: "ventive_logo.png",
    membershipLevel: 2,
    otherInfo:
      "Full-service digital agency combining creativity with technical acumen.",
  },
  {
    name: "Boise Creative Co-op",
    address: "1234 Main St, Boise, ID 83701",
    phone: "(208) 555-1234",
    website: "https://boisecreativeco-op.com/",
    image: "boise_creative_logo.png",
    membershipLevel: 1,
    otherInfo: "Collaborative workspace for local artists and creatives.",
  },
  {
    name: "Gem State Solar",
    address: "567 Solar Ave, Boise, ID 83703",
    phone: "(208) 987-6543",
    website: "https://gemstatesolar.com/",
    image: "gem_state_solar_logo.png",
    membershipLevel: 3,
    otherInfo: "Leading provider of solar energy solutions in the region.",
  },
  {
    name: "Blue Sky Brewery",
    address: "789 Hop St, Boise, ID 83704",
    phone: "(208) 789-5678",
    website: "https://blueskybrewery.com/",
    image: "blue_sky_brewery_logo.png",
    membershipLevel: 1,
    otherInfo: "Local craft brewery known for its creative beer offerings.",
  },
];
