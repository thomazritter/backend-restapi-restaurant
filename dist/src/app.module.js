"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const funcionarios_module_1 = require("./funcionarios/funcionarios.module");
const pedidos_module_1 = require("./pedidos/pedidos.module");
const clientes_module_1 = require("./clientes/clientes.module");
const produtos_module_1 = require("./produtos/produtos.module");
const fornecedores_module_1 = require("./fornecedores/fornecedores.module");
const itempedido_module_1 = require("./itempedido/itempedido.module");
const categoriaproduto_module_1 = require("./categoriaproduto/categoriaproduto.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, funcionarios_module_1.FuncionariosModule, pedidos_module_1.PedidosModule, clientes_module_1.ClientesModule, produtos_module_1.ProdutosModule, fornecedores_module_1.FornecedoresModule, itempedido_module_1.ItempedidoModule, categoriaproduto_module_1.CategoriaprodutoModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map