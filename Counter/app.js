const colours = ["black", "green", "red"];

const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
let value = document.getElementById("value");

let num = 0;

reset.addEventListener("click", function () {
  num = 0;
  getColour();
  value.textContent = num;
  console.log(num);
});

increase.addEventListener("click", function () {
  num++;
  getColour();
  value.textContent = num;
  console.log(num);
});

decrease.addEventListener("click", function () {
  num--;
  getColour();
  value.textContent = num;
  console.log(num);
});

function getColour() {
  if (num === 0) {
    value.style.color = colours[0];
  } else if (num > 0) {
    value.style.color = colours[1];
  } else if (num < 0) {
    value.style.color = colours[2];
  }
}
