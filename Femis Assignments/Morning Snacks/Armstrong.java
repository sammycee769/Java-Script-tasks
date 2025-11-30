import java.util.Scanner;
public class Armstrong {
public static void main(String[] args) {
Scanner input = new Scanner(System.in);
System.out.println("Enter an integer");
int number = input.nextInt();
int actualNumber = number;
int digits = String.valueOf(number).length();
int sum = 0;

while (actualNumber > 0) {
    int digit = actualNumber % 10;
    sum += Math.pow(digit, digits);
    actualNumber /= 10;
}

if (sum == number) {
    System.out.println(number + " is an Armstrong number");
} else {
    System.out.println(number + " is NOT an Armstrong number");
}
}
}

