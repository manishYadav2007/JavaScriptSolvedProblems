

// find manufacturing date

const findManufacturingDate = (dateString, months) => {
    
    // const date = new Date(dateString);
    // const manufacturingDate = new Date(date.setMonth(date.getMonth() - months));
    // return manufacturingDate;

    const date = new Date(dateString);
    const manufacturingDate = new Date(date.setMonth(date.getMonth() - months)); 

    return manufacturingDate;

}



const dateString  = "2021-11-12"; 
const months = 2; 


const result = findManufacturingDate(dateString, months);
console.log(result);




const day = String(result.getDate()).padStart(2, "0");
const month = String(result.getMonth() + 1).padStart(1, "0");
const year = String(result.getFullYear());

const formattedDate = `${day}-${month}-${year}`;

console.log(formattedDate);






