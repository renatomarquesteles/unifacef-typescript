// Importa o express
import * as express from 'express';
// Importa o bodyParser
import * as bodyParser from 'body-parser';
import mongoose = require('mongoose');

import routes from './routes';

// Cria uma instância do express
const server: express.Application = express();

// Configura o servidor com o bodyParser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(routes)

// Define a porta
const porta = 3003;

const uri: string = 'mongodb://localhost:27017';

// Conecta com o MongoDB
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
