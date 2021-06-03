// 1. Writting a program that reads 5 Random 3 Digit values.
var numArray=[0,0,0,0,0];
for(let i=0;i<5;i++)
{
   numArray[i]=Math.floor(Math.random()*1000);
    console.log(numArray[i]);
}
//Find the minimum and the maximum value.
let largestNumber=numArray[0];
let smallestNumber=numArray[0];
for (let i=0 ; i<5; i++)
{
if (numArray[i] > largestNumber) 
{
largestNumber = numArray[i];
}
if (numArray[i] < smallestNumber) 
{
smallestNumber= numArray[i];
}
}
console.log("Smallest number : "+smallestNumber);
console.log("Largest number : "+largestNumber);

// 2. Find month and date range if it is between March 20 and June 20.
var enteredDate=new Date();
const prompt = require('prompt-sync')();
//Taking input from user
const year = prompt('Enter year: ')
const month = prompt('Enter month: ');
const date = prompt('Enter date: ');
enteredDate.setFullYear(year,month,date);
var date1 = new Date();
var date2 = new Date();
date1.setFullYear(year,3,20);
date2.setFullYear(year,6,20);
// Comparison
if(enteredDate>date1 && enteredDate<date2)
console.log("True");
else
console.log("False");

// 3. Check if the year is leap year
const year = prompt('Enter year: ');   //User input
if (year % 400 == 0)
console.log("It's a Leap year");
// Else If a year is muliple of 100,
// then it is not a leap year
else if (year % 100 == 0)
console.log("It's not a Leap year");
// Else If a year is muliple of 4,
// then it is a leap year
else if (year % 4 == 0)
console.log("It's a Leap year");
else
console.log("It's not a Leap year");

// 4  Simulate a coin toss
var tossResult = Math.floor(Math.random()*10)%2;
if(tossResult==0)
console.log("Heads it is");
else
console.log("Tails it is");