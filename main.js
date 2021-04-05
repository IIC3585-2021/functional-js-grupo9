// Main file

const {getPlayers, play, createScores, calcScores, logResults} = require("./game.js");


// Función recursiva que lleva el flujo del juego
const playGame = async (players, scores, playersIndex) => {
    const playersIndex2 = playersIndex + 1 === players.length ? 0 : playersIndex + 1;
    const newScore = await play(scores[playersIndex], players[playersIndex]);
    console.log(`${players[playersIndex]} queda con ${newScore}`)
    const newScores = calcScores(scores)(newScore)(playersIndex);
    (newScore == 0) ? endGame(players)(newScores) : await playGame(players, newScores, playersIndex2);
}


// Función que finaliza el juego
const endGame = (players) => {
    return (scores) => {
        const winner = players[scores.findIndex((elem) => elem === 0)];
        console.log(`\n${winner} queda con 0 puntos y es el ganador! Felicidades`)
        logResults(players)(scores)
    }
}


// Ejecución del juego
(async () => {
    const players = await getPlayers()
    const scores = createScores(players)
    await playGame(players, scores, 0);
})()