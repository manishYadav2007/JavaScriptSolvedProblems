  
  
  
let findDuplicates = (arr) => {
    let seen = new Set(); 

    for(let item of arr) {
        if (seen.has(item)) {
            return item; 
        }

        seen.add(item); 
    }
    return false; 
} 







let arr  = [1, 2, 3, 3, 4, 5, 6, 7, 8]; 

let result = findDuplicates(arr)

console.log(result);

