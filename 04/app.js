// console.log(window.outerWidth);
// console.log(window.name);
// window.open("www.naver.com ");
// window.open("www.naver.com ");

// console.log(document.getElementById("test"));

// var box = document.querySelector(".box");
// //var box = document.querySelectorAll(".box");

// console.log(box);

//js코드) dom을 탐색하는 메소드는?
var debug = document.getElementById("debug");
//dom을 제거하는 메소드는?
debug.remove();

//js코드)  dom을 생성하는 메소드는?
var div = document.createElement("div");

document.body.appendChild(div);
div.style.border = "1px solid #000";
div.innerHTML = "hello";

const list = document.getElementById("list");
list.removeChild(list.children[0]);

//js코드)  dom에 이벤트를 추가하는 메소드는?
document.body.addEventListener("click", function () {
  console.log("click");
});

list.addEventListener("click", function (event) {
  if (event.target.nodeName == "LI") {
    console.log(event.target.nodeName);
  }
});
