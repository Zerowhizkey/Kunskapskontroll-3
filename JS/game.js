for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = () => {

        if (squares[i + 7].classList.contains("taken") && !squares[i].classList.contains("taken")) {
            if (currentPlayer == 1) {
                squares[i].classList.add("taken");
                squares[i].classList.add("player-one");
                currentPlayer = 2;
                displayCurrentPlayer.innerText = currentPlayer;
            } else if (currentPlayer == 2) {
                squares[i].classList.add("taken");
                squares[i].classList.add("player-two");
                currentPlayer = 1;
                displayCurrentPlayer.innerText = currentPlayer;
            }
        } else {

            alert("cant go here");

        }

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
                    break;

                }

                if (
                    square1.classList.contains("player-two") &&
                    square2.classList.contains("player-two") &&
                    square3.classList.contains("player-two") &&
                    square4.classList.contains("player-two")) {
                    result.innerText = "Player Two Wins!";
                    break;
                }
            }
        }
        checkBoard();
    }
}