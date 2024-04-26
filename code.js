let currentPlayer = 'X';
let scoreX = 0;
let scoreO = 0;
let cells = Array.from(document.getElementsByClassName("cell"));
function handleClick(index) {
    if (!cells[index].textContent) {
        cells[index].textContent = currentPlayer;
        if (checkWinner()) {
            alert('Player ' + currentPlayer + ' Wins!');
            updateScore();
            resetGame();
        } else if (cells.every(cell => cell.textContent !== '')) {
            alert("You Tied!");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O': 'X';
        }
    }
}
function checkWinner() {
    const winPatterns = [
        // Rows
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        // Columns
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        // Diagonals
        [0, 4, 8], [2, 4, 6]
        ];
        return winPatterns.some(pattern => {
            const [a, b, c] = pattern;
            return cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent;
        });
}
function resetGame() {
    cells.forEach(cell => {
        cell.textContent = "";
    });
    currentPlayer = 'X';
}
function updateScore() {
    if (currentPlayer === 'X') {
        scoreX = scoreX + 1;
    } else {
        scoreO = scoreO + 1;
    }
}
document.getElementById("scoreX").innerHTML = scoreX;
document.getElementById("scoreO").innerHTML = scoreO;