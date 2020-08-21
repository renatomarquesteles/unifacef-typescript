import { Employee } from './Employee';

class Chief extends Employee {
  
  constructor(
    public bonus: number,
    id: number,
    name: string,
    baseSalary: number
  ) {
    super(id, name, baseSalary);
  }

  calcSalary() {
    this.salary = this.baseSalary + this.bonus;
  }

  show() {
    super.show();
    console.log(this.bonus);
  }
}

export { Chief };
