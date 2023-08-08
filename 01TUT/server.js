// you should already know:
// HTML CSS JS
// Possibly experience with other libraries and frameworks

// How NodeJS differ from Vanilla JS
// 1) Node run on a server - not in  a browser
// 2) The console is the terminal window
console.log("hello world")
// 3) global object instead of window object
//console.log(global)
// 4) Has common Core modules that we will explore
// 5) CommonJS modules instead of ES6 modules
// 6) Miss some JS APIs like fetch

const os = require('os')
const path = require('path')
const { add, subtract, multifly, divide } = require('./math')

console.log(add(2, 3))
console.log(subtract(2, 3))
console.log(multifly(2, 3))
console.log(divide(2, 3))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))