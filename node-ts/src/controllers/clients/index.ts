import { Request, Response } from "express";

import { IClient } from "../../types/Client";
import Client from "../../models/Client";

// Método para retornar todos os clients
export const getClients = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    // Tenta consultar todos os clientes e guardar no vetor de clients
    const clients: IClient[] = await Client.find();
    // Retorna os clients armazenados no MongoDB
    response.status(200).json({ clients });
  } catch (error) {
    throw error;
  }
};

// Método para inserir um client
export const addClient = async (
  request: Request,
  response: Response
): Promise<void> => {
  try {
    // Recuperando os dados do formulário do usuário
    const body = request.body as Pick <IClient, 'name' | 'rg' | 'age' | 'address'>;
    // Monta um objeto
    const client: IClient = new Client({
      name: body.name,
      rg: body.rg,
      age: body.age,
      address: body.address,
    });
    // Insere no banco de dados
    const newClient: IClient = await client.save();
    // Recupera todos os clients
    const allClients: IClient[] = await Client.find();
  } catch (error) {
    throw error;
  }
};
