const crypto = document.getElementById("crypto");
const currency = document.getElementById("currency");

const input = document.getElementById("input");
const output = document.getElementById("output");

let fromCurrency = crypto.value;
let toCurrency = currency.value;
let amount = 0;

crypto.addEventListener("change", (event) => {
  fromCurrency = event.target.value;
  calculation();
});

currency.addEventListener("change", (event) => {
  toCurrency = event.target.value;
  calculation();
});

input.addEventListener("input", (event) => {
  amount = event.target.value;
  calculation();
});

function calculation() {
  let value = 0;
  if (fromCurrency === "bitcoin") {
    if (toCurrency === "czk") value = amount * 403508;
    else if (toCurrency === "eur") value = amount * 15362.9;
    else if (toCurrency === "usd") value = amount * 18556.09;
  } else if (fromCurrency === "litecoin") {
    if (toCurrency === "czk") value = amount * 1692.55;
    else if (toCurrency === "eur") value = amount * 64.44;
    else if (toCurrency === "usd") value = amount * 77.84;
  } else if (fromCurrency === "monero") {
    if (toCurrency === "czk") value = amount * 2906.03;
    else if (toCurrency === "eur") value = amount * 110.64;
    else if (toCurrency === "usd") value = amount * 133.64;
  }
  //const value = amount * prices[fromCurrency][toCurrency];
  output.textContent = value;
}
