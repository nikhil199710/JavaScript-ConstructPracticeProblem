let Number = prompt('Enter the final number: ');
 
let count = 0;


for (let i = 2; i <= Math.sqrt(Number); i++)
    {
        if (Number % i == 0) 
            count++;
    }

if (count == 0) 
    console.log(Number + " is a prime number");
else 
    console.log(Number + " is not a prime number");
