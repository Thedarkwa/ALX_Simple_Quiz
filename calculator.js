// Arithmetic operation functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Error: Division by zero";
  }
  return number1 / number2;
}

// Utility to get input values and display result
function calculate(operationFunc) {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  const result = operationFunc(number1, number2);
  document.getElementById("calculation-result").textContent = result;
}

// Attach event listeners to buttons
document.getElementById("add").addEventListener("click", function () {
  calculate(add);
});

document.getElementById("subtract").addEventListener("click", function () {
  calculate(subtract);
});

document.getElementById("multiply").addEventListener("click", function () {
  calculate(multiply);
});

document.getElementById("divide").addEventListener("click", function () {
  calculate(divide);
});
