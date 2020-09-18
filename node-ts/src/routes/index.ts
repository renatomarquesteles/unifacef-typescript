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

export default router;
