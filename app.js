console.log("hello world");

// the main values
let catPetTotal = 0;
let catPetPerSec = 0;

// if local storage has values, update them to that

//Shop

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
    newH3.textContent = `Upgrade: ${array[i].name}`;

    newButton = document.createElement("button");
    newButton.textContent = `Cost: ${array[i].cost}`;

    shopContainer.appendChild(newDiv);
    newDiv.appendChild(newH3);
    newDiv.appendChild(newButton);
  }
}

async function putShopAndArray() {
  const fetchedArray = await getShopAPI();
  makeTheShop(fetchedArray);
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
}, 1000);

//
