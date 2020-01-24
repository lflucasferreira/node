"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yargs = require("yargs");
const argv = yargs
    .option('filename', {
    alias: 'f',
    type: 'string'
})
    .option('content', {
    alias: 'c',
    type: 'string'
})
    .argv;
fs.writeFile(argv.filename, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${argv.filename} foi salvo com sucesso.`);
});
//# sourceMappingURL=save.js.map