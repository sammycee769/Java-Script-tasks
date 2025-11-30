number = int(input("Enter a number: "))
actual = number
sum_of_digits = 0

while actual > 0:
    digit = actual % 10

    fact = 1
    for i in range(1, digit + 1):
        fact *= i

    sum_of_digits += fact
    actual //= 10

if sum_of_digits == number:
    print(number, "is a Strong number")
else:
    print(number, "is NOT a Strong number")

