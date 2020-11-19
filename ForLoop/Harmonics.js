let num =prompt("Enter the number for harmonics:"); 
console.log("Number of harmonics to be generated : "+num);
let harmonicNum = 0;
console.log("Harmonic Num: ");
for(let n=1;n<=num;n++){
    harmonicNum = harmonicNum + 1/n;
    console.log(harmonicNum);
}
