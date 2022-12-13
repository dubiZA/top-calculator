let operationNumber = "";

const buttons = document.querySelectorAll("button");
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    if (button.dataset.value) {
      renderDisplay(button.dataset.value);
    }
    if (button.id === "clear") {
      resetDisplay();
    }
  });
});

function renderDisplay(value) {
  const displayDiv = document.querySelector(".display-row");
  if (operationNumber.length < 9 && operationNumber !== "0") {
    operationNumber += value;
    displayDiv.textContent = operationNumber;
  }
}

function resetDisplay() {
  const displayDiv = document.querySelector(".display-row");
  displayDiv.textContent = 0;
  operationNumber = "";
}