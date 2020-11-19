// 2.checking date
var startDate=new Date();

startDate.setDate(20);
startDate.setMonth(3);
startDate.setFullYear(2020);
var endDate=new Date();
endDate.setMonth(6);
endDate.setDate(20);
endDate.setFullYear(2020);

// Take date from user
var d=new Date();
const month = prompt('Enter month');
d.setMonth(month);
const date = prompt('Enter date');
d.setDate(date);
d.setFullYear(2020);

// Compare dates
if(d>startDate&&d<endDate)
console.log("Date lies in given range");
else
console.log("Date doesnot lie in given range")