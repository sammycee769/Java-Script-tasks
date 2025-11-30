for numbers in range(1,1001):
    sum_of_factors =0
    for factors in range(1,(numbers//2)+1):
         if numbers % factors == 0:
                sum_of_factors +=factors
    if sum_of_factors == numbers:
        print(numbers)
