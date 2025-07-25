// const arr1 = [0, 1, 2, [4, 5, 7]];
// const arr2 = [3, 5, 7, 9, [[4, 6, 9, [2, 4, 7]]]];
// const newArr  = [arr1, arr2]; 

// console.log(newArr.flat());







// first approch 
const  arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const flattenArray = arr1.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattenArray.join(" "));


//  second approch 

 console.log(myArray.flat().join(" ")); 











