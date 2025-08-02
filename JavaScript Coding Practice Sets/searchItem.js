











const categoryOfItem = "pulses";
const item = "green peas";




const mart = [
    {
        category: "pulses",
        items: ["green gram", "green peas", "Turkish gram"]
    },
    {
        category: "soaps",
        items: ["santoor", "dove", "lux", "pears"]
    },
    {
        category: "oil",
        items: ["sunflower oil", "grapeseed oil", "soybean oil"]
    },
    {
        category: "cereals",
        items: ["wheat", "rice", "maize", "oat"]
    },
    {
        category: "spices",
        items: ["cumin", "coriander", "black pepper", "clove"]
    }
];


let getResult = (categoryOfItem, item) => {
    return new Promise((resolve, reject) => {

        const categoryObject = mart.find((martCategory) => martCategory.category === categoryOfItem);


        if (!categoryObject) {
            reject("Category Not Found");
            return;
        }
        const itemFound = categoryObject.items.includes(item);

        if (itemFound) {
            resolve("Item Found");
        }
        else {
            reject("Item Not Found");
        }


    })
}



let findMartItems = async () => {

    try {
        result = await getResult(categoryOfItem, item);
        console.log(result);

    }
    catch (error) {
        console.log(error);
    }

}



findMartItems(); 