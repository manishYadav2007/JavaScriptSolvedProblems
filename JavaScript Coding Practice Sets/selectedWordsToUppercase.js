const wordsList = ["absolute", "umbrella", "achievement", "formula"]; 
const myString = "a"; 


let finalArray = wordsList.map(currentEl => {
    if (currentEl.startsWith(myString) || currentEl.endsWith(myString)) {
        return currentEl.toUpperCase();
    }
    return currentEl;
});

console.log(finalArray);
