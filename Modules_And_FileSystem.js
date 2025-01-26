// Create and export a module with two functions sum and multiply
// Both functions should two arguements and return the sum and product values
module.exports.sum = (a, b) => {
    return a + b
};
module.exports.multiply = (a, b) => {
    return a * b
};
/*
- import the 'fs' module
- create and export a module with a function "readAndWrite" with following functionality
- should read the content of 'input.txt' and write it to 'duplicate.txt' using filesystem functions.
- note: specify the encoding string 'utf8' while reading the file
- console log the message "Content copied to duplicate.txt"
 */
const fs = require('fs');
var maths = require('./maths.js');
const readAndWrite = () => {
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFile('duplicate.txt', data, (err) => {
      if (err) throw err;
      console.log('Content copied to duplicate.txt');
    });
  });
};

module.exports = { readAndWrite };

var result = maths.sum(2, 3);
var product = maths.multiply(2, 3);
fs.writeFile('output.txt', `The sum of the numbers is: ${result}. The product of the numbers is: ${product}`, (err) => {
    if (err) throw err;
})
