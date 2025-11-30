const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter an integer: "));
let actualNumber = number;

let digits = number.toString().length;

let sum = 0;

while (actualNumber > 0) {
    let digit = actualNumber % 10;
    let power = 1;
    for (let i = 0; i < digits; i++) {
        power *= digit;
    }

    sum += power;
    actualNumber = parseInt(actualNumber / 10);
}

if (sum === number) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is NOT an Armstrong number");
}

