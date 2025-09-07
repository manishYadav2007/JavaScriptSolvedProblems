

const arr  = [1, 'David', 10, {'points': 97}, 25, 'alphabet', true];



let finalArray = arr.map(currentEl => {
    if (typeof currentEl === "number") {
        return currentEl * currentEl; 
    }
    return typeof currentEl; 
})


console.log(finalArray);


