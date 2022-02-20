let container = document.getElementById("container");
let cells = null;
let newBtn = document.querySelector('#new');
let clearBtn = document.querySelector("#clear");

function makeGrid(length) {
    container.style.setProperty('--grid-rows', length);
    container.style.setProperty('--grid-cols', length);
    for (i = 0; i < (length * length); i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', function () {
            function color() { return Math.floor(Math.random() * 255);}
            cell.style.backgroundColor = `rgb(${color()}, ${color()}, ${color()})`;
        })
        container.appendChild(cell).className = "grid-item";
    };
};

newBtn.addEventListener('click', function () {
    do {
        cells = prompt("Input Rows or Columns? (1 to 100): ", "16");
        if (cells == undefined) {
            break;
        }
    } while (isNaN(parseInt(cells)) || parseInt(cells) > 100);
    if (cells != undefined) {
        container.innerHTML = '';
        makeGrid(parseInt(cells));
    }
})

clearBtn.addEventListener('click', function() {
    container.innerHTML = '';
    if (cells == null) {
        makeGrid(16);
    } else {
        makeGrid(cells);
    }
})

if (cells == null) {
    makeGrid(16);
}