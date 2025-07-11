const container = document.getElementById("container");
const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

function createGrid(size) {
  container.innerHTML = ''; // Clear old squares
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.dataset.darkness = "0";

    square.addEventListener("mouseenter", () => {
      let currentDarkness = parseFloat(square.dataset.darkness);
      if (currentDarkness < 1) {
        currentDarkness += 0.1;
        square.dataset.darkness = currentDarkness.toFixed(1);
        const color = getRandomRGB();
        square.style.backgroundColor = `rgba(${color}, ${currentDarkness})`;
      }
    });

    container.appendChild(square);
  }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `${r}, ${g}, ${b}`;
}

function promptGrid() {
  let size = prompt("Enter grid size (max 100):");
  size = parseInt(size);
  if (!size || size < 1 || size > MAX_SIZE) {
    alert("Invalid size! Please enter a number between 1 and 100.");
    return;
  }
  createGrid(size);
}

createGrid(DEFAULT_SIZE);
