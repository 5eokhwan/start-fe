const btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.addEventListener("click", () => {
  const num = document.getElementById("num");
  let i = num.value;
  if (!parseInt(i)) {
    alert("숫자가 아닙니다.");
    return;
  }
  let str = "";
  for (let j = 1; j <= 9; j++) {
    str += `${i} * ${j} =  ${i * j} <br>`;
  }
  result.innerHTML = str;
});
