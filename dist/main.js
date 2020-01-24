"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
const yargs = require("yargs");
console.log('n-fatorial');
const argv = yargs.demandOption('num').argv;
const num = argv.num; // para executar: node main.js --num={num}
// const num = parseInt(process.argv[2]) // para executar: node main.js {num}
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
//# sourceMappingURL=main.js.map