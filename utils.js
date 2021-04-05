const readline = require('readline');

const askQuestion = function(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

const getPlayers = async () => {
    const players = await askQuestion("Ingrese nombres de jugadores separados por comas: ")
    return players.split(",")
}

module.exports = {askQuestion, getPlayers}
