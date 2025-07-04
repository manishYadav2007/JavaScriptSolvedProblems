let dataTypeReport = (arr) => {
    numCount = 0;
    strCount = 0;
    booleanValueCount = 0;
    objectCount = 0;
    for (let value of arr) {
        if (typeof (value) === "number") {
            numCount += 1;
        }
        else if (typeof (value) === "string") {
            strCount += 1;
        }

        else if (typeof (value) === "boolean") {
            booleanValueCount += 1;
        }

        else if (typeof (value) === "object") {
            objectCount += 1
        }
    }

    return {
        number: numCount,
        object: objectCount,
        string: strCount,
        boolean: booleanValueCount
    };
}


let arr = [1, 2.2, true, "JavaScript", "Python", { name: "Manish Yadav", age: 21 }, { score: 75, points: 5 }]




let res = dataTypeReport(arr)
console.log(res);



