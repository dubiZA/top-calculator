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
