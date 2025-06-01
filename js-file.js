// Initialize grid container
const gridContainer = document.querySelector(".container");

let gridLength = 16;
let gridHeight = 1;

for (i = 0; i < gridHeight; i++) {
    const newYDiv = document.createElement('div');
    newYDiv.classList.add(`yDiv`);
    gridContainer.appendChild(newYDiv);
    for (i = 0; i < gridLength; i++) { 
        const newXDiv = document.createElement("div");
        newXDiv.classList.add("drawDiv");
        newXDiv.textContent = `Div ${i +1}`;
        newYDiv.appendChild(newXDiv);
    }
}

// Array.apply(null, gridArray(gridLength));

// console.log(divArray);