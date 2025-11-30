for (let number = 1; number <= 1000; number++) {
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
console.log(number);
}
}

