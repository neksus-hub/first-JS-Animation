const circle = document.getElementById("circle");
const resBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");

let count = 0;
let active = false;
let idInterval;

const circleAnimate = () => {
  count++;

  idInterval = requestAnimationFrame(circleAnimate);

  if (count < 500) {
    circle.style.width = 100 + count + "px";
    circle.style.height = 100 + count + "px";
  } else {
    cancelAnimationFrame(idInterval);
  }
};

stopBtn.addEventListener("click", () => {
  if (active) {
    idInterval = requestAnimationFrame(circleAnimate);
    active = false;
  } else {
    cancelAnimationFrame(idInterval);
    active = true;
  }
});

resBtn.addEventListener("click", () => {
  circle.style.width = 100 + "px";
  circle.style.height = 100 + "px";
  count = 0;
});

circleAnimate();
