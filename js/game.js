const garden = document.getElementById("garden");
const statsDisplay = document.getElementById("stats");
const gameInfo = document.getElementById("gameInfo");

let coins = 0;
let water = 10;
let selectedPlant = "fast";

let level = 1;
let timeLeft = 30;
let targetCoins = 10;
let timerInterval;

const plantTypes = {
  fast: { emoji: "🌿", growTime: 1500, value: 2, cost: 1 },
  balanced: { emoji: "🌱", growTime: 2500, value: 4, cost: 2 },
  high: { emoji: "🌻", growTime: 4000, value: 8, cost: 4 }
};

function selectPlant(type) {
  selectedPlant = type;
}

function startLevel() {
  coins = 0;
  water = 10;
  timeLeft = Math.max(15, 30 - level * 2);
  targetCoins = Math.floor(10 + level * 10);

  clearGarden();
  updateUI();

  clearInterval(timerInterval);
  timerInterval = setInterval(gameTick, 1000);
}

function gameTick() {
  timeLeft--;

  // win condition
  if (coins >= targetCoins) {
    level++;
    startLevel();
    return;
  }

  // lose condition
  if (timeLeft <= 0) {
    alert("Game Over! Reached level " + level);
    level = 1;
    startLevel();
    return;
  }

  updateUI();
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

  plot.dataset.state = "growing";
  plot.dataset.value = plant.value;

  plot.textContent = plant.emoji;

  const growTimer = setTimeout(() => {
    plot.textContent = "✨";
    plot.dataset.state = "grown";

    const decayTimer = setTimeout(() => {
      plot.textContent = "💀";
      plot.dataset.state = "dead";
    }, 3000);

    plot.dataset.timer = decayTimer;
  }, plant.growTime);

  plot.dataset.timer = growTimer;

  updateUI();
}

function waterPlant(plot) {
  if (water <= 0) return;

  water--;
  updateUI();

  clearTimeout(plot.dataset.timer);

  plot.textContent = "💧";

  setTimeout(() => {
    plot.textContent = "✨";
    plot.dataset.state = "grown";

    const decayTimer = setTimeout(() => {
      plot.textContent = "💀";
      plot.dataset.state = "dead";
    }, 3000);

    plot.dataset.timer = decayTimer;
  }, 800);
}

function harvest(plot) {
  coins += Number(plot.dataset.value);
  resetPlot(plot);
  updateUI();
}

function resetPlot(plot) {
  plot.textContent = "";
  plot.dataset.state = "empty";
  clearTimeout(plot.dataset.timer);
}

function clearGarden() {
  garden.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    garden.appendChild(createPlot());
  }
}

function updateUI() {
  statsDisplay.textContent = `Coins: ${coins} | Water: ${water} | Selected: ${selectedPlant}`;
  gameInfo.textContent = `Level: ${level} | Time: ${timeLeft}s | Target: ${targetCoins}`;
}

// water regen
setInterval(() => {
  if (water < 10) {
    water++;
    updateUI();
  }
}, 2000);

startLevel();