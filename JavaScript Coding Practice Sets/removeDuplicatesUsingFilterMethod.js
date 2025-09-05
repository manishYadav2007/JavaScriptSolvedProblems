







let arr1 = [94, 57, 66];
let arr2 = [71, 52, 73];

let concanateArray = [...arr1, ...arr2];

const uniqueArray = concanateArray.filter((item, index) => {
    return concanateArray.indexOf(item) === index; 
})

console.log(uniqueArray.sort());

