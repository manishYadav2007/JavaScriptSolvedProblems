


let candidatesList = [
    {
        name: "Henry Wikins",
        points: [81, 96, 93, 79]
    },
    {
        name: "John Doe",
        points: [78, 88, 90, 92]
    },
    {
        name: "Jane Smith",
        points: [72, 85, 88, 91] // This candidate should fail
    }
]



let employeeList = [];


candidatesList.forEach(candidates => {
    const isQualified = candidates.points.every(point => point > 75);
    

    if (isQualified) {
        employeeList.push(candidates.name);
    }


})


console.log(employeeList);

