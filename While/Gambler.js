let initialAmount = 100;
let NumberOfwin = 0;
let NumberOfbet = 0;

while(initialAmount > 0 && initialAmount < 200)
{
    let number = Math.floor(Math.random()*10)%2;
    NumberOfbet++;
    if(number == 0)
    {
        initialAmount++;
        NumberOfwin++;
    }
    else
    {
        initialAmount--;
    }
}
if(initialAmount == 0)
{
    console.log("No money");
    console.log("Bets played : "+ NumberOfbet + " Won : "+NumberOfwin);
}
else
{
console.log("Target Reached");
console.log("Bets played : "+ NumberOfbet + " Won : "+NumberOfwin);
}