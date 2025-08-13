function Employee(name, role, salary) {
    /* Please do not modify anything above this line */
    this.name = name;
    this.role = role;
    this.salary = salary;

    // Write your code here
    this.getTaxAmount = () => {
        if (this.salary >= 1000000) {
            return (this.salary * 10) / 100;
        }
        else if (this.salary >= 500000) {
            return (this.salary * 5) / 100;
        }
        else {
            return 0; 
        }
    }

}




let name = "Manish Yadav";
let role = "Software Developer";
let salary = "650000";

const employee1 = new Employee(name, role, salary);

/* Please do not modify anything below this line */

console.log(employee1.getTaxAmount());


