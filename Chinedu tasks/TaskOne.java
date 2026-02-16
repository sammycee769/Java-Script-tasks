import java.util.Arrays;
public class TaskOne{
public static void main(String...args){
int []array = {6,7,9,1};
int [] srt = addAndSubtract(array);
System.out.println(Arrays.toString(srt));
int index=0;
while(index!=10){
System.out.print(index);
index++;
}

}

public static int [] addAndSubtract(int [] array){
//int [] newArray = new int [array.length];
    for(int count=0; count < array.length; count++){
        if(array[count] % 2 != 0){
            array[count] = array[count] - 2;
            }
        else{
            array[count]=array[count] + 1;
            }
    }
return array;
}
}
