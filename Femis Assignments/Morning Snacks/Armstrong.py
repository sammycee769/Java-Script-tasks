number = int(input("Enter an integer: "))
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
    print(number, "is an Armstrong number")
else:
    print(number, "is NOT an Armstrong number")

