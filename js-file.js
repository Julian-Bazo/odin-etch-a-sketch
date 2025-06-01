// Initialize DOM elements

// Grid
const gridContainer = document.querySelector(".container");
gridContainer.classList.add("container");

// Customization button
const customizeGridButton = document.createElement('button');
customizeGridButton.textContent = "Click me to customize the grid";
customizeGridButton.classList.add("customizeButton");
gridContainer.appendChild(customizeGridButton);

// Add button on-click event listener
customizeGridButton.addEventListener("click", () => {
    let totalGrid = prompt("Choose new grid size", "");
    gridLength = totalGrid;
    gridHeight = totalGrid;
    createGrid(gridHeight, gridLength);
});

// Grid length and height starting variables
let gridLength = 16;
let gridHeight = 16;

// Loop to create grid

// This first loop creates the number of vertical rows
function createGrid(gridHeight, gridLength){
    for (i = 0; i < gridHeight; i++) {
        const newYDiv = document.createElement('div');
        newYDiv.classList.add(`yDiv`);
        gridContainer.appendChild(newYDiv);

    // This second loop creates the number of horizontal columns
        for (j = 0; j < gridLength; j++) { 
            const newXDiv = document.createElement("div");
            newXDiv.classList.add("drawDiv");
            newYDiv.appendChild(newXDiv);
    }
}
};

createGrid(gridHeight, gridLength);

// Array.apply(null, gridArray(gridLength));

// console.log(divArray);