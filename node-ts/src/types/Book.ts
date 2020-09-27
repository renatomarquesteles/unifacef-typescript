import { Document } from 'mongoose';

// Interface que representa um livro
export interface IBook extends Document {
  title: string;
  author: string;
  publisher: string;
  pages: number;
}
