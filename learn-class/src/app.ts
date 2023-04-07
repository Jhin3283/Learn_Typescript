// Code goes here!
class Department {
    // private id: string;
    // private name: string;
    private employees: string[] = [];


    constructor(private readonly id: string,public name: string){
        // this.name = n
    }
    describe(this: Department){
        console.log(`Department: ${this.id} ${this.name}`);
    }
    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployee(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting = new Department("d1","Accounting");
accounting.describe();
accounting.addEmployee("Max")
accounting.addEmployee("Manu");
accounting.printEmployee()
// const accountingCopy = {name: "Dummy",describe: accounting.describe};
// accountingCopy.describe();