


let removeDuplicatesValuesInArray = (arr1, arr2) => {
    let combineArray = [...arr1, ...arr2]; 
    let uniqueValues = new Set(combineArray); 
    let sortedArray  = [...uniqueValues].sort(); 
    return sortedArray; 
}






// let arr1 = [1, 4, 7, 3, 7, 3, 3];
// let arr2 = [2, 4, 5, 5, 3, 2, 1];

let arr1 = [94, 57, 66]; 
let arr2 = [71, 52, 73]; 




let result = removeDuplicatesValuesInArray(arr1, arr2);
console.log(result);



