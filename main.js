const sumStr = (elem) => (elem === 'DB')? 50: 25;
const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const Player = (name) => {
    let score = 501;
    return {
      play (array) { 
          let x = array.map(element => whatToDo(element));
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
    let players = initGame(names);
    let currentPlayer = 0;
    return {
        playGame() {
            let curr = currentPlayer;
            currentPlayer = currentPlayer + 1 === players.length ? 0 : currentPlayer + 1;
            let play = plays.shift();
            let jugada = play === undefined?'return':play;
            if (jugada === 'return') {
                return
            }
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