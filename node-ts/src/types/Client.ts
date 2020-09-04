import { Document } from 'mongoose';

// Interface que representa um cliente
export interface IClient extends Document {
  name: string;
  rg: string;
  age: number;
  address: string;
}
