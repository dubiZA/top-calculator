let operationNumber = "";

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (button.dataset.value) {
      storeOperationNumber(button.dataset.value);
    }
    if (button.id === "clear") {
      resetDisplay();
    }
  });
});

function storeOperationNumber(value) {
  if (value !== "0") {
    if (operationNumber.length < 9) {
      operationNumber += value;
      renderDisplay(operationNumber);
    }
  } else if (value === "0" && operationNumber !== "") {
    if (operationNumber.length < 9) {
      operationNumber += value;
      renderDisplay(operationNumber);
    }
  }
}

function renderDisplay(value) {
  const displayDiv = document.querySelector(".display-row");
  displayDiv.textContent = value;
}

function resetDisplay() {
  const displayDiv = document.querySelector(".display-row");
  displayDiv.textContent = "0";
  operationNumber = "";
}