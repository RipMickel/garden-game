const garden = document.getElementById("garden");
const scoreDisplay = document.getElementById("score");

let coins = 0;

function createPlot() {
  const plot = document.createElement("div");
  plot.classList.add("plot");

  plot.dataset.state = "empty";
  plot.dataset.timer = "";

  plot.addEventListener("click", () => handleClick(plot));

  return plot;
}

function handleClick(plot) {
  const state = plot.dataset.state;

  if (state === "empty") {
    plantSeed(plot);
  } else if (state === "grown") {
    harvest(plot);
  } else if (state === "growing") {
    water(plot);
  }
}

function plantSeed(plot) {
  plot.textContent = "🌱";
  plot.dataset.state = "growing";

  const growTimer = setTimeout(() => {
    plot.textContent = "🌻";
    plot.dataset.state = "grown";

    // start decay timer
    const decayTimer = setTimeout(() => {
      plot.textContent = "💀";
      plot.dataset.state = "dead";
    }, 4000);

    plot.dataset.timer = decayTimer;
  }, 2000);

  plot.dataset.timer = growTimer;
}

function water(plot) {
  // speed up growth
  plot.textContent = "💧";

  clearTimeout(plot.dataset.timer);

  setTimeout(() => {
    plot.textContent = "🌻";
    plot.dataset.state = "grown";

    const decayTimer = setTimeout(() => {
      plot.textContent = "💀";
      plot.dataset.state = "dead";
    }, 4000);

    plot.dataset.timer = decayTimer;
  }, 800);
}

function harvest(plot) {
  coins += 2;
  scoreDisplay.textContent = coins;

  resetPlot(plot);
}

function resetPlot(plot) {
  plot.textContent = "";
  plot.dataset.state = "empty";
  clearTimeout(plot.dataset.timer);
}

function initGarden(size = 25) {
  for (let i = 0; i < size; i++) {
    garden.appendChild(createPlot());
  }
}

initGarden();