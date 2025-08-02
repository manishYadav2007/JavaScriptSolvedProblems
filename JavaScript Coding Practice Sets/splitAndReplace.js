


const inputString  = "The&Lion&King";
const seprator = "&";
const targetWord = "Tiger"; 

const result = inputString.split(seprator);

console.log(result);

const newResult =  result.map(el => (el.length > 7 ? targetWord : el))
console.log(newResult.join(" "));
// 

