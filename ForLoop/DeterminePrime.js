let number =prompt('Enter the number: ');
let count = 0;
let j=0;
for(let j = 2; j < number ; j++){
    if(number%j==0)
    {
        count++;
    }
}
if(number==1)
{
    console.log(number+"is not prime);
}
if (count == 0) 
    console.log(number + " is a prime number");
else 
    console.log(number + " is not a prime number");
