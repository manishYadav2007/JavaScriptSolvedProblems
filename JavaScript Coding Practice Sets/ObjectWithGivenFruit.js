



let userInput = "orange"; 



const objectEntities = [
    {
        fruit: "apple",
        vegetable: "broccoli"
    },
    {
        fruit: "kiwi",
        vegetable: "broccoli"
    },
    {
        fruit: "apple",
        vegetable: "cauliflower"
    },
    {
        fruit: "orange",
        vegetable: "mushrooms"
    },
];


let result = []; 

let filerItems = objectEntities.filter((item) => {
    if (item.fruit === userInput) {
        result.push(item); 
    }
})


console.log(result);








