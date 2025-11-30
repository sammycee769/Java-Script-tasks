const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a number: "));
let actual = number;
let sum = 0;

while (actual > 0) {
let digit = actual % 10;


let fact = 1;
for (let i = 1; i <= digit; i++) {
    fact *= i;
}

sum += fact;
actual = parseInt(actual / 10);
}

if (sum === number) {
console.log(number + " is a Strong number");
} else {
console.log(number + " is NOT a Strong number");
}

