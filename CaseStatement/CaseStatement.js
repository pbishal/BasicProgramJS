const prompt = require('prompt-sync')();
// 1. Read a number and print in words
let number = Number(prompt('Enter a single digit number : '));
switch(number)
{
    case 0:
        console.log("Zero");
        break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;        
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
        case 9:
            console.log("Nine");
            break;
}

//Uc 2. Read a number and display the day
const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number : '));
switch(number)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;        
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

//UC 3. Display ones, tens, hundreds, digits in a number.
const prompt = require('prompt-sync')();
let number=Number(prompt('Enter the number: '));
let arr =[];
i=0;
while(number!=0)
{
    remainder=Math.floor(number%10);
    arr[i]=remainder;
    i++;
    number=number/10;
}
for(i=0;i<arr.length;i++)
{
    switch(i)
    {
        case 0:
            console.log("Value at ones place: "+arr[i]);
            break;
        case 1:
            console.log("Value at tens place: "+arr[i]);
            break;
        case 2:
            console.log("Value at hundreds place: "+arr[i]);
            break;
        case 3:
            console.log("Value at thousands place: "+arr[i]);
            break;
    }
}

// 4. Unit Conversion
const prompt=require('prompt-sync')();
let value = Number(prompt('Enter the number: '));
console.log(value+"feet="+value*12+"inches");
console.log(value+"inches="+value/12+"feet");
console.log(value+"feet="+value*0.3048+"metres");
console.log(value+"metres="+value*3.28+"feet");