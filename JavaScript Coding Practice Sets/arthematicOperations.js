

function ArthematicOperations(a, b) {
    this.a = a;
    this.b = b;

    ArthematicOperations.prototype.sumOfNumbers = function () {
        return this.a + this.b;
    }

    ArthematicOperations.prototype.productOfNumbers = function () {
        return this.a * this.b;
    }
    ArthematicOperations.prototype.diffrenceOfNumbers = function () {
        return this.a - this.b;
    }


}







const operation1 = new ArthematicOperations(5, 3);


console.log(operation1.sumOfNumbers());
console.log(operation1.productOfNumbers());
console.log(operation1.diffrenceOfNumbers());



