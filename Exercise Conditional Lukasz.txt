ex.1

it doesnt Show

ex.2

let userInput = prompt('What is the "official" name of JavaScript?', '');

if (userInput === 'ECMAScript') {
    alert('Right!');
} else {
    alert('You don’t know? ECMAScript!');
}

ex.3

let number = +prompt('Enter a number:', '');

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}
ex.6

let result = (a + b < 4) ? 'Below' : 'Over';

ex.7
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
ex.8

if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
ex.9
let a = +prompt('a', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;