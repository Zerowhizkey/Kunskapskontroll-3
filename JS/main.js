const soloPlayer = document.getElementById("solo");
const duoPlayer = document.getElementById("duo");
const section = document.querySelector("section");

document.addEventListener("click", (event) => {
    if (event.target === soloPlayer) {
        let soloPlayerName = document.createElement("input");
        soloPlayerName.placeholder = "Enter your name";
        section.append(soloPlayerName);
        document.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const nameInput = soloPlayerName.value;
                const choosenName = document.createElement("p");
                choosenName.textContent = `Player: ${nameInput}`;
                section.append(choosenName);
            }
        });


    } else if (event.target === duoPlayer) {
        let nameOne = document.createElement("input");
        let nameTwo = document.createElement("input");
        nameOne.placeholder = "Player 1 name: ";
        nameTwo.placeholder = "Player 2 name: ";
        section.append(nameOne, nameTwo);
        if (displayNameOne = true) {
            document.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const nameHolderOne = nameOne.value;
                    const displayNameOne = document.createElement("p");
                    displayNameOne.textContent = `Player 1: ${nameHolderOne}`;
                    section.append(displayNameOne);
                }
            });
        }
        if (displayNameTwo = true) {
            document.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const nameHolderTwo = nameTwo.value;
                    const displayNameTwo = document.createElement("p");
                    displayNameTwo.textContent = `Player 2: ${nameHolderTwo}`;
                    section.append(displayNameTwo);
                }
            });
        }
    }
});
