const $box = document.getElementById("box");
const $minInput = document.getElementById("min");
const $maxInput = document.getElementById("max");
const $createBtn = document.getElementById("btn");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max) + 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

let n = 0;
$createBtn.addEventListener("click", e => {
  $createBtn.disabled = true;
  const randomNumber = getRandomInt($minInput.value, $maxInput.value);
  const interval = setInterval(() => {
    if (n < randomNumber) n++;
    else if (n > randomNumber) n--;
    $box.innerText = n;
    if (n === randomNumber) {
      $createBtn.disabled = false;
      clearTimeout(interval);
    }
  }, 1);
});
