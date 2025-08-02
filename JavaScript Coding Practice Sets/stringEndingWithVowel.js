





const inputString  =  ""; 
const vowels = ['A', 'E', 'I', 'O', 'U'];


const lastChar = inputString.slice(-1).toUpperCase();
console.log(lastChar);

const endsWithVowel = vowels.includes(lastChar); 
console.log(endsWithVowel);



