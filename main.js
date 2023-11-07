const circle = document.getElementById("circle");
const resBtn = document.getElementById("reset");
const stopBtn = document.getElementById("stop");
let count = 0;
let active = false;

const animation = () => {
  count++;

  idInterval = requestAnimationFrame(animation);

  if (count <= 500) {
    circle.style.width = count + "px";
    circle.style.height = count + "px";
  } else {
    cancelAnimationFrame(idInterval);
  }
};

resBtn.addEventListener("click", () => {
  if (active) {
    cancelAnimationFrame(idInterval);
  } else {
    idInterval = requestAnimationFrame(animation);
  }
});

animation();
