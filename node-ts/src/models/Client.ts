import { model, Schema } from 'mongoose';

import { IClient } from '../types/Client';

// Esquema do mongoose para o Client
const clientSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rg: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Exporta um model que represento um documento Client no mongoDB
export default model<IClient>('Client', clientSchema)
