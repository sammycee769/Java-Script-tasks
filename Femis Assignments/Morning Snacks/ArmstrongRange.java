public class ArmstrongRange {
public static void main(String[] args) {
for (int number = 1; number <= 1000; number++) {
int actualNumber = number;
int digits = String.valueOf(number).length();
int sum = 0;

while (actualNumber > 0) {
int digit = actualNumber % 10;


int power = 1;
for (int i = 0; i < digits; i++) {
power *= digit;
}

sum += power;
actualNumber /= 10;
}

if (sum == number) {
System.out.println(number);
}
}
}
}

