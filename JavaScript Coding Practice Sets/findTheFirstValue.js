







arr1 = [51, 18, 15, 12]; 


let result = arr1.filter(eachItem => eachItem % 6 === 0); 


if (result.length === 0) {
    console.log("undefined");
}

else {
    console.log(Math.min(...result));
}









