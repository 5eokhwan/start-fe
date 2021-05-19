import * as average from "./average";
import * as random from "./random.js";

console.log(average.avg(1, 2, 3, 4));
console.log(average.avg(1, 2));
console.log(average.avg(1, 2, 3, 4, 5, 6));
console.log(average.avg(1, "a", 2));
console.log(average.avg([1, 2, 3]));

console.log(random.random(0, 100));
console.log(random.random(3));
console.log(random.random(0, "a"));
