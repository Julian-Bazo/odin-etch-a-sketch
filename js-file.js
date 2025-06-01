// Initialize grid container
const gridContainer = document.querySelector(".container");

let gridLength = 16;
let gridHeight = 16;

for (i = 0; i < gridHeight; i++) {
    const newYDiv = document.createElement('div');
    newYDiv.classList.add(`yDiv`);
    gridContainer.appendChild(newYDiv);
    for (j = 0; j < gridLength; j++) { 
        const newXDiv = document.createElement("div");
        newXDiv.classList.add("drawDiv");
        newXDiv.textContent = `Div ${j +1}`;
        newYDiv.appendChild(newXDiv);
    }
}

// Array.apply(null, gridArray(gridLength));

// console.log(divArray);