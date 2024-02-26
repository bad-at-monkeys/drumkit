// adding event listener to $0 on a web page
$0.addEventListener("click", function() { console.log("I got clicked"); });

// function that takes two numbers and one function as input
function add(num1, num2) { return num1 + num2; }
function subtract(num1, num2) { return num1 - num2; }
function multiply(num1, num2) { return num1 * num2; }
function divide(num1, num2) { return num1 / num2; }

function calculator( num1, num2, operator) { return operator(num1, num2); }
