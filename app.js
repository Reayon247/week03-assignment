console.log("hello world");

// the main values
let catPetTotal = 0;
let catPetPerSec = 0;

// if local storage has values, update them to that

//Shop

async function getShopAPI() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log("Response:", response);
  const shopJson = await response.json();
  console.log("json data:", shopJson);
}
getShopAPI();
