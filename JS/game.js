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
        checkBoard();
    }
}



