







const arr1 = [[12, 1, 2, 4, 1], [18, 20, 30, 45], [49, 11, 13, 21]]; 


const result = arr1.map(subArray => {
    const hasEvenNumber = subArray.some(num => num % 2 === 0); 

    if (hasEvenNumber) {
        return subArray.reduce((element, currentValue) => element * currentValue); 
    }
    else {
        return 0; 
    }


})



console.log(result);

