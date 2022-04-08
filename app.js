import readline from "readline";
import { convertArea } from "./lib/index.js";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite 1 para descobrir o raio da área de um círculo\nDigite 2 para descobrir o raio de um quadrado\n\nEscolha: ', (operation) => {
    if(operation == "1"){
        rl.question('\nDigite o raio do círulo para descobrir a área: ', (raioCircle) => {
            console.log("\nA área do cículo é " + convertArea.circleArea(Number(raioCircle)).toFixed(2))
            rl.close()
        })
    } else if (operation == "2") {
        rl.question('\nDigite o lado do quadrado para descobrir a área: ', (ladoSquare) => {
            console.log("\nA área do quadrado é " + convertArea.squareArea(Number(ladoSquare)).toFixed(2))
            rl.close()
        })
    } else {
        console.error("\noperação incorreta...")
        rl.close()
    }
})
