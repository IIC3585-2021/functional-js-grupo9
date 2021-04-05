// const plays = [['DB', [3,20], [3,19]], ['SB', [2,20], [3,20]], [[1, 18], [1, 10], [1, 12]], [[1,76], [1,150], [1,150]]]; //ganador b
// const plays = [['DB', [3,20], [3,19]], ['SB', [2,20], [3,20]], [[1, 18], [1, 10], [1, 12]]];
// const players = ['a', 'b']

const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const createScores = (players) => new Array(players.length).fill(501) 

const sumStr = (elem) => (elem === 'DB')? 50: 25;

const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));


const play = async (score, player) => {
    console.log("Ingrese jugada de ", player) 
    let jugadas = await askQuestion("-->: ");
    console.log(jugadas)
    jugadas = JSON.parse(jugadas)
    const x = jugadas.map(element => whatToDo(element)).reduce((x, y) => (x + y));
    return Math.abs(score - x)
}

const new_scores = (i_player, scores, score_2) => {
    return scores.slice(0,i_player).concat([score_2]).concat(scores.slice(i_player+1))
}

const playGame = async (players, scores, i_players, i_plays) => {
    const i_players_2 = i_players + 1 === players.length ? 0 : i_players + 1;
    const i_plays_2 = i_plays + 1;
    const score_2 = await play(scores[i_players], players[i_players]);
    console.log(score_2)
    const scores_2 = new_scores(i_players, scores, score_2);
    (score_2 == 0) ? endGame(players, scores_2) : await playGame(players, scores_2, i_players_2, i_plays_2);
}

const logResults = (players, scores, i) => {
    console.log(players[i], scores[i])
    players.length == i + 1 ? {} : logResults(players, scores, i + 1);
}

const endGame = (players, scores) => {
    const winner = scores.findIndex((elem) => elem === 0);
    const why = winner === -1 ? 'no hay más jugadas' : 'el ganador es '.concat(players[winner])
    console.log('Juego terminado porque', why)
    logResults(players, scores, 0)
}

const getPlayers = async () => {
    const players = await askQuestion("Ingrese nombres de jugadores separados por comas: ")
    return players.split(",")
}


(async () => {
    const players = await getPlayers()
    const scores = createScores(players)
    await playGame(players, scores, 0, 0);
})()