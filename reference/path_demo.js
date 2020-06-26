const path = require('path');

// Base file name
console.log(__filename)

// Directory  name
console.log(__dirname)

// File extention
console.log(path.extname(__filename))

// Create path object
console.log(path.parse(__filename).base)

// Concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'))