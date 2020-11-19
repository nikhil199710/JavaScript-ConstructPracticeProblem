console.log("enter 0:feet->inches");
console.log("enter 1:inches->feet");
console.log("enter 2:feet->meters");
console.log("enter 3:meters->feet");
let choice = prompt("Enter your choice");
number = prompt("Enter the number:");
switch(choice)
{
    case "0":
        console.log(number+" feet equal to "+number*12+" inches");
        break;
    case "1":
        console.log(number+" inches equal to "+number/12+" feet");
        break;
    case "2":
        console.log(number+"feet equal to "+number*0.3048+" metres");
        break;
    case "3":
        console.log(number+" meters equal to "+number*3.28+" feet");
        break;
}