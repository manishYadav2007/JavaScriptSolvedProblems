



const arr  = [[[['COMPUTER', 'RESOLUTION'], 'INDICATION']]];
const depth  = 3;


let flatArray = arr.flat(depth);
console.log(flatArray);

let finalArray = flatArray.map(currentEl => {
    if (currentEl.length % 2 === 0) {
        return currentEl.toLowerCase(); 
    }
    else if (currentEl.length % 2 !== 0) {
        return currentEl.toUpperCase();
    }
})


console.log(finalArray);


