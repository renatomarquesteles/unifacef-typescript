import { Router } from 'express';

import {
  getFornecedores,
  addFornecedor,
} from '../controllers/fornecedores';

const router: Router = Router();

router.get('/fornecedores', getFornecedores);
router.post('/add-fornecedor', addFornecedor);

export default router;
