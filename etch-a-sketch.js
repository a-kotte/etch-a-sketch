const defaultGridSize = 16;
const gridContainer = document.querySelector('.grid-container');

// Create the grid
for (let i = 0; i < defaultGridSize; i++) {
  // make the rows
  let gridRow = document.createElement('div');
  gridRow.classList.add('grid-row');
  gridContainer.appendChild(gridRow);
  // then the columns
  for (let j = 0; j < defaultGridSize; j++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridRow.appendChild(gridSquare);

  }
}

// highlight on mousover
let gridSquares = document.querySelectorAll('.grid-square');
gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener('mouseenter', (event) => {    
    gridSquare.setAttribute('style', 'background-color: red');

  });
}, false);

// prompt user for new grid