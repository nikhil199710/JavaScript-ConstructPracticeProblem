let a=Number(prompt("Enter first number: "));
let b=Number(prompt("Enter second number: "));
let c=Number(prompt("Enter third number: "));

let arr =[];
arr[0]=a+b*c;
arr[1]=c+a/b;
arr[2]=a%b+c;
arr[3]=a*b+c;

arr.sort();
console.log("Smallest number:"+arr[0]);
console.log("Largest number :"+arr[arr.length-1]);
