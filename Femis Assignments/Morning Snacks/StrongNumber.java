import java.util.Scanner;

public class StrongNumber {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);

System.out.print("Enter a number: ");
int number = input.nextInt();
int actual = number;
int sum = 0;

while (actual > 0) {
int digit = actual % 10;
int fact = 1;
for (int i = 1; i <= digit; i++) {
    fact *= i;
}

sum += fact;
actual /= 10;
}

if (sum == number) {
System.out.println(number + " is a Strong number");
} else {
System.out.println(number + " is NOT a Strong number");
}
}
}

