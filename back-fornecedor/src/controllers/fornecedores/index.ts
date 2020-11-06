import { Request, Response } from "express";

import { IFornecedor } from "../../types/Fornecedor";
import Fornecedor from "../../models/Fornecedor";

export const getFornecedores = async (
  request: Request,
  response: Response
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
  response: Response
): Promise<void> => {
  try {
    const body = request.body as Pick<IFornecedor, "cnpj" | "razaoSocial">;

    const fornecedor: IFornecedor = new Fornecedor({
      cnpj: body.cnpj,
      razaoSocial: body.razaoSocial,
    });

    const newFornecedor: IFornecedor = await fornecedor.save();

    const allFornecedores: IFornecedor[] = await Fornecedor.find();

    response.status(201).json({
      message: "Fornecedor inserido com sucesso",
      fornecedor: newFornecedor,
      fornecedores: allFornecedores,
    });
  } catch (error) {
    throw error;
  }
};

export const updateFornecedor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Recupera o id do front end
    const { params: { id }, body } = req;
    // Atualiza fornecedor com id com o valor que vem do body
    const updatedFornecedor: IFornecedor | null = await Fornecedor.findByIdAndUpdate(
      { _id: id },
      body
    );
    // Recupera todos os fornecedores, inclusive contendo o fornecedor atualizado
    const allFornecedores: IFornecedor[] = await Fornecedor.find();
    // Devolve a resposta
    res.status(200).json({
      message: 'Fornecedor atualizado',
      fornecedor: updatedFornecedor,
      fornecedores: allFornecedores,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteFornecedor = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    // Remove o fornecedor com id com o valor que vem do body
    const deletedFornecedor: IFornecedor | null = await Fornecedor.findByIdAndRemove(id);
    // Recupera todos os fornecedores, menos o fornecedor removido
    const allFornecedores: IFornecedor[] = await Fornecedor.find();
    // Devolve a resposta
    res.status(200).json({
      message: 'Fornecedor removido',
      fornecedor: deletedFornecedor,
      fornecedores: allFornecedores,
    });
  } catch (error) {
    throw error;
  }
};
