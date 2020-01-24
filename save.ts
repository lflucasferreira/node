import * as fs from 'fs'
import * as yargs from 'yargs'

const argv = yargs
      .option('filename', {
        alias: 'f',
        type: 'string'
      })
      .option('content', {
        alias: 'c',
        type: 'string'
      })
      .argv

fs.writeFile(argv.filename, argv.content, (error)=>{
  if(error) throw error
  console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`)
})