"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFornecedor = exports.getFornecedores = void 0;
const Fornecedor_1 = require("../../models/Fornecedor");
exports.getFornecedores = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fornecedores = yield Fornecedor_1.default.find();
        response.status(200).json({ fornecedores });
    }
    catch (error) {
        throw error;
    }
});
exports.addFornecedor = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = request.body;
        const fornecedor = new Fornecedor_1.default({
            cnpj: body.cnpj,
            razaoSocial: body.razaoSocial,
        });
        const newFornecedor = yield fornecedor.save();
        const allFornecedores = yield Fornecedor_1.default.find();
        response.status(201).json({
            message: 'Fornecedor inserido com sucesso',
            fornecedor: newFornecedor,
            fornecedores: allFornecedores,
        });
    }
    catch (error) {
        throw error;
    }
});
