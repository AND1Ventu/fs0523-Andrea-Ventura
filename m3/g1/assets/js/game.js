document.getElementById('gameForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var player1Guess = parseInt(document.getElementById('player1').value);
    var player2Guess = parseInt(document.getElementById('player2').value);
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var result = "Numero casuale generato = ".concat(randomNumber, "\n");
    if (randomNumber === player1Guess && randomNumber === player2Guess) {
        result += "Entrambi i giocatori hanno azzeccato il numero!";
    }
    else if (randomNumber === player1Guess) {
        result += "Il giocatore 1 ha azzeccato il numero!";
    }
    else if (randomNumber === player2Guess) {
        result += "Il giocatore 2 ha azzeccato il numero!";
    }
    else {
        var closest = Math.abs(randomNumber - player1Guess) < Math.abs(randomNumber - player2Guess) ? '1' : '2';
        result += "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore ".concat(closest, " si \u00E8 avvicinato di pi\u00F9!");
    }
    document.getElementById('result').textContent = result;
});
