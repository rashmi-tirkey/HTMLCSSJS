const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdownsSelect = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const tocurrency = document.querySelector(".to select");
const fromcurrency = document.querySelector(".from select");

for (let select of dropdownsSelect) {
  for (let currency in countryList) {
    const newOption = document.createElement("option");
    newOption.value = currency;
    newOption.innerText = currency;
    if (select.name === "from" && currency === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currency === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evnt) => {
    updateFlag(evnt.target);
  });
}

const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  const flagElement = element.parentElement.querySelector("img");
  flagElement.src = newSrc;
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  let amount = document.querySelector(".input");
  let newAmount = amount.value;
  if (newAmount === "" || newAmount < 1) {
    newAmount = 1;
    amount.value = "1";
  }

  const fromCurrencyValue = fromcurrency.value.toLowerCase();
  const toCurrencyValue = tocurrency.value.toLowerCase();
  const URL = `${BASE_URL}/${fromCurrencyValue}/${toCurrencyValue}.json`;

  console.log(`Fetching exchange rate from: ${URL}`); // Log the URL for debugging

  try {
    let response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
});
