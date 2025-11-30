first_number = int(input("Enter first number: "))
second_number = int(input("Enter second number: "))

gcd= 1

if first_number < second_number:
    smallest_number = first_number
else:
    smallest_number = second_number

for factor in range(1,smallest_number +1):
    if first_number % factor == 0 and second_number % factor == 0:
        gcd = factor
print(gcd)
