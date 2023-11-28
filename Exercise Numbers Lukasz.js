ex.1
var num1 = parseFloat(prompt("Enter the first number:"));

var num2 = parseFloat(prompt("Enter the second number:"));


if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
   
    var sumResult = num1 + num2;

    
    alert("The sum of " + num1 + " and " + num2 + " is: " + sumResult);
}
ex.2 
you must add a very small amount 

ex.3
function readNumber() {
    while (true) {
       
        let userInput = prompt("Enter a number:");

        
        if (userInput === null) {
            return null; 
        }

        
        let number = parseFloat(userInput.trim());

        
        if (!isNaN(number)) {
            return number; 
        } else {
            alert("Invalid input. Please enter a valid number."); 
        }
    }
}


let result = readNumber();

if (result !== null) {
    alert("You entered: " + result);
} else {
    alert("null");
}
ex.4
The loop is infinite because of the way floating-point numbers are represented in JavaScript. In each iteration of the loop, you are adding 0.2 to i. However, due to the way floating-point numbers are stored in computers, this addition might not always result in an exact representation of 0.2. As a result, the loop condition i != 10 is never satisfied, and the loop continues indefinitely.
ex.5

ex.6
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let randomNumber = randomInteger(0, 1000);
console.log(randomNumber);

it shows in console