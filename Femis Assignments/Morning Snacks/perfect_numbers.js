for (let numbers = 1; numbers<= 1000; numbers++){
    let sum_of_factors =0;
    for (let factors = 1; factors<= numbers/2; factors++){
         if (numbers % factors == 0){
                sum_of_factors +=factors;
    }
    }
    if (sum_of_factors == numbers){
        console.log(numbers)
}
}
