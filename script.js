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
            square.style.flexGrow = "1";
            square.style.height = "100%";
        }
    }
}

const slider = document.getElementById("sizeSlider");
const container = document.getElementById("container");

slider.addEventListener("click", () => {
    let container = document.getElementById("container");
    container.style.backgroundColor = "white";
    container.replaceChildren();
    let sliderValue = slider.value;
    createGrid(sliderValue);
})

container.addEventListener("mouseover", (event) => {
    let itemHovered = event.target;
    itemHovered.style.backgroundColor = "black";
})