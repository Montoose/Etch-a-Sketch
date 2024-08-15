let container = document.getElementById("container");

function createGrid (numberDivs) {

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

createGrid(30);