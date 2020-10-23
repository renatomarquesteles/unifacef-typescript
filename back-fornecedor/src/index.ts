import * as express from 'express';
import * as bodyParser from 'body-parser';
import mongoose = require('mongoose');
import cors from 'cors';

import routes from './routes';

const server: express.Application = express();

server.use(bodyParser.json());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use(routes)

const porta = 3000;

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
