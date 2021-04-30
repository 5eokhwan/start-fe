const result = document.getElementById("result");
const point = document.getElementById("point");
const life = document.getElementById("life");
const bug = document.getElementById("bug");
const box = document.querySelector(".box");
let x1 = (y1 = 0);
let x2 = (y2 = box.offsetWidth - bug.offsetWidth);
setInterval(() => {
  bug.style.left = rand(x1, x2) + "px";
  bug.style.top = rand(y1, y2) + "px";
}, 1000);

bug.addEventListener("click", e => {
  point.innerHTML = parseInt(point.innerHTML) + 1;
  e.stopPropagation();
});

box.addEventListener("click", e => {
  life.innerHTML = life.innerHTML - 1;
  if (life.innerHTML <= 0) alert("game over");
});

function rand(start, end) {
  return Math.floor(Math.random() * (end - start + 1) + start);
}
