const {getPlayers, play, createScores, calcScores} = require("./game.js");


const playGame = async (players, scores, playersIndex) => {
    const playersIndex2 = playersIndex + 1 === players.length ? 0 : playersIndex + 1;
    const newScore = await play(scores[playersIndex], players[playersIndex]);
    console.log(`${players[playersIndex]} queda con ${newScore}`)
    const newScores = calcScores(scores, newScore)(playersIndex);
    (newScore == 0) ? endGame(players, newScores) : await playGame(players, newScores, playersIndex2);
}

const logResults = (players, scores, i) => {
    console.log(players[i], scores[i])
    players.length == i + 1 ? {} : logResults(players, scores, i + 1);
}

const endGame = (players, scores) => {
    const winner = players[scores.findIndex((elem) => elem === 0)];
    console.log(`${winner} queda con 0 puntos y es el ganador! Felicidades`)
    logResults(players, scores, 0)
}


(async () => {
    const players = await getPlayers()
    const scores = createScores(players)
    await playGame(players, scores, 0);
})()