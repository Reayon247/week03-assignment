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

    shopContainer.appendChild(newDiv);
    newDiv.appendChild(newH3);
  }
}

async function putShopAndArray() {
  const fetchedArray = await getShopAPI();
  makeTheShop(fetchedArray);
}

putShopAndArray();
