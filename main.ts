import {fatorial} from './fatorial'
import * as yargs from 'yargs'

console.log('n-fatorial')

const argv = yargs.demandOption('num').argv

const num = argv.num // para executar: node main.js --num={num}

// const num = parseInt(process.argv[2]) // para executar: node main.js {num}

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)