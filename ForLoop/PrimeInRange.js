let firstNumber=prompt('Enter the initial number: ');
let secondNumber =prompt('Enter the final number: ');
 

for(let j = firstNumber; j <= secondNumber ; j++)
{
let count = 0;
for (let i = 2; i <= Math.sqrt(j); i++)
    {
        if (j % i == 0) 
            count++;
    }
if (count == 0 && j > 1) 
    console.log(j + " is a prime number");
else 
    console.log(j + " is not a prime number");
}