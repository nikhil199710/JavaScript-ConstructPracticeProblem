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
    switch(i)
    {
    case 0:
        {
            console.log("Value at unit place: "+arr[i]);
            break;
        }
    case 1:
        {
            console.log("Value at ten place: "+arr[i]);
            break;
        }
    case 2:
        {
            console.log("Value at hundred place: "+arr[i]);
            break;
        }
    case 3:
        {
            console.log("Value at thousand place: "+arr[i]);
            break;
        }
    default:
        break;
    }
}
