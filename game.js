const {askQuestion} = require("./utils.js");

const getPlayers = async () => {
    const players = await askQuestion("Ingrese nombres de jugadores separados por comas: ")
    return players.split(",")
}

const sumStr = (elem) => (elem === 'DB')? 50: 25;

const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const play = async (score, player) => {
    console.log("Ingrese jugada de ", player) 
    const plays = await askQuestion("-->: ");
    const parsedPlays = JSON.parse(plays)
    const points = parsedPlays.map(element => whatToDo(element)).reduce((x, y) => (x + y));
    return Math.abs(score - points)
}

const createScores = (players) => new Array(players.length).fill(501)

const calcScores = (scores, newScore) => {
    return (playerIndex) => scores.map( (score, i) => i === playerIndex ? newScore : score)
}

module.exports = {play, getPlayers, createScores, calcScores}