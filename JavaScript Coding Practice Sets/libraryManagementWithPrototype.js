
/*

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year; 

    this.getSummary = () => {
        return `${this.title} by ${this.author} in ${this.year}`; 
    }

}

function eBook(title, author, fileSize) {
    Book.call(this, title, author); 
    this.fileSize = fileSize; 

    this.getFileInfo = () => {
        return `${this.title} by ${this.author} and file size is ${this.fileSize}`; 
    }


}




let book = new Book("The White Tiger", "Aravind Adiga", 2017); 
let ebook = new eBook("The White Tiger", "Aravind Adiga", "1.5MB");
console.log(book.getSummary());

console.log(ebook.getFileInfo()); */


/*
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.displayFullName = function() {
  return this.firstName + " " + this.lastName;
};

let person1 = new Person("Virat", "Kohli");
let person2 = new Person("Sachin", "Tendulkar");
console.log(Object.getPrototypeOf(person1));



console.log(Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2));


*/


/*

const a = {
    color: "Red"
}

const b = a; 

b.color = "Yellow"; 



console.log(e);
console.log(c);


console.log(a);
console.log(b);

*/




function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greet = function() {
    return    `Hello ${this.firstName} ${this.lastName}`; 
  }
}

Person.prototype.displayFullName = function() {
  return this.firstName + " " + this.lastName;
};

let person1 = new Person("Virat", "Kohli");
console.log(Object.getOwnPropertyNames(person1));



