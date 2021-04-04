const sumStr = (elem) => (elem === 'DB')? 50: 25;
const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const initGame = (names) => {
    return names.map(name => Player(name));
}

const play = (array_person) => { 
    var x = array_person.map(element => whatToDo(element));
    score -= x.reduce((x, y) => (x + y));
    score = Math.abs(score);
    console.log(score)
}

const playGame = () => {
    var curr = currentPlayer;
    currentPlayer = currentPlayer + 1 === players.length ? 0 : currentPlayer + 1;
    var jugada = plays.shift() // aca deberia ir el input de la jugada, esta hardcoded
    players[curr].play(jugada) == 0?endGame():this.playGame();
}

