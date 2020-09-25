import { model, Schema } from 'mongoose';

import { IFornecedor } from '../types/Fornecedor';

// Esquema do mongoose para o Fornecedor
const fornecedorSchema: Schema = new Schema(
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

// Exporta um model que representa um documento Fornecedor no mongoDB
export default model<IFornecedor>('Fornecedor', fornecedorSchema)
