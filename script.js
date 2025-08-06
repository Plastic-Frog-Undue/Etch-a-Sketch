const container = document.getElementById('grid-container');
const button = document.getElementById('resize-btn');

function makeGrid(size) {
  container.innerHTML = ''; // Clear existing grid
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');

    let isClicked = false;

    cell.addEventListener('mouseover', () => {
      if (!isClicked) cell.style.backgroundColor = 'lightblue';
    });

    cell.addEventListener('mouseout', () => {
      if (!isClicked) cell.style.backgroundColor = 'white';
    });

    cell.addEventListener('click', () => {
      isClicked = true;
      cell.style.backgroundColor = 'steelblue';
    });

    container.appendChild(cell);
  }
}

// Default grid (16x16)
makeGrid(16);

// Resize button logic
button.addEventListener('click', () => {
  let size = prompt("Enter grid size (1–100):");
  size = parseInt(size);

  if (Number.isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  makeGrid(size);
});


