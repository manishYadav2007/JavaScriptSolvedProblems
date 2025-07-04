
let findMinMax = (a) => {
    /* The line `let minValue = Math.min(...a);` is using the spread syntax (`...`) to pass the
    elements of array `a` as individual arguments to the `Math.min()` function. This function then
    returns the minimum value among those arguments, which is assigned to the variable `minValue`. */
    let minValue = Math.min(...a);
    
    /* The line `let maxValue = Math.max(...a);` is using the spread syntax (`...`) to pass the
    elements of array `a` as individual arguments to the `Math.max()` function. This function then
    returns the maximum value among those arguments, which is assigned to the variable `maxValue`. */
    let maxValue = Math.max(...a);
    return {
        min: minValue,
        max: maxValue
    };
}



let a = [4.5, -1.2, 1, -2, 4.4];
// let b = [5,10, 9, 5];

let result = findMinMax(a)
console.log(result);







