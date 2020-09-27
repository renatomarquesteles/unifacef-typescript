import { model, Schema } from 'mongoose';

import { IBook } from '../types/Book';

// Esquema do mongoose para o Book
const bookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Exporta um model que representa um documento Book no mongoDB
export default model<IBook>('Book', bookSchema)
