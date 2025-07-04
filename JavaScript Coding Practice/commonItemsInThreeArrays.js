


let findCommomDigitesinArrays = (arr1, arr2,arr3) => {
    return arr1.filter(el => arr2.includes(el) && arr3.includes(el))
} 




let array1 = ['cat', 'rat', 'dog'];
let array2 = ['lion', 'fox', 'tiger'];
let array3 = ['ostrich', 'kiwi', 'eagle'];


let commonItems = findCommomDigitesinArrays(array1, array2, array3);
console.log(commonItems);


