ex.1 
2
1
2
null
1
undefined
3

ex.2 

var age = 12;

if (age >= 14 && age <= 90) {/Volumes/ESD-USB/Exercises logical operators.txt
    console.log("Age is between 14 and 90.");
} else {
    console.log("Age is outside the range of 14 to 90.");
}/Volumes/ESD-USB/Exercises logical operators.txt

ex.3
var age = 45;

if (!(age >= 14 && age <= 90)) {
    console.log("Age is NOT between 14 and 90.");
} else {
    console.log("Age is between 14 and 90.");
}

ex.4
it shows 
first
third



ex.5
let login = prompt("Enter your login:");

if (login === "Admin") {
    let password = prompt("Enter your password:");

    if (password === "TheMaster") {
        alert("Welcome!");
    } else if (password === '' || password === null) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }

} else if (login === '' || login === null) {
    alert("Canceled");
} else 
    alert("I don't know you");