ex.1 function printDiamond(size) {
    for (let i = 0; i < size; i++) {
        console.log(' '.repeat(size - i - 1) + '*'.repeat(2 * i + 1));
    }
    for (let i = size - 2; i >= 0; i--) {
        console.log(' '.repeat(size - i - 1) + '*'.repeat(2 * i + 1));
    }
}

function printSquare(size) {
    for (let i = 0; i < size; i++) {
        console.log('*'.repeat(size));
    }
}

function printTriangle(size) {
    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(i));
    }
}

function main() {
    try {
        const number = parseInt(prompt("Enter a number:"));

        if (isNaN(number) || number <= 0) {
            console.log("Please enter a positive number.");
            return;
        }

        console.log("Choose a geometrical figure:");
        console.log("1. Diamond");
        console.log("2. Square");
        console.log("3. Triangle");

        const choice = parseInt(prompt("Enter the corresponding number for the figure:"));

        if (choice === 1) {
            printDiamond(number);
        } else if (choice === 2) {
            printSquare(number);
        } else if (choice === 3) {
            printTriangle(number);
        } else {
            console.log("Invalid choice. Please enter 1, 2, or 3.");
        }

    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}

main();
ex.2

function printHollowDiamond(size) {
    for (let i = 0; i < size; i++) {
        if (i === 0 || i === size - 1) {
            console.log(' '.repeat(size - i - 1) + '*'.repeat(2 * i + 1));
        } else {
            console.log(' '.repeat(size - i - 1) + '*' + ' '.repeat(2 * i - 1) + '*');
        }
    }
}

function printHollowSquare(size) {
    for (let i = 0; i < size; i++) {
        if (i === 0 || i === size - 1) {
            console.log('*'.repeat(size));
        } else {
            console.log('*' + ' '.repeat(size - 2) + '*');
        }
    }
}

function printHollowTriangle(size) {
    for (let i = 0; i < size; i++) {
        if (i === size - 1) {
            console.log('*'.repeat(i + 1));
        } else {
            console.log('*' + ' '.repeat(2 * i - 1) + '*');
        }
    }
}

function main() {
    try {
        const number = parseInt(prompt("Enter a number:"));

        if (isNaN(number) || number <= 0) {
            console.log("Please enter a positive number.");
            return;
        }

        console.log("Choose a hollow geometrical figure:");
        console.log("1. Hollow Diamond");
        console.log("2. Hollow Square");
        console.log("3. Hollow Triangle");

        const choice = parseInt(prompt("Enter the corresponding number for the figure:"));

        if (choice === 1) {
            printHollowDiamond(number);
        } else if (choice === 2) {
            printHollowSquare(number);
        } else if (choice === 3) {
            printHollowTriangle(number);
        } else {
            console.log("Invalid choice. Please enter 1, 2, or 3.");
        }

    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}
main();

ex.3

// Traditional (Iterative) Factorial Calculation
function calculateFactorialIterative(number) {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }
    return factorial;
}

// Recursive Factorial Calculation
function calculateFactorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * calculateFactorialRecursive(number - 1);
}

function main() {
    try {
        const number = parseInt(prompt("Enter a number to calculate its factorial:"));

        if (isNaN(number) || number < 0) {
            console.log("Please enter a non-negative integer.");
            return;
        }

        // Calculate factorial using the iterative method
        const factorialIterative = calculateFactorialIterative(number);
        console.log(`Factorial (Iterative) of ${number} is: ${factorialIterative}`);

        // Calculate factorial using the recursive method
        const factorialRecursive = calculateFactorialRecursive(number);
        console.log(`Factorial (Recursive) of ${number} is: ${factorialRecursive}`);

    } catch (error) {
        console.log("Invalid input. Please enter a valid non-negative integer.");
    }
}

// Run the main function
main();
ex.4
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * calculateFactorial(number - 1);
}


function calculateLotteryOdds(totalNumbers, chosenNumbers) {
    if (totalNumbers < chosenNumbers || totalNumbers < 0 || chosenNumbers < 0) {
        return "Invalid input. Please ensure totalNumbers >= chosenNumbers >= 0.";
    }

    const numerator = calculateFactorial(totalNumbers);
    const denominator = calculateFactorial(chosenNumbers) * calculateFactorial(totalNumbers - chosenNumbers);

    const odds = numerator / denominator;
    return odds;
}

function main() {
    try {
        const totalNumbers = parseInt(prompt("Enter the total number of possible numbers:"));
        const chosenNumbers = parseInt(prompt("Enter the number of numbers chosen:"));

        if (isNaN(totalNumbers) || isNaN(chosenNumbers) || totalNumbers < 0 || chosenNumbers < 0) {
            console.log("Invalid input. Please enter valid non-negative integers.");
            return;
        }

        const odds = calculateLotteryOdds(totalNumbers, chosenNumbers);

        console.log(`The odds of winning the lottery are: ${odds}`);

    } catch (error) {
        console.log("Invalid input. Please enter valid non-negative integers.");
    }
}


main();
ex.5

function calculateSumRecursive(number) {
    if (number === 1) {
        return 1;
    }
    return number + calculateSumRecursive(number - 1);
}

function main() {
    try {
        const number = parseInt(prompt("Enter a number to calculate the sum from 1 to that number:"));

        if (isNaN(number) || number < 1) {
            console.log("Please enter a positive integer.");
            return;
        }

        
        const sum = calculateSumRecursive(number);

        console.log(`The sum from 1 to ${number} is: ${sum}`);

    } catch (error) {
        console.log("Invalid input. Please enter a valid positive integer.");
    }
}
main();
ex.6

function countDigitsRecursive(number) {
    if (number < 10) {
        return 1;
    }
    return 1 + countDigitsRecursive(Math.floor(number / 10));
}

function main() {
    try {
        const number = parseInt(prompt("Enter a number to calculate the number of digits:"));

        if (isNaN(number)) {
            console.log("Please enter a valid number.");
            return;
        }

        
        const digitCount = countDigitsRecursive(Math.abs(number));

        console.log(`The number of digits in ${number} is: ${digitCount}`);

    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}
main();

ex.7
function reverseNumber(number) {
    return parseInt(number.toString().split('').reverse().join(''));
}

function main() {
    try {
        const number = parseInt(prompt("Enter a number to be reversed:"));

        if (isNaN(number)) {
            console.log("Please enter a valid number.");
            return;
        }

        const reversedNumber = reverseNumber(number);

        console.log(`The reversed number is: ${reversedNumber}`);

    } catch (error) {
        console.log("Invalid input. Please enter a valid number.");
    }
}


main();




