const sumStr = (elem) => (elem === 'DB')? 50: 25;
const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const jugadas = [['DB', [3,20], [3,19]], ['SB', [2,20], [3,20]], [[1, 18], [1, 10], [1, 12]]];
const names = ['a', 'b']

const initGame = (names, jugadas) => {
    return names.map(name => play(inputJugada));
}

const ingresarJugada = (nombre, score, jugada) => {

}

const inputJugada = (nombre) => {
    console.log("Ingrese lanzamientos de ", nombre);
}

const play = (array_person) => { 
    var x = array_person.map(element => whatToDo(element));
    score -= x.reduce((x, y) => (x + y));
    score = Math.abs(score);
    console.log(score)
}

const playGame = (names, scores, jugadas, index) => {
    const currentIndex = index + 1 === players.length ? 0 : index + 1;
    var jugada = plays.shift() // aca deberia ir el input de la jugada, esta hardcoded
    players[curr].play(jugada) == 0 ? endGame() : playGame(names, scores, jugadas, currentIndex);
}

