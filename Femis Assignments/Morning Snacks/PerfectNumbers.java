public class PerfectNumbers {
    public static void main(String[] args) {

        for (int numbers = 1; numbers <= 1000; numbers++) {
            int sumOfFactors = 0;

            for (int factors = 1; factors <= numbers / 2; factors++) {
                if (numbers % factors == 0) {
                    sumOfFactors += factors;
                }
            }

            if (sumOfFactors == numbers) {
                System.out.println(numbers);
            }
        }
    }
}

