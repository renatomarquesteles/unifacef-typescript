import { Router } from 'express';

import {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} from '../controllers/clients';

import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/products';

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from '../controllers/books';

// Cria objeto da classe Router
const router: Router = Router();

router.get('/clients', getClients);
router.post('/add-client', addClient);
router.post('/edit-client/:id', updateClient);
router.post('/delete-client/:id', deleteClient);

router.get('/products', getProducts);
router.post('/add-product', addProduct);
router.post('/edit-product/:id', updateProduct);
router.post('/delete-product/:id', deleteProduct);

router.get('/books', getBooks);
router.post('/add-book', addBook);
router.post('/edit-book/:id', updateBook);
router.post('/delete-book/:id', deleteBook);

export default router;
