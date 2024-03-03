// Sum of all digits of a number


// let inputNumber = prompt("enter a number")
// let sum = 0;
// for (let i = 0; i < inputNumber.length; i++) {
//     sum += parseInt(inputNumber[i]);
// }
// console.log(`The sum of digits in ${inputNumber} is: ${sum}`);


// Sum of the range of 2 numbers.


// let num1 = prompt("enter the first number")
// let num2 = prompt("enter the second number")
// let total = 0;
// for (let i = num1; i <= num2; i++) {
//     total += i;
// }
// console.log(`The sum of numbers between ${num1} and ${num2} (inclusive) is: ${total}`);


// Calculate the average of numbers given in an array.


// const numbers = [80, 77, 88, 95, 68]; 

// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i]; 
// }
// const average = total / numbers.length;

// console.log(`The average of the given array is: ${average}`);


// Compare strings by count of characters.


// let string1 = prompt("enter a  first sting");
// let string2 = prompt("enter a second string");

// if (string1.length == string2.length) {
//     console.log("are equal");
// } else {
    
//     for (let i = 0; i < string1.length; i++) {
//        console.log("not equal"); 
//     }
// }
    

// Swap the string's first and last character.


let inputNumber = prompt("enter a name ");

let firstchar = inputNumber.charAt(0);

let secondchar = inputNumber.charAt(inputNumber.length - 1);

let Swap = inputNumber.slice(1, -1);

let swapped = secondchar + Swap + firstchar;

console.log("swapped " + swapped);



 