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

export default model<IClient>('Client', clientSchema)
