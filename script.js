
function createGrid (numberDivs) {
    let container = document.getElementById("container");
    for (i=0; i < numberDivs; i++) {
        let square = container.appendChild(document.createElement("div"));
    }
}

createGrid(24);