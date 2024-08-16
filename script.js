

let createGrid = function (numberDivs) {
    let container = document.getElementById("container");

    for (i=0; i < numberDivs; i++) {
        let row = container.appendChild(document.createElement("div"));
        row.setAttribute("class", "row");
        row.style.display = "flex";
        row.style.flexGrow = 1;
        
        for (j=0; j < numberDivs; j++) {
            let square = row.appendChild(document.createElement("div"));
            square.setAttribute("class", "square");
            square.style.flexGrow = "1";
            square.style.height = "100%";
        }
    }
}

const slider = document.getElementById("sizeSlider");
const container = document.getElementById("container");
const button = document.getElementById("resetButton");

window.addEventListener("load", () => {
    slider.value = 3;
    createGrid(slider.value);
})

slider.addEventListener("click", () => {
    container.style.backgroundColor = "white";
    container.replaceChildren();
    createGrid(slider.value);
})

container.addEventListener("mouseover", (event) => {
    let itemHovered = event.target;
    itemHovered.style.backgroundColor = "black";
})

button.addEventListener("click", () => {
    container.replaceChildren();
    createGrid(slider.value);
})