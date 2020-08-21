class Employee {
  public salary: number;

  constructor(
    public id: number,
    public name: string,
    public baseSalary: number
  ) {}

  calcSalary() {
    this.salary = this.baseSalary;
  }

  show() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
  }
}

export { Employee };
