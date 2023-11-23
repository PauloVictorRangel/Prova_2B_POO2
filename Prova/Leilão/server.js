"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./src/controllers/userController");
const lanceController_1 = require("./src/controllers/lanceController");
const leilaoController_1 = require("./src/controllers/leilaoController");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
app.post('/usuarios', userController_1.criarUsuarioController);
app.post('/lances', lanceController_1.criarLanceController);
app.post('/leiloes', leilaoController_1.criarLeilaoController);