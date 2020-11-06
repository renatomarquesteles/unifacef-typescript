"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const routes_1 = require("./routes");
const server = express();
server.use(bodyParser.json());
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(routes_1.default);
const porta = 3000;
const uri = 'mongodb://localhost:27017';
mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => server.listen(porta, () => console.log(`Servidor ouvindo na porta ${porta}`)))
    .catch(error => {
    throw error;
});
