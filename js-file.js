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
    gridDimensions = gridSize;
    createGrid(gridDimensions);
    // console.log(globalDeleteChecker);
});

// Grid length and height starting variables
let gridDimensions = 16;

// Global variable to allow grid deletion
let globalDeleteChecker = 0;

// Loop to create grid

// This first loop creates the number of vertical rows
function createGrid(gridDimensions){
    
    const tempGrid = document.createElement('div');
    tempGrid.classList.add("tempGrid");
    gridDiv.appendChild(tempGrid);

        for (i = 0; i < gridDimensions; i++) {
            const newRowDiv = document.createElement('div');
            newRowDiv.classList.add("rowDiv");
            tempGrid.appendChild(newRowDiv);

        // This second loop creates the number of horizontal columns
            for (j = 0; j < gridDimensions; j++) { 
                const newColumnDiv = document.createElement("div");
                newColumnDiv.classList.add("columnDiv");
                newColumnDiv.innerHTML = "&nbsp";
                newColumnDiv.addEventListener("mouseenter", () => {
                    newColumnDiv.classList.add("drawnColumnDiv");
                })
                newRowDiv.appendChild(newColumnDiv);
        }
        }

    if (globalDeleteChecker > 0) {
        
    }
};

createGrid(gridDimensions);


// Array.apply(null, gridArray(gridLength));

// console.log(divArray);