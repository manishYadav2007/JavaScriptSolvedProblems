





// let arr = ["Sword", "Myth", "Patient", "Rhythm"];
let arr  = ["Road", "Printer", "Eye", "Hymn"]; 
let vowelsList = ["a", "e", "i", "o", "u"];



let finalResult = arr.filter(eachElement => {
    return vowelsList.some(vowel => eachElement.toLowerCase().includes(vowel)); 
})

console.log(finalResult);
