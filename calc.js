let currentNumber = "";

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    storeCurrentNumber(button.dataset.value);
    populateDisplay(currentNumber);
  });
});

function add(valueA, valueB) {
  return valueA + valueB;
}

function subtract(valueA, valueB) {
  return valueA - valueB;
}

function multiply(valueA, valueB) {
  return valueA * valueB;
}

function divide(valueA, valueB) {
  return valueA / valueB;
}

function operate(operator, valueA, valueB) {
  let result;
  switch (operator) {
    case "add":
      result = add(valueA, valueB);
      break;
    case "subtract":
      result = subtract(valueA, valueB);
      break;
    case "multiply":
      result = multiply(valueA, valueB);
      break;
    case "divide":
      result = divide(valueA, valueB);
      break;
    default:
      break;
  }
  return result;
}

function populateDisplay(numberToDisplay) {
  const displayDiv = document.querySelector(".display-row");
  displayDiv.textContent = numberToDisplay;
}

function storeCurrentNumber(numberToStore) {
    currentNumber += numberToStore;
    console.log(currentNumber);
}

// Starting From Scratch.

// let currentNumber = "";
// let operator = "";
// let firstNumber = "";
// let secondNumber = "";

// const buttons = document.querySelectorAll("button");
// buttons.forEach(function(button) {
//   button.addEventListener("click", function() {
//     if (button.dataset.value) {
//       storeCurrentNumber(button.dataset.value);
//     }
//     if (button.id === "clear") {
//       reset();
//     }
//     if (button.id === "add") {
//       storeOperator("add", currentNumber);
//     }
//     if (button.id === "equals") {
//       operate(operator, firstNumber, currentNumber)
//     }
//   });
// });

// function storeCurrentNumber(value) {
//   if (value !== "0") {
//     if (currentNumber.length < 9) {
//       currentNumber += value;
//       renderDisplay(currentNumber);
//     }
//   } else if (value === "0" && currentNumber !== "") {
//     if (currentNumber.length < 9) {
//       currentNumber += value;
//       renderDisplay(currentNumber);
//     }
//   }
// }

// function storeOperator(operation, number) {
//   operator = operation;
//   firstNumber = number;
//   currentNumber = "";
// }

// function add(valueA, valueB) {
//   return Number(valueA) + Number(valueB);
// }

// function subtract(valueA, valueB) {
//   return Number(valueA) - Number(valueB);
// }

// function multiply(valueA, valueB) {
//   return Number(valueA) * Number(valueB);
// }

// function divide(valueA, valueB) {
//   return Number(valueA) / Number(valueB);
// }

// function operate(operator, valueA, valueB) {
//   let result;
//   switch (operator) {
//     case "add":
//       result = add(valueA, valueB);
//       break;
//     default:
//       break;
//   }
//   // if (operator === "add") {
//   //   result = add(valueA, valueB);
//   // }
//   renderDisplay(result);
// }

// function renderDisplay(value) {
//   const displayDiv = document.querySelector(".display-row");
//   displayDiv.textContent = value;
// }

// function reset() {
//   const displayDiv = document.querySelector(".display-row");
//   displayDiv.textContent = "0";
//   currentNumber = "";
//   firstNumber = "";
//   secondNumber = "";
// }