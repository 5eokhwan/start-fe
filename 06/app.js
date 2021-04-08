let a = "aa";
const b = "bb";
const area = "jeju";
console.log(a, b);

let str = `aaaaa
bbbb
ccc
dd
e`;

function multiple(a, b = 1) {
  return a * b;
}

console.log(multiple(3));

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function (item) {
  return item + 1;
});

const newArr = arr.map((item) => item + 1);

document
  .getElementById("box")
  .addEventListener("click", (event) => console.log(1));

const words = ["a", "b"];
const newWords = [...words]; //깊은 복사
console.log(newWords);

const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1, 6, 7];
console.log(arr2);

const obj = {
  a: 1,
  b: 2,
};
const newObj = { ...obj };
console.log(newOjb);
function func(...param) {
  console.log(param);
}

func(1, 2, 3);

//향상된 객체 리터럴
const number = 1234;
const student = {
  // number: number
  number,
};
const student = {
  number,
  // playGame:function(){
  // },
  playGame() {
    console.log("play");
  },
};
