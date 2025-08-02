




const stringInput  = ["teacher", "friend", "cricket", "farmer", "rose", "talent", "trainer"];
const startChar = "t";
const endChar = "r";

const result = stringInput.filter(str => str.startsWith(startChar) || str.endsWith(endChar));

console.log(result);

