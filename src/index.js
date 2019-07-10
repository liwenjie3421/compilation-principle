const fs = require('fs')
const path = require('path')

const lexical = require('./lexer')

const code = fs.readFileSync(path.join(__dirname, '../demo.js'), {
    encoding: 'utf-8'
})

console.log(lexical(code))