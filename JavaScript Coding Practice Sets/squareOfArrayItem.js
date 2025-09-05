







const arr1 = [12, [24], 36, [48, 60]];





const arrayResult = arr1.map((eachItem) => {
    if (Array.isArray(eachItem)) {
        return eachItem.map((eachItem) => eachItem * eachItem); 
    }
    else {
        return eachItem * eachItem; 
    }
})

console.log(arrayResult);










