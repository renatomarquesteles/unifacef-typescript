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
exports.deleteFornecedor = exports.updateFornecedor = exports.addFornecedor = exports.getFornecedores = void 0;
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
            message: "Fornecedor inserido com sucesso",
            fornecedor: newFornecedor,
            fornecedores: allFornecedores,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Recupera o id do front end
        const { params: { id }, body } = req;
        // Atualiza fornecedor com id com o valor que vem do body
        const updatedFornecedor = yield Fornecedor_1.default.findByIdAndUpdate({ _id: id }, body);
        // Recupera todos os fornecedores, inclusive contendo o fornecedor atualizado
        const allFornecedores = yield Fornecedor_1.default.find();
        // Devolve a resposta
        res.status(200).json({
            message: 'Fornecedor atualizado',
            fornecedor: updatedFornecedor,
            fornecedores: allFornecedores,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteFornecedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // Remove o fornecedor com id com o valor que vem do body
        const deletedFornecedor = yield Fornecedor_1.default.findByIdAndRemove(id);
        // Recupera todos os fornecedores, menos o fornecedor removido
        const allFornecedores = yield Fornecedor_1.default.find();
        // Devolve a resposta
        res.status(200).json({
            message: 'Fornecedor removido',
            fornecedor: deletedFornecedor,
            fornecedores: allFornecedores,
        });
    }
    catch (error) {
        throw error;
    }
});
