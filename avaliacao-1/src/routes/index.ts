import { Router } from 'express';

import { addFornecedor, getFornecedores } from '../controllers/fornecedor';

// Cria objeto da classe Router
const router: Router = Router();

router.get('/fornecedores', getFornecedores);
router.post('/add-fornecedor', addFornecedor);

export default router;
