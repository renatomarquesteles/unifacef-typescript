import { Chief } from './Chief';
import { Office } from './Office';
import { Manager } from './Manager';

const man = new Manager(10, 123, 'Elon', 3000);
const office1 = new Office('Robert', man);
office1.hire();
const chi = new Chief(3000, 456, 'Steve', 20000);

const office2 = new Office('John', chi);
office2.hire();
