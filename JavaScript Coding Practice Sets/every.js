

let isValue = (currentValue) => currentValue.length >= min && currentValue.length <= max;  

const min = 1;
const max = 8; 
const array1 = ["Apple", "Banana", "Mango", "Orange", "Pineapple"]
console.log(array1.every(isValue));












