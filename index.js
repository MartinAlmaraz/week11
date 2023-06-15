// Sets variables to start the game
let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];

// For cells and to reset the button element
let cellElements = document.querySelectorAll("td");
let resetButton = document.getElementById("reset-button");


cellElements.forEach(function(cellElement, index) {
 cellElement.addEventListener("click", function() { // Adds event listener to the reset button 
    if (cells[index] === "") {
        cells[index] = currentPlayer;
        cellElement.textContent = currentPlayer;
        if (win()) {
          alert(currentPlayer + " wins! "); ///Alerts when someone wins
          resetGame();
        } else if (draw()) { /// put the tie function here before it was created
          alert("The Game is a Draw"); /// Alerts when the game is a draw
          resetGame();
        } else {
            currentPlayer = (currentPlayer === "X") ? "O" : "X"; // ternary operator goes back and forth for the X's and O's
        }
    }
 });
});

resetButton.addEventListener("click", resetGame);

// Checks to see which player has won
function win() {
    if ((cells[0] === currentPlayer && cells[1] === currentPlayer && cells[2] === currentPlayer) ||
        (cells[3] === currentPlayer && cells[4] === currentPlayer && cells[5] === currentPlayer) ||
        (cells[6] === currentPlayer && cells[7] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[0] === currentPlayer && cells[3] === currentPlayer && cells[6] === currentPlayer) ||
        (cells[1] === currentPlayer && cells[4] === currentPlayer && cells[7] === currentPlayer) ||
        (cells[2] === currentPlayer && cells[5] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[0] === currentPlayer && cells[4] === currentPlayer && cells[8] === currentPlayer) ||
        (cells[2] === currentPlayer && cells[4] === currentPlayer && cells[6] === currentPlayer)) {
        return true;
        }
        return false;
}

//function for checking if the game is a tie
function draw() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === "") {
            return false;
        }
    }
    return true;
}
 
/// resets the game
function resetGame() {
    currentPlayer = "X";
    cells = ["", "", "", "", "", "", "", "", ""];
    cellElements.forEach(function(cellElement) {
      cellElement.textContent = "";
    });
} 
