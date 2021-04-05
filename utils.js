// CLI Input function

const readline = require('readline');


// Función que solicita una entrada por consola
// https://stackoverflow.com/questions/18193953/waiting-for-user-to-enter-input-in-node-js/50890409
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


module.exports = {askQuestion}
