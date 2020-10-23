import { model, Schema } from 'mongoose';

import { IFornecedor } from '../types/Fornecedor';

const schema: Schema = new Schema(
  {
    cnpj: {
      type: String,
      required: true,
    },
    razaoSocial: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IFornecedor>('Fornecedor', schema)
