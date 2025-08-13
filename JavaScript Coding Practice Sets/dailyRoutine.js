






// let isHotWaterReady = true;
// let isBreakfastReady = false;


// let takingShower = () => {
//     return new Promise((resolve, reject) => {
//         if (isHotWaterReady == true) {  
//             resolve("Taken Shower"); 
//         }
//         else if (isHotWaterReady == false) {
//             reject("How water Not Ready");
//         }
//     })
// }



// let havingBreakfast = () => {
//     return new Promise((resolve, reject) => {
//         if (isBreakfastReady == true) {
//             resolve("Had Breakfast");
//         }
//         else if (isBreakfastReady == false) {
//             reject("Breakfast Not Ready");
//         }
//     })
// }

// let gettingToWork = () => {
//     return new Promise((resolve, reject) => {
//         if (isBreakfastReady == true && isHotWaterReady == true) {
//             resolve("Going to work");
//         }
//         else {
//             reject("Not Water Not Ready"); 
//         }
//     })
// }

// let createPromises = async () => {
//     try {


//         let isTakingShower = await takingShower();
//         console.log(isTakingShower);
//         let havingBrakfast = await havingBreakfast();
//         console.log(havingBrakfast);
//         let isGettingToWork = await gettingToWork();
//         console.log(isGettingToWork);

//     }
//     catch (err) {
//         console.log(err);
//     }
// }

// createPromises()







let isHotWaterReady = true;
let isBreakfastReady = true;

let takingShower = () => {
    return new Promise((resolve, reject) => {
        // Simplified the if/else logic
        if (isHotWaterReady) {
            resolve("Taken Shower");
        } else {
            // Corrected the typo in the rejection message
            reject("Hot Water Not Ready");
        }
    })
}




let havingBreakfast = () => {
    return new Promise((resolve, reject) => {
        if (isBreakfastReady) {
            resolve("Had Breakfast");
        } else {
            reject("Breakfast Not Ready");
        }
    })
}

let gettingToWork = () => {
    return new Promise((resolve, reject) => {
        if (isBreakfastReady && isHotWaterReady) {
            resolve("Going to work");
        } else {
            // Made the rejection message more descriptive
            reject("Cannot get to work because something is not ready.");
        }
    })
}

let createPromises = async () => {
    try {
        let isTakingShower = await takingShower();
        console.log(isTakingShower);

        // Corrected the typo in the variable name
        let isHavingBreakfast = await havingBreakfast();
        console.log(isHavingBreakfast);

        // BUG FIX: Used a different variable name to avoid conflict
        let isGettingToWork = await gettingToWork();
        console.log(isGettingToWork);

    } catch (err) {
        console.log(err);
    }
}

createPromises();