const prompt = require('prompt-sync')();
const number = prompt('Enter a number: ');
let counter = 1;
for (let count = 1; count <= number ; count++){
 counter = count * counter;
}
console.log(counter) 

