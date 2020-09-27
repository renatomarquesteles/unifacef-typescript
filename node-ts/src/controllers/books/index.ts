import { Request, Response } from 'express';

import { IBook } from '../../types/Book';
import Book from '../../models/Book';

// Método para retornar todos os livros
export const getBooks = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Tenta consultar todos os livros e guardar no vetor de books
    const books: IBook[] = await Book.find();
    // Retorna os livros armazenados no MongoDB
    response.status(200).json({ books });
  } catch (error) {
    throw error;
  }
};

// Método para inserir um livro
export const addBook = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Recuperando os dados do formulário do usuário
    const body = request.body as Pick<IBook, 'title' | 'author' | 'publisher' | 'pages'>;
    // Monta um objeto
    const book: IBook = new Book({
      title: body.title,
      author: body.author,
      publisher: body.publisher,
      pages: body.pages,
    });
    // Insere no banco de dados
    const newBook: IBook = await book.save();
    // Recupera todos os livros
    const allBooks: IBook[] = await Book.find();

    response.status(201).json({
      message: 'Livro inserido com sucesso',
      book: newBook,
      books: allBooks,
    })
  } catch (error) {
    throw error;
  }
};

// Método para remover um livro
export const deleteBook = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Remove e traz o livro removido
    const deletedBook = await Book.findByIdAndRemove(request.params.id);
    // Procura pelos livros que sobraram
    const allBooks: IBook[] = await Book.find();

    response.status(200).json({
      message: 'Livro removido', // Mensagem de retorno
      book: deletedBook, // Livro removido
      books: allBooks, // Livros restantes
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Método para atualizar um livro
export const updateBook = async (
  request: Request,
  response: Response,
): Promise<void> => {
  try {
    // Pega o id e as novas informações do livro que será atualizado
    const { params: { id }, body } = request;
    // Chama a atualização
    const updatedBook: IBook | null = await Book.findByIdAndUpdate(
      { _id: id },
      body,
    );
    // Busca todos os livros, inclusive o atualizado
    const allBooks: IBook[] = await Book.find();

    response.status(200).json({
      message: 'Livro atualizado',
      book: updatedBook,
      books: allBooks,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
