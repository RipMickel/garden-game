const garden = document.getElementById("garden");
const scoreDisplay = document.getElementById("score");

let score = 0;

function createPlot() {
  const plot = document.createElement("div");
  plot.classList.add("plot");
  plot.dataset.state = "empty";

  plot.addEventListener("click", () => handleClick(plot));

  return plot;
}

function handleClick(plot) {
  if (plot.dataset.state !== "empty") return;

  plot.textContent = "🌱";
  plot.dataset.state = "growing";

  setTimeout(() => growPlant(plot), 2000);
}

function growPlant(plot) {
  plot.textContent = "🌿";
  plot.dataset.state = "grown";

  score++;
  scoreDisplay.textContent = score;
}

function initGarden(size = 25) {
  for (let i = 0; i < size; i++) {
    garden.appendChild(createPlot());
  }
}

initGarden();