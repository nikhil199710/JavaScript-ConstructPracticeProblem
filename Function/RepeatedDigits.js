console.log("Numbers with same digits are : ")
for(let i = 1; i<100;i++)
{
    let ones = i%10;
    let tens = (i - ones)/10;
    if(ones == tens)
    console.log(i);
}