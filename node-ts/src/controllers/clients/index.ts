import { Request, Response } from 'express';

import { IClient } from '../../types/Client';
import Client from '../../models/Client';

// Método para retornar todos os clients
export const getClients = async (
  request: Request,
  response: Response,
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
  response: Response,
): Promise<void> => {
  try {
    // Recuperando os dados do formulário do usuário
    const body = request.body as Pick<
      IClient,
      'name' | 'rg' | 'age' | 'address'
    >;
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

    response.status(201).json({
      message: 'Cliente inserido com sucesso',
      client: newClient,
      clients: allClients,
    })
  } catch (error) {
    throw error;
  }
};

// Método para remover um cliente
export const deleteClient = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Remove e traz o cliente removido
    const deletedClient = await Client.findByIdAndRemove(request.params.id);
    // Procura pelos clientes que sobraram
    const allClients: IClient[] = await Client.find();

    response.status(200).json({
      message: 'Cliente removido', // Mensagem de retorno
      client: deletedClient, // Cliente removido
      clients: allClients, // Clientes restantes
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Método para atualizar um cliente
export const updateClient = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Pega o id e as novas informações do cliente que será atualizado
    const {
      params: { id },
      body,
    } = request;
    // Chama a atualização
    const updatedClient: IClient | null = await Client.findByIdAndUpdate(
      { _id: id },
      body,
    );
    // Busca todos os clientes, inclusive o atualizado
    const allClients: IClient[] = await Client.find();

    response.status(200).json({
      message: 'Cliente atualizado',
      client: updatedClient,
      clients: allClients,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
