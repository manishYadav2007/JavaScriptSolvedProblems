

const fruits = [
    {
        fruitName: "Apple",
        status: "rippen"
    },
    {
        fruitName: "Banana",
        status: "rotten"
    }
]


const isRippen = (fruit) => fruit.status === "rippen";

const isRippenFruit = fruits.some(isRippen);

console.log(isRippenFruit);



