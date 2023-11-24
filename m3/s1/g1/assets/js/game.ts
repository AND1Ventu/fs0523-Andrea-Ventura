document.getElementById('gameForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const player1Guess = parseInt((document.getElementById('player1') as HTMLInputElement).value);
    const player2Guess = parseInt((document.getElementById('player2') as HTMLInputElement).value);
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    let result: string = `Numero casuale generato = ${randomNumber}\n`;

    if (randomNumber === player1Guess && randomNumber === player2Guess) {
        result += "Entrambi i giocatori hanno azzeccato il numero!";
    } else if (randomNumber === player1Guess) {
        result += "Il giocatore 1 ha azzeccato il numero!";
    } else if (randomNumber === player2Guess) {
        result += "Il giocatore 2 ha azzeccato il numero!";
    } else {
        const closest = Math.abs(randomNumber - player1Guess) < Math.abs(randomNumber - player2Guess) ? '1' : '2';
        result += `Nessuno dei due ha azzeccato il numero casuale, ma il giocatore ${closest} si è avvicinato di più!`;
    }

    document.getElementById('result').textContent = result;
});
