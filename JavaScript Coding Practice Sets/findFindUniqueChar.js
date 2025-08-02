


let findUniqueChar = (stringValue) => {
    const uniqueChar = new Set(stringValue); 
    const uniqueCharArray = Array.from(uniqueChar); 
    return uniqueCharArray; 
}




const stringValue = "Was it a cat I saw?"; 
const result = findUniqueChar(stringValue);;
console.log(result); // Output: "I"

