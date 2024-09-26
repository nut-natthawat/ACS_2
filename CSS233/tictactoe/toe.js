const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = ''; // ผู้เล่นปัจจุบัน
let gameActive = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Event listeners
resetButton.addEventListener('click', resetGame);
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

function startGame() {
    // สุ่มผู้เล่นเริ่มต้น
    currentPlayer = Math.random() < 0.5 ? 'X' : 'O';
    message.textContent = `${currentPlayer}'s turn`;

    if (currentPlayer === 'O') {
        setTimeout(computerPlay, 500); // ถ้าคอมพิวเตอร์เริ่มก่อน
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !gameActive || currentPlayer !== 'X') {
        return;
    }

    board[index] = 'X';
    cell.textContent = 'X';

    checkWinner();
    if (gameActive) {
        switchPlayer();
        if (currentPlayer === 'O') {
            setTimeout(computerPlay, 500); // ให้คอมพิวเตอร์เล่น
        }
    }
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.textContent = `${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        message.textContent = "It's a draw!";
        gameActive = false;
        return;
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `${currentPlayer}'s turn`;
}

function computerPlay() {
    let availableCells = [];
    board.forEach((cell, index) => {
        if (cell === '') {
            availableCells.push(index);
        }
    });

    const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    board[randomIndex] = 'O';

    const cellElement = document.querySelector(`.cell[data-index="${randomIndex}"]`);
    cellElement.textContent = 'O';

    checkWinner();
    if (gameActive) {
        switchPlayer();
    }
}

function resetGame() {
    board.fill('');
    cells.forEach(cell => (cell.textContent = ''));
    gameActive = true;
    message.textContent = `Game reset.`;

    // เริ่มเกมใหม่
    startGame();
}

// เริ่มเกมเมื่อโหลดหน้า
startGame();
