
let findCumulativeSum = (arr) => {
    let sum = 0;
    let cumulativeSum = [];

    arr.map((e) => {
        sum += e; 
        cumulativeSum.push(sum); 
    })

    return cumulativeSum; 
}





let arr = [1, 3, 5, 7, 9, 11];
let result = findCumulativeSum(arr);
console.log(result);
