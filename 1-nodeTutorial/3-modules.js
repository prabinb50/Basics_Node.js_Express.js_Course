// Modules
// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-firstModules')
console.log(names)

const sayHi = require('./5-secondModules')
sayHi('prabin')
sayHi(names.yangma)
sayHi(names.lama)

const data = require('./6-alternativeSyntax')
console.log(data)

require('./7-mindGrenade')