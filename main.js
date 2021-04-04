const sumStr = (elem) => (elem === 'DB')? 50: 25;
const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const Player = (name) => {
    let score = 501;
    return {
      play (array) { 
          var x = array.map(element => whatToDo(element));
          score -= x.reduce((x, y) => (x + y));
          score = Math.abs(score);
          console.log(name, score)
      },
      getName(){
          return name;
      },
      getScore(){
          return score;
      }
    }
 }

const initGame = (names) => {
    return names.map(name => Player(name));
}

const game = (...names) => {
    let plays = [['DB', [3,20], [3,19]], ['SB', [2,20], [3,20]], [[1, 18], [1, 10], [1, 12]]];
    console.log(names)
    var players = initGame(names);
    var currentPlayer = 0;
    return {
        playGame() {
            var curr = currentPlayer;
            currentPlayer = currentPlayer + 1 === players.length ? 0 : currentPlayer + 1;
            var jugada = plays.shift() // aca deberia ir el input de la jugada, esta hardcoded
            players[curr].play(jugada) == 0?endGame():this.playGame();
        },
        endGame() {
            console.log('terminado')
        }
    }
}

// const p1 = Player('p1')
// p1.play(['SB', [2,20], [3,20]])
// console.log(p1.getName())
// console.log(p1.getScore())

const g = game('a','b')
g.playGame()
// const noFinish = (players) => (players.some((player) => player.getScore() === 0))?'juego termiando': noFinish; 

// const didWin = (player) => player.getScore() === 0 ? true : false
// const didFinish = (players) => players.reduce(player => didWin(player) && true );
// const play = (game, movements) => didFinish(game.getPlayers()) ? true : game.getPlayers().map(player => player.play)