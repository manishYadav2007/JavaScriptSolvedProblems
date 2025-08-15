

const arr  = [1, 'David', 10, {'points': 97}, 25, 'alphabet', true];



let finalArray = arr.map(currentEl => {
    switch (typeof currentEl) {
        case 'number':
            return currentEl * 2;
        case 'string':
            return 'string';
        case 'boolean':
            return 'boolean';
        case 'object':
            return 'object'; 
        case 'boolean':
            return 'boolean'; 
        default:
            return currentEl;
    }
})


console.log(finalArray);


