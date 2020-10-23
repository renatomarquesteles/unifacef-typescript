"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fornecedores_1 = require("../controllers/fornecedores");
const router = express_1.Router();
router.get('/fornecedores', fornecedores_1.getFornecedores);
router.post('/add-fornecedor', fornecedores_1.addFornecedor);
exports.default = router;
