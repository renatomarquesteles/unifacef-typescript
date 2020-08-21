import { IT } from './IT';
import { Employee } from './Employee';

class Office implements IT {
  
  constructor(public CIO: string, public employee: Employee) {}

  hire() {
    console.log(`Hiring ${this.employee.name}`);
  }
}

export { Office };
