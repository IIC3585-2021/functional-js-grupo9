// Game functions

const {askQuestion} = require("./utils.js");

const getPlayers = async () => {
    const players = await askQuestion("Ingrese nombres de jugadores separados por comas: ")
    return players.split(",")
}

const sumStr = (elem) => (elem === 'DB')? 50: 25;

const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const play = async (score, player) => {
    console.log("\nIngrese jugada de ", player) 
    const plays = JSON.parse(await askQuestion("-->: "));
    const points = plays.map(element => whatToDo(element)).reduce((x, y) => (x + y));
    return Math.abs(score - points)
}

const createScores = (players) => new Array(players.length).fill(501)

const calcScores = (scores) => {
    return (newScore) => {
        return (playerIndex) => scores.map( (score, i) => i === playerIndex ? newScore : score)
    }
}

const logResults = (players) => {
    console.log("\nEl estado final del juego es:")
    return (scores) => players.forEach(
        (player, index) => console.log(`${player}: ${scores[index]}`)
)}

module.exports = {play, getPlayers, createScores, calcScores, logResults}