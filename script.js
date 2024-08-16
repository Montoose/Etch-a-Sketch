const slider = document.getElementById("sizeSlider");
const container = document.getElementById("container");
const resetButton = document.getElementById("resetButton");
const randomButton = document.getElementById("randomColor");

let hoverColor = "black";

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

window.addEventListener("load", () => {
    slider.value = 10;
    createGrid(slider.value);
})

slider.addEventListener("click", () => {
    container.replaceChildren();
    createGrid(slider.value);
})

randomButton.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    hoverColor = `rgb(${r}, ${g}, ${b})`;
    

})

container.addEventListener("mouseover", (event) => {
    let itemHovered = event.target;
    itemHovered.style.backgroundColor = hoverColor;
})

resetButton.addEventListener("click", () => {
    container.replaceChildren();
    createGrid(slider.value);
})