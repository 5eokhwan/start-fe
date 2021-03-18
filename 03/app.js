const obj = {
  key1: "value1",
  key2: null,
  key3: undefined,
};

obj.constructor == Object;
console.log(obj.hasOwnProperty("key1"));
console.log(obj.hasOwnProperty("key2"));
console.log(obj.hasOwnProperty("key3"));
console.log(obj.hasOwnProperty("key4"));

console.log(new Date());
console.log(Math.floor(1.5));

var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

var newArr = arr.map(function (ele) {
  return ele + "-new";
});
console.log(newArr);

console.log(arr.slice(0, 1));
console.log("splice", arr.splice(0, 1), arr);

arr.pop();
console.log(arr);
arr.push("d");
console.log(arr);
console.log(arr.join("&"));
console.log(arr);

var words = ["a", "b", "c"];
var findIndex = words.findIndex(function (word) {
  return word === "c";
});
console.log(findIndex);

var words = ["a", "b", "c", "dd"];
var newWords = words.filter(function (word) {
  return word.length === 1;
});
console.log(newWords);
