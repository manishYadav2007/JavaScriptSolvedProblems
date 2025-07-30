


let getAppreciationAmount = (principleAmount, time = 2, appreciation = 5)  => {
    return principleAmount * (1 + time * appreciation / 100); 
}






const principleAmount = 2000;
// const time = 2;
// const appreciation = 3;

const result = getAppreciationAmount(principleAmount);
console.log(result);
