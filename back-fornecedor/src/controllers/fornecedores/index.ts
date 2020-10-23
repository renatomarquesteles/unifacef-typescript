import { Request, Response } from 'express';

import { IFornecedor } from '../../types/Fornecedor';
import Fornecedor from '../../models/Fornecedor';

export const getFornecedores = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const fornecedores: IFornecedor[] = await Fornecedor.find();

    response.status(200).json({ fornecedores });
  } catch (error) {
    throw error;
  }
};

export const addFornecedor = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    const body = request.body as Pick<
      IFornecedor,
      'cnpj' | 'razaoSocial' 
    >;

    const fornecedor: IFornecedor = new Fornecedor({
      cnpj: body.cnpj,
      razaoSocial: body.razaoSocial,
    });

    const newFornecedor: IFornecedor = await fornecedor.save();

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