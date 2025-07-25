






// let findEvenIndexAndAverage = (arr) => {
//     const evenIndex = arr.filter((element, index) => index % 2 === 0);
//     const findAvg = evenIndex.reduce((acc, curentValue) => acc + curentValue, 0); 
//     return Math.ceil(findAvg / evenIndex.length);     
// }















const arr = [5, 9, 4, 4, -6, 7];

let findSum  = 0;  
let count = 0;

arr.forEach((number, index) => {
    if (index % 2 === 0) {
        findSum += number;
        count++; 
    }
})

const findAverage = count > 0 ? findSum / count : 0; 
console.log(findAverage);













