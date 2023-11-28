ex.1

This code will display values 3, 2, 1, and then stop. The condition while (i) will be false when i becomes 0.
ex.2

For this loop, the values output will be 1, 2, 3, and 4. The loop stops when ++i is no longer less than 5.

ex.3

for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }

ex.4

let i = 0;
while (i++ < 5) {
    alert(i);
}

ex.5

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
    alert( i );


ex.6. 
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimesUpToN() {
    let n = prompt("Enter a number (n): ");
    n = parseInt(n);

    if (isNaN(n) || n < 2) {
        console.log("Please enter a valid number greater than or equal to 2.");
        return;
    }

    console.log(`Prime numbers up to ${n}:`);
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}


printPrimesUpToN();