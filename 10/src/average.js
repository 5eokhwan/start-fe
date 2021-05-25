export function avg() {
  let arr, len;
  if (typeof arguments[0] === "object") {
    arr = arguments[0];
    len = arguments[0].length;
  } else {
    len = arguments.length;
    arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(arguments[i]);
    }
  }
  len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] === undefined) break;
    if (typeof arr[i] === "string") arr.splice(i--, 1);
  }
  len = arr.length;
  return arr.reduce((acc, cur) => acc + cur, 0) / len;
}
