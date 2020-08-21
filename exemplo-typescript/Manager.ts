import { Employee } from './Employee';

class Manager extends Employee {
  
  constructor(
    public comission: number,
    id: number,
    name: string,
    baseSalary: number
  ) {
    super(id, name, baseSalary);
  }

  calcSalary() {
    this.salary = this.baseSalary + (this.baseSalary * this.comission) / 100;
  }

  show() {
    super.show();
    console.log(this.comission);
  }
}

export { Manager };
