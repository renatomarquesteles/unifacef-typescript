import { Router } from 'express';

import {
  getFornecedores,
  addFornecedor,
  updateFornecedor,
  deleteFornecedor,
} from '../controllers/fornecedores';

const router: Router = Router();

router.get('/fornecedores', getFornecedores);
router.post('/add-fornecedor', addFornecedor);
router.put('/edit-fornecedor/:id', updateFornecedor);
router.delete('/delete-fornecedor/:id', deleteFornecedor);

export default router;
