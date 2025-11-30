const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter a number: "));
let real_number = number;
if (number < 1){
    console.log(real_number +  "is not a perfect number")
}
else{
    let sum_of_factors = 0;
    let factors = 2;
    while (number != 1){
        if (number % factors != 0){
            factors +=1;
        }else{
            sum_of_factors += factors
            number = parseInt(number / factors) 
        }}
    sum_of_factors +=1;


    if (real_number == sum_of_factors){
    console.log(real_number +  "is a perfect number")}
    else{
    console.log(real_number +  "is not a perfect number")
}
   } 
