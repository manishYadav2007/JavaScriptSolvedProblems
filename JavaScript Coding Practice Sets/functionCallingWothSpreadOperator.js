



let product = (...arr) => {
    return arr.reduce((acc, val) => acc * val, 1)
}







let arr = [2, 4, 6, 8];

let res = product(...arr);
console.log(res);
