import { exit } from 'node:process';
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

function calculate(potentialTotal){

    const structureType = "Laje"
    const potential = 550;// watts
    const dimensions = {length: 1.95, width: 1.1}

    const totalPotentialWatts = potentialTotal * 1000;// convertendo
    const amountPlates = Math.round(totalPotentialWatts / potential);
    const inverters = Math.round(amountPlates/4);// 1 inversor par 4 placas
    const lengthOfStructure = amountPlates * dimensions.length
    const usefulArea = amountPlates * (dimensions.length * dimensions.width)

    return{
        amountPlates,
        inverters,
        potential,
        lengthOfStructure,
        usefulArea, 
        structureType
    }

}

rl.question("Qual a potencia total? ", (potentialTotal) =>{

    const result = calculate(potentialTotal)

    console.log("\nEstrutura usada: "+ result.structureType);
    console.log("Quantidade de painéis: " + result.amountPlates);
    console.log("Quantidade de inversores: " + result.inverters);
    console.log("Potência do painel utilizado: " + result.potential + "W");
    console.log("Comprimento de estrutura necessário: " + result.lengthOfStructure + "m");
    console.log("Área útil necessária: " + result.usefulArea + "m²");
    exit()
})






