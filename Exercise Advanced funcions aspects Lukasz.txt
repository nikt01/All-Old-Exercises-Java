ex.1
function pow(n,m) {
if (m == 0) {
return 1;
} else {
return n * pow(n,m-1);
}
}
console.log(pow(2,3));
ex.2
function concatenateWords(...words) {
  return words.join(' ');
}
ex.3
function performOperation(number1, number2, operationCallback) {
  return operationCallback(number1, number2);
}
ex.4
The reason you get the output "100" is that when the calcula function is called, it uses the values of a and b at that moment, which are both 10. Therefore, a * b equals 10 * 10, resulting in 100.
ex.5
In the provided code, there's a variable naming inconsistency. The inner function in crearCoche is trying to return a variable named nombre, but nombre is not defined in the given code.
ex.6
So, the output reflects the values assigned to the nombre variable when creating coche1 and coche2. Each function returned by coche creates a closure, preserving its own nombre variable, resulting in the different output values when calling coche1() and coche2()
And the output is Tesla And Mg
ex.7
This assumes you correct the typo in the if statement as mentioned above. If you don't correct it, the code will result in an error, and no output will be produced.
