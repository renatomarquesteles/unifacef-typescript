import { Request, Response } from 'express';

import { IFornecedor } from '../../types/Fornecedor';
import Fornecedor from '../../models/Fornecedor';

// Método para retornar todos os fornecedores
export const getFornecedores = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Tenta consultar todos os fornecedores e guardar no vetor de fornecedores
    const fornecedores: IFornecedor[] = await Fornecedor.find();
    // Retorna os fornecedores armazenados no MongoDB
    response.status(200).json({ fornecedores });
  } catch (error) {
    throw error;
  }
};

// Método para inserir um fornecedor
export const addFornecedor = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Recuperando os dados do formulário do usuário
    const body = request.body as Pick<IFornecedor, 'cnpj' | 'razaoSocial'>;
    // Monta um objeto
    const fornecedor: IFornecedor = new Fornecedor({
      cnpj: body.cnpj,
      razaoSocial: body.razaoSocial,
    });
    // Insere no banco de dados
    const newFornecedor: IFornecedor = await fornecedor.save();
    // Recupera todos os fornecedores
    const allFornecedores: IFornecedor[] = await Fornecedor.find();

    response.status(201).json({
      message: 'Fornecedor inserido com sucesso',
      fornecedor: newFornecedor,
      fornecedores: allFornecedores,
    })
  } catch (error) {
    throw error;
  }
};
