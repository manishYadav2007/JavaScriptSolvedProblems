











let consolidateSportsData = (sportsData2) => {
    let result = {};

    /* This part of the code is a for loop that iterates over each item in the `sportsData2` array. For
    each item, it destructures the array into two variables `student` and `sport`. It then assigns the
    `sport` value to the `student` key in the `result` object. This way, it consolidates the sports
    data by mapping each student to their respective sport in the `result` object. */
    for (let item of sportsData2) {
        let [student, sport] = item;
        result[student] = sport;
    }

    return result;
}



let sportsData2 = [
    ['Akhil', 'Badminton'],
    ['Varun', 'Hockey'],
    ['Akhil', 'Swimming']
];


console.log(consolidateSportsData(sportsData2));
