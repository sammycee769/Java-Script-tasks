import java.util.Scanner;
public class LCM{
public static void main(String[] args){
Scanner input = new Scanner(System.in);
System.out.println("Enter first integer");
int firstNumber = input.nextInt();
System.out.println("Enter second integer");
int secondNumber = input.nextInt();
int smallestNumber;
int gcd = 1;
if (firstNumber < secondNumber){
    smallestNumber = firstNumber;
}
else {
    smallestNumber = secondNumber;
}
for (int factor = 1; factor <= smallestNumber; factor++){
 if (firstNumber % factor == 0 && secondNumber % factor == 0){
        gcd = factor;
}
}
int lcm = (firstNumber * secondNumber)/ gcd;
System.out.print(lcm);
}
}
