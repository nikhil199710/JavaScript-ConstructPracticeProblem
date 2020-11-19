let n = prompt('Enter the number: '); 
console.log("Number is : "+n);
let count =1;
let power =1;
while(power<=256&&count<=n){
    console.log(power);
    power = power*2;
    count++;
}