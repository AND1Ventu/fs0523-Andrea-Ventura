const numCells = 76;
const numMainBoardRows = 4;
const numMainBoardColumns = 19;
const numPlayerRows = 4;
const numPlayerColumns = 6;
const numPlayerCells = numPlayerRows * numPlayerColumns;
let drawnNumbers = [];
let playerCards = [];
let numPlayerCards = 1;

function generateRandomNumber() {
    return Math.floor(Math.random() * numCells) + 1;
}

function createMainBoard() {
    const mainBoard = document.getElementById("mainBoard");
    for (let i = 1; i <= numMainBoardRows; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 1; j <= numMainBoardColumns; j++) {
            const cell = document.createElement("div");
            const number = (i - 1) * numMainBoardColumns + j;
            cell.textContent = number;
            cell.className = "card";
            row.appendChild(cell);
        }
        mainBoard.appendChild(row);
    }
}

function createPlayerCards() {
    const playerBoards = document.getElementById("playerBoards");
    for (let i = 1; i <= numPlayerCards; i++) {
        const playerCard = [];
        const cardDiv = document.createElement("div");
        cardDiv.className = "playerCard";
        for (let row = 1; row <= numPlayerRows; row++) {
            const rowDiv = document.createElement("div");
            rowDiv.className = "row";
            for (let col = 1; col <= numPlayerColumns; col++) {
                const number = generateRandomNumber();
                const cell = document.createElement("div");
                cell.textContent = number;
                cell.className = "card";
                playerCard.push(number);
                rowDiv.appendChild(cell);
            }
            cardDiv.appendChild(rowDiv);
        }
        playerCard.sort((a, b) => a - b);
        playerCards.push(playerCard);
        playerBoards.appendChild(cardDiv);
    }
}

function updatePlayerCards() {
    playerCards.forEach((card, index) => {
        card.forEach((number) => {
            const playerCardDivs = document.querySelectorAll(".playerCard");
            playerCardDivs[index].querySelectorAll(".card").forEach((cell) => {
                if (drawnNumbers.includes(Number(cell.textContent))) {
                    cell.classList.add("selected");
                }
            });
        });
    });
}

document.getElementById("startGame").addEventListener("click", () => {
    numPlayerCards = parseInt(document.getElementById("numCards").value);
    createMainBoard();
    createPlayerCards();
    document.getElementById("options").style.display = "none";
    document.getElementById("game").style.display = "block";
});

document.getElementById("drawNumber").addEventListener("click", () => {
    if (drawnNumbers.length >= numCells) {
        alert("Hai estratto tutti i numeri!");
        return;
    }

    let number;
    do {
        number = generateRandomNumber();
    } while (drawnNumbers.includes(number));

    drawnNumbers.push(number);
    updatePlayerCards();
    updateMainBoard();
    updateDrawnNumbersList();
});

function updateDrawnNumbersList() {
    const drawnNumbersList = document.querySelector("#drawnNumbers ul");
    const li = document.createElement("li");
    li.textContent = drawnNumbers[drawnNumbers.length - 1];
    drawnNumbersList.appendChild(li);
}

function updateMainBoard() {
    const mainBoardCells = document.getElementById("mainBoard").querySelectorAll(".card");
    mainBoardCells.forEach((cell) => {
        if (drawnNumbers.includes(Number(cell.textContent))) {
            cell.classList.add("selected");
        }
    });
}

