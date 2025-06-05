// Initialize DOM elements

// Starting div to hold button and grid div
const totalContainer = document.querySelector(".totalContainer");
totalContainer.classList.add("totalContainer");

// Website header initialization
const websiteHeader = document.createElement("h1");
websiteHeader.textContent = "Etch-A-Sketch";
totalContainer.appendChild(websiteHeader);

// Customization button
const customizeGridButton = document.createElement('button');
customizeGridButton.textContent = "Change grid dimensions";
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

// Loop to create initial grid

// This first loop creates the number of vertical rows
for (i = 0; i < 16; i++) {
        const newRowDiv = document.createElement('div');
        newRowDiv.classList.add("rowDiv");
        tempGrid.appendChild(newRowDiv);

    // This second loop creates the number of horizontal columns
        for (j = 0; j < 16; j++) { 
            const newColumnDiv = document.createElement("div");
            newColumnDiv.classList.add("columnDiv");
            let finalOpacity = .1;
            newColumnDiv.id = `i${i}j${j}`;
            newColumnDiv.innerHTML = "&nbsp";
            newColumnDiv.addEventListener("mouseenter", () => {
                    if (randomCounter % 2 !== 0) {
                        newColumnDiv.style.backgroundColor = getColor();
                        newColumnDiv.style.opacity = finalOpacity;
                        finalOpacity = finalOpacity + .1;
                    }
                    if (randomCounter % 2 === 0){
                    newColumnDiv.style.backgroundColor = "black";
                    }
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
                let finalOpacity = .1;
                newColumnDiv.classList.add("columnDiv");
                newColumnDiv.innerHTML = "&nbsp";
                newColumnDiv.id = `i${i}j${j}`;
                newColumnDiv.addEventListener("mouseenter", () => {
                    if (randomCounter % 2 !== 0) {
                        newColumnDiv.style.backgroundColor = getColor();
                        newColumnDiv.style.opacity = finalOpacity;
                        finalOpacity = finalOpacity + .1;
                    }
                    if (randomCounter % 2 === 0){
                    newColumnDiv.style.backgroundColor = "black";
                    }
                })
                newRowDiv.appendChild(newColumnDiv);
        }
        }
};

// Checkbox initialization
const randomColorCheckbox = document.createElement("input");
randomColorCheckbox.type = "checkbox";
randomColorCheckbox.classList.add("checkbox");
totalContainer.appendChild(randomColorCheckbox);

// Checkbox label initialization
const randomColorCheckboxLabel = document.createElement("p");
randomColorCheckboxLabel.textContent = "Click to randomize colors!";
randomColorCheckboxLabel.classList.add("checkboxLabel");
totalContainer.appendChild(randomColorCheckboxLabel);

// Checkbox event handler
let randomCounter = 2;

randomColorCheckbox.addEventListener("click", () => {
    randomCounter++
    gridDiv.removeChild(gridDiv.firstChild);
    recreateGrid(gridDimensions);
    // let divEraser = document.querySelectorAll(".columnDiv");
    
    // Array.from(divEraser).forEach(element => {
    //     element.style.backgroundColor = "rgb(238, 238, 238)";
    //     element.style.opacity = 1;
    //     finalOpacity = .1;
    // })
});


// Function to create a random color
function getColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}