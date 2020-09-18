// Importa o express
import * as express from 'express';
// Importa o bodyParser
import * as bodyParser from 'body-parser';
// Importa o ClienteController
// import { ClienteController } from './cliente.controller';

import mongoose = require('mongoose');

import routes from './routes';

// Cria uma instância do express
const server: express.Application = express();

// Configura o servidor com o bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Monta o ClienteController na rota /cliente
// server.use('/cliente', ClienteController);

server.use(routes)

// Define a porta
const porta = 3003;

const uri: string = 'mongodb://localhost:27017';

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    server.listen(porta, () =>
    console.log(`Servidor ouvindo na porta ${porta}`)
    )
  )
  .catch(error => {
    throw error;
  });
