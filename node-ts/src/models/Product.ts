import { model, Schema } from 'mongoose';

import { IProduct } from '../types/Product';

// Esquema do mongoose para o Product
const productSchema: Schema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Exporta um model que represento um documento Product no mongoDB
export default model<IProduct>('Product', productSchema)
