let gameNameValid = false;
const p1h1 = document.querySelector("#player1H1")
const p2h1 = document.querySelector("#player2H1")


window.addEventListener("load", function () {
    while (!gameNameValid) {
            getPlayerNames()
    }
})

const restartBtn = document.querySelector("#restartBtn")
let numOfRound = document.querySelector("#gamesNumSelect")
let numOfRounds = 0;

const playerOne = {
    playerName: "",
    score: 0,
    button: document.querySelector("#player1Btn"),
    h1Display: document.querySelector("#player1H1")



}

const playerTwo = {
    playerName: "",
    score: 0,
    button: document.querySelector("#player2Btn"),
    h1Display: document.querySelector("#player2H1"),

}


function updateScores(player, opponent) {
    player.score += 1;

    if (player.score === numOfRounds) {

        player.button.disabled = true;
        opponent.button.disabled = true;
        player.h1Display.classList.add("has-text-success")
        opponent.h1Display.classList.add("has-text-danger")
    }
    player.h1Display.innerText = `${player.playerName} ${player.score}`;
}

function resetGame() {
    playerOne.button.disabled = false;
    playerTwo.button.disabled = false;

    playerOne.score = 0;
    playerTwo.score = 0;

    playerOne.h1Display.textContent = `${playerOne.playerName} ${playerOne.score}`;

    player2H1.textContent = `${playerTwo.playerName} ${playerTwo.score}`;

    playerOne.h1Display.classList.remove("has-text-danger", "has-text-success");
    playerTwo.h1Display.classList.remove("has-text-danger", "has-text-success");
    getPlayerNames()


}

function getPlayerNames() {
    playerOne.playerName = prompt("Insert player one name:")
    playerTwo.playerName = prompt("Insert player two name:")

    if (playerOne.playerName === "" || playerOne.playerName === "null" || playerTwo.playerName === "" || playerTwo.playerName === null) {
        alert("Check you input!")
        playerOne.playerName = prompt("Insert player one name:")
        playerTwo.playerName = prompt("Insert player two name:")

    } else {
        p1h1.innerText= playerOne.playerName
        p2h1.innerText= playerTwo.playerName
        gameNameValid = true;
    }
}



numOfRound.addEventListener("change", function () {
    numOfRounds = parseInt(this.value)

})

playerOne.button.addEventListener("click", () => {
    updateScores(playerOne, playerTwo);
})

playerTwo.button.addEventListener("click", () => {
    updateScores(playerTwo, playerOne);
})

restartBtn.addEventListener("click", () => {
    resetGame()
})