let counterValue = 0;
const counter = document.getElementById("counter");
const value = document.getElementById("value");

const incrementBtn = document.querySelector("[data-action=increment]");
const decrementBtn = document.querySelector("[data-action=decrement]");

const increment = () => {
  counterValue = counterValue++;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue = counterValue--;
  value.textContent = counterValue;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
