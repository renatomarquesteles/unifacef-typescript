// Importa o express
import * as express from 'express';
// Importa o bodyParser
import * as bodyParser from 'body-parser';
// Importa o ClienteController
// import { ClienteController } from './cliente.controller';

import clientRoutes from './routes';

// Cria uma instância do express
const server: express.Application = express();

// Configura o servidor com o bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Monta o ClienteController na rota /cliente
// server.use('/cliente', ClienteController);
server.use(clientRoutes)

// Define a porta
const porta = 3003;

// Sobe o servidor para ficar ouvindo
server.listen(porta, () => {
  // Responde o callback
  console.log(`Servidor ouvindo na porta ${porta}`);
});
