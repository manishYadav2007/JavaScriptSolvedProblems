

const arr1 = [12, 2, 2, 4, 1];

const resultArr = arr1.map(val => {
    const val1 = val * -4;
    const val2 = val1 + 10;
    const val3 = val2 * 3;
    return val3; 
})


console.log(resultArr.join(" "));


