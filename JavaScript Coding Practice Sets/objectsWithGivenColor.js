


const objectEntities = [
    {
        shape: "circle",
        color: "Green"
    },
    {
        shape: "circle",
        color: "White"
    },
    {
        shape: "triangle",
        color: "Orange"
    }
];


const color = "Green"

let filterColor =  objectEntities.filter(item  => item.color === color);
console.log(filterColor);



