const defaultGridSize = 16;
const gridContainer = document.querySelector('.grid-container');

function removeGrid() {
  let gridRows = document.querySelectorAll('.grid-row');
  gridRows.forEach((gridRow) => {
    gridRow.remove();
  });
}

function buildGrid(gridSize) {
  // make the rows
  for (let i = 0; i < gridSize; i++) {    
    let gridRow = document.createElement('div');
    gridRow.classList.add('grid-row');
    gridContainer.appendChild(gridRow);
    // then the columns
    for (let j = 0; j < gridSize; j++) {
      let gridSquare = document.createElement('div');
      gridSquare.classList.add('grid-square');
      gridRow.appendChild(gridSquare);  
    }
  }
  highlightSquares();
}

function highlightSquares() {  
  let gridSquares = document.querySelectorAll('.grid-square');
  gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener('mouseenter', (event) => {    
      gridSquare.setAttribute('style', 'background-color: red');

    });
  }, false);
}

// Build the initial grid
buildGrid(defaultGridSize);
highlightSquares()

// prompt user for new grid
function promptForGrid() {
  let gridSize= prompt('How many squares per side of new grid?');
  // ensure a number is input
  while (gridSize > 100) {
    gridSize = prompt('Please select a number below 100');
  }
  while (typeof(Number(gridSize)) !== 'number') {
    gridSize = prompt('Invalid entry. Please select a number for the grid size.')
    // ensure number is less than 100
    
  }
  removeGrid();  
  buildGrid(Number(gridSize));
}
let newGridButton = document.querySelector('.new-grid-button');
newGridButton.addEventListener('click', promptForGrid);




