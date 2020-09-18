import { Request, Response } from 'express';

import { IProduct } from '../../types/Product';
import Product from '../../models/Product';

// Método para retornar todos os products
export const getProducts = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Tenta consultar todos os produtos e guardar no vetor de products
    const products: IProduct[] = await Product.find();
    // Retorna os products armazenados no MongoDB
    response.status(200).json({ products });
  } catch (error) {
    throw error;
  }
};

// Método para inserir um product
export const addProduct = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Recuperando os dados do formulário do usuário
    const body = request.body as Pick<IProduct, 'description' | 'qty' | 'price'>;
    // Monta um objeto
    const product: IProduct = new Product({
      description: body.description,
      qty: body.qty,
      price: body.price,
    });
    // Insere no banco de dados
    const newProduct: IProduct = await product.save();
    // Recupera todos os products
    const allProducts: IProduct[] = await Product.find();

    response.status(201).json({
      message: 'Produto inserido com sucesso',
      product: newProduct,
      products: allProducts,
    })
  } catch (error) {
    throw error;
  }
};

// Método para remover um produto
export const deleteProduct = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Remove e traz o produto removido
    const deletedProduct = await Product.findByIdAndRemove(request.params.id);
    // Procura pelos produtos que sobraram
    const allProducts: IProduct[] = await Product.find();

    response.status(200).json({
      message: 'Produto removido', // Mensagem de retorno
      product: deletedProduct, // Producte removido
      products: allProducts, // Productes restantes
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Método para atualizar um produto
export const updateProduct = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Pega o id e as novas informações do produto que será atualizado
    const {
      params: { id },
      body,
    } = request;
    // Chama a atualização
    const updatedProduct: IProduct | null = await Product.findByIdAndUpdate(
      { _id: id },
      body,
    );
    // Busca todos os produtos, inclusive o atualizado
    const allProducts: IProduct[] = await Product.find();

    response.status(200).json({
      message: 'Produto atualizado',
      product: updatedProduct,
      products: allProducts,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
