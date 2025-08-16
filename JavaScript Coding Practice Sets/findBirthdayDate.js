

let findBirthdayCounts = (birthdayListOne) => {
    const buntyBirthday = new Date("13 June 2000");

    const buntyDate = buntyBirthday.getDate(); 
    const buntyMonth = buntyBirthday.getMonth(); 
    const buntyYear = buntyBirthday.getFullYear(); 
    
    
    let sameDayCount = 0; 
    let sameMonthCount = 0; 
    let sameYearCount = 0; 


    for(let birthdaysString of birthdayListOne) {
        const currentBirthday = new Date(birthdaysString); 

        if (currentBirthday.getDate() === buntyDate && currentBirthday.getMonth() === buntyMonth) {
            sameDayCount++; 
        }

        if (currentBirthday.getMonth() === buntyMonth) {
            sameMonthCount++; 
        }
        if (currentBirthday.getFullYear() === buntyYear) {
            sameYearCount++; 
        }
    }

    console.log(sameDayCount);
    console.log(sameMonthCount);
    console.log(sameYearCount);
    
    
    



}





const  birthdayListOne  = ['2001-06-23', '2010-06-13', '1999-06-13', '2017-06-03'];

findBirthdayCounts(birthdayListOne); 