const slider = document.getElementById("sizeSlider");
const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const randomButton = document.getElementById("randomColor");
const rainbowButton = document.getElementById("rainbowColor");
const regularModeButton = document.getElementById("regularMode");

let hoverColor = "black";
let rainbowMode = false;

function createGrid (numberDivs) {
    let container = document.getElementById("container");

    for (i=0; i < numberDivs; i++) {
        let row = container.appendChild(document.createElement("div"));
        row.setAttribute("class", "row");
        row.style.display = "flex";
        row.style.flexGrow = 1;
        
        for (j=0; j < numberDivs; j++) {
            let square = row.appendChild(document.createElement("div"));
            square.setAttribute("class", "square");
            square.style.backgroundColor = "white";
            square.style.flexGrow = "1";
            square.style.height = "100%";
            square.style.opacity = 0.1;
        }
    }
}

function pickRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    hoverColor = `rgb(${r}, ${g}, ${b})`;
}

window.addEventListener("load", () => {
    slider.value = 10;
    createGrid(slider.value);
})

slider.addEventListener("click", () => {
    container.replaceChildren();
    createGrid(slider.value);
})

randomButton.addEventListener("click", pickRandomColor);

rainbowButton.addEventListener("click", () => {
    rainbowMode = true;
})

regularModeButton.addEventListener("click", () => {
    rainbowMode = false;
    hoverColor = "black";
})

container.addEventListener("mouseover", (event) => {
    let itemHovered = event.target;
    if (rainbowMode == true) {
        if (itemHovered.style.backgroundColor == "white") {
            pickRandomColor()
            itemHovered.style.backgroundColor = hoverColor;
        }
        else {
            let opca = itemHovered.style.opacity;
            itemHovered.style.opacity = Number(opca) + 0.1;
        }
    }
    else if (rainbowMode == false) {
        if (itemHovered.style.backgroundColor == "white") {
            itemHovered.style.backgroundColor = hoverColor;
        }
        else { 
            let opca = itemHovered.style.opacity;
            itemHovered.style.opacity = Number(opca) + 0.1;
        }
    }
})

resetButton.addEventListener("click", () => {
    container.replaceChildren();
    createGrid(slider.value);
})