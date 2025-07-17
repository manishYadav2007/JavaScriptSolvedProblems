








const arr = [1, 2, 3, 4, 5];

let [a, b, ...rest] = arr;

console.log(rest.reduce((acc, curr) => acc + curr, 0));




