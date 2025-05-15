console.log("hello world");

// the main values
let catPetTotal = 0;
let catPetPerSec = 0;

let petTotal = localStorage.getItem("petTotal");
let petPerSec = localStorage.getItem("petPerSec");

catPetTotal = Number(petTotal);
catPetPerSec = Number(petPerSec);

const clearData = document.getElementById("clearData");

clearData.addEventListener("click", function () {
  localStorage.clear();
  catPetTotal = 0;
  catPetPerSec = 0;
});

//Shop

const changeNames = [
  "2 handed pets",
  "A helping hand",
  "A Brush",
  "Need more hands",
  "Luxury cat spa trip",
  "Nuclear Robot petter",
  "Magic cat pets",
  "Alien cat petting technique",
  "Quantum fused pets",
  "Time manipulated pets",
];

const shopContainer = document.getElementById("store");

async function getShopAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log("Response:", response);
  var shopJson = await response.json();
  console.log("json data:", shopJson);
  return shopJson;
}
// getShopAPI();

function makeTheShop(array) {
  for (let i = 0; i < array.length; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "shop-upgrade";

    newH3 = document.createElement("h3");
    newH3.textContent = `Upgrade: ${changeNames[i]}`;

    newButton = document.createElement("button");
    newButton.textContent = `Cost: ${array[i].cost}`;
    newButton.id = `button${array[i].id}`;

    shopContainer.appendChild(newDiv);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newButton);
  }
}

async function putShopAndArray() {
  const fetchedArray = await getShopAPI();
  makeTheShop(fetchedArray);
  shopButton(fetchedArray);
}

putShopAndArray();

// updating the cat pet count

let petsTotalHeader = document.getElementById("numcat");
let ppsHeader = document.getElementById("Pps");

petsTotalHeader.textContent = `Number of cat pets: ${catPetTotal}`;
ppsHeader.textContent = `Cat pets per second: ${catPetPerSec}`;

setInterval(function () {
  catPetTotal += catPetPerSec;
  petsTotalHeader.textContent = `Number of cat pets: ${catPetTotal}`;
  ppsHeader.textContent = `Cat pets per second: ${catPetPerSec}`;
  localStorage.setItem("petTotal", catPetTotal);
  localStorage.setItem("petPerSec", catPetPerSec);
}, 1000);

// clicking the cat to get a pet

const catImage = document.getElementById("cat-image");

function clickCat() {
  catPetTotal += 1;
  petsTotalHeader.textContent = `Number of cat pets: ${catPetTotal}`;
  localStorage.setItem("petTotal", catPetTotal);
}

catImage.addEventListener("click", clickCat);

// function for the shop buttons

function shopButton(array) {
  for (let i = 0; i < array.length; i++) {
    buyButton = document.getElementById(`button${array[i].id}`);
    buyButton.addEventListener("click", function () {
      if (catPetTotal > array[i].cost) {
        buyButton = document.getElementById(`button${array[i].id}`);
        catPetPerSec += array[i].increase;
        catPetTotal -= array[i].cost;
        localStorage.setItem("petPerSec", catPetPerSec);
        localStorage.setItem("petTotal", catPetTotal);
        petsTotalHeader.textContent = `Number of cat pets: ${catPetTotal}`;
        ppsHeader.textContent = `Cat pets per second: ${catPetPerSec}`;
      }
    });
  }
}
