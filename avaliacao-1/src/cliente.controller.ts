// Importa as classes TS do Express
import { Router, Request, Response } from 'express';

// Cria instância do Router
const router: Router = Router();

router.get('/', (request: Request, response: Response) => {
  // Retorna uma mensagem para o client
  response.send('Bom dia cliente, obrigado por sua consulta!');
});

router.get('/:nome', (request: Request, response: Response) => {
  let nome = request.params.nome;

  response.send(`Bom dia ${nome}, obrigado por sua consulta!`);
});

// Exporta o objeto router para seu utilizado externamente
export const ClienteController: Router = router;
