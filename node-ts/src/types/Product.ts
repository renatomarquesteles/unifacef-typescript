import { Document } from 'mongoose';

// Interface que representa um cliente
export interface IProduct extends Document {
  description: string;
  qty: number;
  price: number;
}
