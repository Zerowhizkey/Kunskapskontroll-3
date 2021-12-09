function checkBoard() {
    for (let i = 0; i < winningArrays.length; i++) {
        const square1 = squares[winningArrays[i][0]];
        const square2 = squares[winningArrays[i][1]];
        const square3 = squares[winningArrays[i][2]];
        const square4 = squares[winningArrays[i][3]];

        if (
            square1.classList.contains("player-one") &&
            square2.classList.contains("player-one") &&
            square3.classList.contains("player-one") &&
            square4.classList.contains("player-one")) {
            result.innerText = "Player One Wins!";
            deleteGrid.classList.remove("grid");
        }

        if (
            square1.classList.contains("player-two") &&
            square2.classList.contains("player-two") &&
            square3.classList.contains("player-two") &&
            square4.classList.contains("player-two")) {
            result.innerText = "Player Two Wins!";
            deleteGrid.classList.remove("grid");
        }
    }
}