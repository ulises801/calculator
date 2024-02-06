let screen = document.getElementById("screen"),
  keypad = document.getElementById("keypad"),
  buttons = keypad.getElementsByTagName("button"),
  operations = document.getElementById("operations"),
  operationButtons = operations.getElementsByTagName("button"),
  equal = document.getElementById("equal"),
  clear = document.getElementById("clear"),
  firstNumber,
  operator = "",
  secondNumber,
  result;

//llenar input con digitos y .
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    screen.value = screen.value + this.innerHTML;
  };
}

//botones de operacion
for (let i = 0; i < operationButtons.length; i++) {
  operationButtons[i].onclick = function () {
    if (operator !== "") {
      operate();
    }
    firstNumber = screen.value;
    operator = this.innerHTML;
    screen.value = "";
  };
}

//CE
clear.onclick = function () {
  screen.value = "";
  operator = "";
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
};

//=
equal.onclick = function () {
  if (operator !== "") {
    operate();
  }
};

//operacion
function operate() {
  secondNumber = screen.value;
  switch (operator) {
    case "+":
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;
    case "-":
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;
    case "*":
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;
    case "/":
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;
  }
  screen.value = result;
  firstNumber = result.toString();
  operator = "";
}
