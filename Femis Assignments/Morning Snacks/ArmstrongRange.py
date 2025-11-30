for number in range(1, 1001):
    actualNumber = number
    digits = len(str(number))
    sum_of_digits = 0

    while actualNumber > 0:
        digit = actualNumber % 10

        power = 1
        for i in range(digits):
            power *= digit

        sum_of_digits += power
        actualNumber //= 10

    if sum_of_digits == number:
        print(number)

