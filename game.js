// Game functions

const {askQuestion} = require("./utils.js");


// Solicita el ingreso de los nombres de los jugadores por consola
const getPlayers = async () => {
    const players = await askQuestion("Ingrese nombres de jugadores separados por comas: ")
    return players.split(",")
}


// Determina el puntaje correspondiente para los casos especiales
const sumStr = (elem) => (elem === 'DB')? 50: 25;


// Determina el puntaje obtenido según los 3 lanzamientos realizados
const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));


// Solicita los lanzamientos de un jugador y calcula el puntaje
// actual según el resultado de los lanzamientos
const play = async (score, player) => {
    console.log("\nIngrese jugada de ", player) 
    const plays = JSON.parse(await askQuestion("-->: "));
    const points = plays.map(element => whatToDo(element)).reduce((x, y) => (x + y));
    return Math.abs(score - points)
}


// Retorna los puntajes iniciales seteados en 501
const createScores = (players) => new Array(players.length).fill(501)


// Retirna los puntajes actualizados segun el nuevo puntaje de un jugador
const calcScores = (scores) => {
    return (newScore) => {
        return (playerIndex) => scores.map( (score, i) => i === playerIndex ? newScore : score)
    }
}


// Imprime el estado final del juego
const logResults = (players) => {
    console.log("\nEl estado final del juego es:")
    return (scores) => players.forEach(
        (player, index) => console.log(`${player}: ${scores[index]}`)
)}

module.exports = {play, getPlayers, createScores, calcScores, logResults}