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
exports.criarUsuarioController = void 0;
const userServices_1 = require("../services/userServices");
const criarUsuarioController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, nome, email } = req.body;
        const usuario = yield (0, userServices_1.criarUsuario)(id, nome, email);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
});
exports.criarUsuarioController = criarUsuarioController;