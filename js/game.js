const garden = document.getElementById("garden");
const statsDisplay = document.getElementById("stats");

let coins = 5;
let water = 10;
let selectedPlant = "fast";

const plantTypes = {
  fast: { emoji: "🌿", growTime: 1500, value: 2, cost: 1 },
  balanced: { emoji: "🌱", growTime: 2500, value: 4, cost: 2 },
  high: { emoji: "🌻", growTime: 4000, value: 8, cost: 4 }
};

function selectPlant(type) {
  selectedPlant = type;
}

function createPlot() {
  const plot = document.createElement("div");
  plot.classList.add("plot");
  plot.dataset.state = "empty";

  plot.addEventListener("click", () => handleClick(plot));

  return plot;
}

function handleClick(plot) {
  const state = plot.dataset.state;

  if (state === "empty") {
    plantSeed(plot);
  } else if (state === "growing") {
    waterPlant(plot);
  } else if (state === "grown") {
    harvest(plot);
  }
}

function plantSeed(plot) {
  const plant = plantTypes[selectedPlant];

  if (coins < plant.cost) return;

  coins -= plant.cost;
  updateUI();

  plot.dataset.state = "growing";
  plot.dataset.value = plant.value;

  plot.textContent = plant.emoji;

  const growTimer = setTimeout(() => {
    plot.textContent = "✨";
    plot.dataset.state = "grown";

    const decayTimer = setTimeout(() => {
      plot.textContent = "💀";
      plot.dataset.state = "dead";
    }, 4000);

    plot.dataset.timer = decayTimer;
  }, plant.growTime);

  plot.dataset.timer = growTimer;
}

function waterPlant(plot) {
  if (water <= 0) return;

  water--;
  updateUI();

  plot.textContent = "💧";

  clearTimeout(plot.dataset.timer);

  setTimeout(() => {
    plot.textContent = "✨";
    plot.dataset.state = "grown";

    const decayTimer = setTimeout(() => {
      plot.textContent = "💀";
      plot.dataset.state = "dead";
    }, 4000);

    plot.dataset.timer = decayTimer;
  }, 800);
}

function harvest(plot) {
  coins += Number(plot.dataset.value);
  updateUI();
  resetPlot(plot);
}

function resetPlot(plot) {
  plot.textContent = "";
  plot.dataset.state = "empty";
  clearTimeout(plot.dataset.timer);
}

function updateUI() {
  statsDisplay.textContent = `Coins: ${coins} | Water: ${water} | Selected: ${selectedPlant}`;
}

// water regen
setInterval(() => {
  if (water < 10) {
    water++;
    updateUI();
  }
}, 2000);

function initGarden(size = 25) {
  for (let i = 0; i < size; i++) {
    garden.appendChild(createPlot());
  }
}

initGarden();
updateUI();