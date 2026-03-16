const resultText = document.getElementById("result-text");
const totalCount = document.getElementById("total-count");
const headsCount = document.getElementById("heads-count");
const tailsCount = document.getElementById("tails-count");
const flipButton = document.getElementById("flip-button");

let total = 0;
let heads = 0;
let tails = 0;

const COIN_SIDES = ["Panna", "Orel"];

flipButton.addEventListener("click", () => {
  const side = COIN_SIDES[Math.floor(Math.random() * COIN_SIDES.length)];

  total += 1;
  if (side === "Panna") {
    heads += 1;
  } else {
    tails += 1;
  }

  resultText.textContent = `Padla: ${side}`;
  totalCount.textContent = String(total);
  headsCount.textContent = String(heads);
  tailsCount.textContent = String(tails);
});
