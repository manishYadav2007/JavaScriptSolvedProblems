




let arr = [1, 2, 3, 5, 7];
let k = 13;

const totalSum = arr.reduce((sum, num) => sum + num, 0);

const validCount = arr.filter(el => (el + k) > (totalSum - el)).length;

console.log(validCount);



