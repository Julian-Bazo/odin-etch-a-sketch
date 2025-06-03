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
    let gridSize = prompt("Choose new grid size between 16 and 100!", "");
    // Grid minimum and maximum size parameter checker
    if (gridSize < 16 || gridSize > 100) {
        alert("It must be between 16 and 100!")
    }
    // If parameters are good, previous grid is removed and replaced with a grid of the new user-set dimensions
    else {
    gridDimensions = gridSize;
    gridDiv.removeChild(gridDiv.firstChild);
    recreateGrid(gridDimensions);
    }
});

// Grid length and height starting variables
let gridDimensions = 16;

// Initialize grid on website open
const tempGrid = document.createElement('div');
    tempGrid.classList.add("tempGrid");
    gridDiv.appendChild(tempGrid);

// Loop to create grid

// This first loop creates the number of vertical rows
for (i = 0; i < 16; i++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add("rowDiv");
        tempGrid.appendChild(newRowDiv);

    // This second loop creates the number of horizontal columns
        for (j = 0; j < 16; j++) { 
            const newColumnDiv = document.createElement("div");
            newColumnDiv.classList.add("columnDiv");
            newColumnDiv.innerHTML = "&nbsp";
            newColumnDiv.addEventListener("mouseenter", () => {
                newColumnDiv.classList.add("drawnColumnDiv");
            })
            newRowDiv.appendChild(newColumnDiv);
    }
    }

// Function for recreation 
function recreateGrid(gridDimensions){

    let tempGrid = document.createElement('div');
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
};