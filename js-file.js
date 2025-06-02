// Initialize DOM elements

// Starting div to hold button and grid div
const totalContainer = document.querySelector(".totalContainer");
totalContainer.classList.add("totalContainer");

// Customization button
const customizeGridButton = document.createElement('button');
customizeGridButton.textContent = "Click me to customize the grid";
customizeGridButton.classList.add("customizeButton");
totalContainer.appendChild(customizeGridButton);

// Grid div
const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
totalContainer.appendChild(gridDiv);

// Add button on-click event listener
customizeGridButton.addEventListener("click", () => {
    let gridSize = prompt("Choose new grid size", "");
    globalDeleteChecker++;
    gridLength = gridSize;
    gridHeight = gridSize;
    createGrid(gridHeight, gridLength);
    // console.log(globalDeleteChecker);
});

// Grid length and height starting variables
let gridLength = 16;
let gridHeight = 16;

// Global variable to allow grid deletion
let globalDeleteChecker = 0;

// Loop to create grid

// This first loop creates the number of vertical rows
function createGrid(gridHeight, gridLength){
    
    const tempGrid = document.createElement('div');
    tempGrid.classList.add("tempGrid");
    gridDiv.appendChild(tempGrid);

        for (i = 0; i < gridHeight; i++) {
            const newYDiv = document.createElement('div');
            newYDiv.classList.add("yDiv");
            tempGrid.appendChild(newYDiv);

        // This second loop creates the number of horizontal columns
            for (j = 0; j < gridLength; j++) { 
                const newXDiv = document.createElement("div");
                newXDiv.classList.add("drawDiv");
                newXDiv.addEventListener("mouseenter", () => {
                    newXDiv.classList.add("drawnDiv");
                })
                newYDiv.appendChild(newXDiv);
        }
        }

    if (globalDeleteChecker > 0) {
        
    }
};

createGrid(gridHeight, gridLength);


// Array.apply(null, gridArray(gridLength));

// console.log(divArray);