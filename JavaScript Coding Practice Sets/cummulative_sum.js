let array  = [1, 10, 100, 1000]

let cumulativeSum = []

let sum = 0 


array.forEach((arr) => {
    sum += arr 
    cumulativeSum.push(sum); 
})

console.log(cumulativeSum);


