import java.lang.*;
import java.io.*;
import java.util.Scanner;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
	public static void main (String[] args) throws java.lang.Exception
	{
		// your code goes here

        Scanner sc=new Scanner(System.in); 
		int n=sc.nextInt();
		int a[]= new int[n];
		for(int i=0;i<n;i++){
		      a[i]=sc.nextInt();
		}
		int count=1;
		for(int i=1;i<=n-2;i++){
		    if(a[i]>a[i+1]&& a[i]>a[i-1]){
		        count++;
		    }
		} if(a[n-1]>a[n-2])
		count++;
		System.out.println(count);
	}
}