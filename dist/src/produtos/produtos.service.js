"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProdutosService = class ProdutosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createProdutoDto) {
        return this.prisma.produto.create({ data: createProdutoDto });
    }
    findAll() {
        return this.prisma.produto.findMany();
    }
    findOne(produto_id) {
        return this.prisma.produto.findUnique({ where: { produto_id } });
    }
    update(produto_id, updateProdutoDto) {
        return this.prisma.produto.update({
            where: { produto_id },
            data: updateProdutoDto,
        });
    }
    remove(produto_id) {
        return this.prisma.produto.delete({ where: { produto_id } });
    }
};
ProdutosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProdutosService);
exports.ProdutosService = ProdutosService;
//# sourceMappingURL=produtos.service.js.map