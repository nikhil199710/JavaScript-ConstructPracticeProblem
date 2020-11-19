let num=prompt('Enter the number: ');
let arr =[];
i=0;
while(num!=0)
{
    remainder=Math.floor(num%10);
    arr[i]=remainder;
    i++;
    num=num/10;
}
for(i=0;i<arr.length;i++)
{
    if(i==0)
    console.log("Value at ones place: "+arr[i]);
    else if(i==1)
    console.log("Value at tens place: "+arr[i]);
    else if(i==2)
    console.log("Value at hundreds place: "+arr[i]);
    else if(i==3)
    console.log("Value at thousand place: "+arr[i]);
}
