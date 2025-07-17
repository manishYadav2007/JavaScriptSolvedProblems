


let logFamily = (firstName, lastName, ...otherNames) => {
    console.log(`${firstName} ${lastName}`);
    console.log(otherNames.join(', '));
}













const arr = ['John', 'Martha', 'Nikky', 'Boby', 'Jenny', 'Bob'];
logFamily(...arr);



