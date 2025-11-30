const prompt = require('prompt-sync')();
let firstnumber = prompt("Enter first number: ");
let secondnumber = prompt("Enter second number: ");

let gcd = 1;
if (firstnumber < secondnumber){
    smallestnumber = firstnumber
}
else {
    smallestnumber = secondnumber
}
for (let factor = 1; factor <= smallestnumber; factor++){
 if (firstnumber % factor == 0 && secondnumber % factor == 0){
        gcd = factor
}
}
console.log(gcd)
