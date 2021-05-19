export function random() {
  const len = arguments.length;
  let min, max;
  if (len < 2) {
    (min = 0), (max = arguments[0]);
  } else (min = arguments[0]), (max = arguments[1]);
  const result = Math.floor(Math.random() * (max + 1 - min) + min);
  return isNaN(result) ? -1 : result;
}
