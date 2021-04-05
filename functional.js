const plays = [['DB', [3,20], [3,19]], ['SB', [2,20], [3,20]], [[1, 18], [1, 10], [1, 12]], [[1,76], [1,150], [1,150]]]; //ganador b
// const plays = [['DB', [3,20], [3,19]], ['SB', [2,20], [3,20]], [[1, 18], [1, 10], [1, 12]]];
const players = ['a', 'b']

const createScores = (quantity) => new Array(quantity).fill(501) 

const sumStr = (elem) => (elem === 'DB')? 50: 25;

const whatToDo = (elem) => (typeof elem === 'string') ? sumStr(elem) : elem.reduce((x, y) => (x * y));

const initGame = (names) => {
    return names.map(name => Player(name));
}

const play = (score, array_play) => { 
    const x = Math.abs(array_play.map(element => whatToDo(element)).reduce((x, y) => (x + y)));
    return (score - x)
}

const new_scores = (i_player, scores, score_2) => {
    return scores.slice(0,i_player).concat([score_2]).concat(scores.slice(i_player+1))
}

const playGame = (players, plays, scores, i_players, i_plays) => {
    const i_players_2 = i_players + 1 === players.length ? 0 : i_players + 1;
    const i_plays_2 = i_plays + 1;
    const score_2 = play(scores[i_players], plays[i_plays]);
    const scores_2 = new_scores(i_players, scores, score_2);
    (score_2 == 0 || i_plays_2 == plays.length) ? endGame(players, scores_2) : playGame(players, plays, scores_2, i_players_2, i_plays_2);
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

const scores = createScores(players.length);
playGame(players, plays, scores, 0, 0)