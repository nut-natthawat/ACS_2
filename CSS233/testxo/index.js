const cells = document.querySelectorAll(".cell");
const statustext = document.querySelector("#statustext");
const resetbtn = document.querySelector("#resetbtn");

const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let option = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

initializegame();

function initializegame(){
    cells.forEach(cell => cell.addEventListener("click", cellclick));
    resetbtn.addEventListener("click", reset);
    statustext.textContent = `${currentPlayer}'s turn`;
    running = true;
}

function cellclick(){
    const cellindex = this.getAttribute("cellindex");
    if(option[cellindex] != "" || !running || currentPlayer !== "X"){
        return;
    }
    update(this, cellindex);
    checkWinner();
    if(running){
        setTimeout(computerMove, 500);
    }
}

function update(cell, index){
    option[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changeplayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statustext.textContent = `${currentPlayer}'s turn`;
}

function checkWinner(){
    let roundWon = false;
    for(let i = 0 ;i < patterns.length ; i++){
        const condition = patterns[i];
        const cella = option[condition[0]];
        const cellb = option[condition[1]];
        const cellc = option[condition[2]];
        if(cella == "" || cellb == "" || cellc == ""){
            continue;
        }
        if(cella == cellb && cellb == cellc){
            roundWon = true;
            break;
        }
    }
    if(roundWon){
        statustext.textContent = `${currentPlayer} Wins!`;
        running = false;
    }
    else if(!option.includes("")){
        statustext.textContent = 'Draw!';
        running = false;
    }
    else{
        changeplayer();
    }
}

function computerMove(){
    if (currentPlayer === "O") {
        let emptyCells = [];
        option.forEach((cell, index) => {
            if (cell === "") {
                emptyCells.push(index);
            }
        });
        if (emptyCells.length > 0) {
            const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            const cell = document.querySelector(`[cellindex="${randomIndex}"]`);
            update(cell, randomIndex);
            checkWinner();
        }
    }
}

function reset(){
    currentPlayer = "X";
    option = ["","","","","","","","",""];
    statustext.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
