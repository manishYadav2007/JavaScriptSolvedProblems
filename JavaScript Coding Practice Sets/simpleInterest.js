


const getSimpleInterest = (principal, time = 12, rate =  2) => {
    
    const simpleInterest = (principal * time * rate) / 100;
    return simpleInterest + principal;
}









const principal = 1000;
const time = 12;
const rate = 2;

const result = getSimpleInterest(principal);
console.log(result);



