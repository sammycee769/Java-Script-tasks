number = int(input("Enter a number: "))
real_number = number
if number < 1:
    print(f"{number} is not a perfect number")
else:
    sum_of_factors = 0
    factors = 2
    while number != 1:
        if number % factors != 0:
            factors +=1
        else:
            sum_of_factors += factors
            number //= factors
    sum_of_factors +=1
    if real_number == sum_of_factors:
        print(f"{real_number} is a perfect number")
    else:
        print(f"{real_number} is not a perfect number")
        
