



const numArray = [2, 4];
const evenIndexSquare = []
const result = numArray.forEach((el, index) => {
    if (index % 2 == 0     ) {
        evenIndexSquare.push(el * el)
    }
    else {
        evenIndexSquare.push(el)
    }
})

console.log(evenIndexSquare);








