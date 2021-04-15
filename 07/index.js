const $box = document.getElementById("box");
const offset = { x: 0, y: 0 };
let isDown = false;
$box.addEventListener();
$box.addEventListener("mousedown", e => {
  isDown = true;
  offset.x = e.clientX - $box.offsetLeft;
  offset.y = e.clientY - $box.offsetTop;
});
$box.addEventListener("mouseup", e => {
  isDown = false;
});
document.body.addEventListener("mousemove", e => {
  if (!isDown) return;
  $box.style.left = `${e.clientX - offset.x}px`;
  $box.style.top = `${e.clientY - offset.y}px`;
});
