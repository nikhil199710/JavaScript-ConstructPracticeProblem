
let number =prompt('Enter the number: ');
let factorial = 1;
if(number >= 1)
{
   for(let i = 1; i <= number; i++)
   {
       factorial *= i;
   }
   console.log("Factorial of "+ number+" is "+ factorial);
}
else
{
    console.log("enter only positive number");
}