import { Router } from 'express';

import { getClients, addClient } from '../controllers/clients';

// Cria objeto da classe Router
const router: Router = Router();

router.get('/clients', getClients);

router.post('/add-client', addClient);

export default router;
