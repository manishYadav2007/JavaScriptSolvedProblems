



let get_discound_bill = (hotelBill, days) => {
    const totalBill = hotelBill * days;



    if (days >= 5) {
        return totalBill - (totalBill * 15 / 100 );
    }
    else if (days >= 2) {
        return totalBill - (totalBill * 5 / 100 );
    }
    else {
        return totalBill;
    }

}





const hotelBill = 200;
const days = 3;
let result = get_discound_bill(hotelBill, days);
console.log(result);
