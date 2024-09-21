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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProdutosService = class ProdutosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    update(produto_id, updateProdutoDto) {
        const { fornecedores } = updateProdutoDto, produtoData = __rest(updateProdutoDto, ["fornecedores"]);
        return this.prisma.produto.update({
            where: { produto_id },
            data: Object.assign(Object.assign({}, produtoData), { fornecedores: fornecedores
                    ? {
                        set: fornecedores.map((fornecedor) => ({
                            fornecedor_id: fornecedor.fornecedor_id,
                        })),
                    }
                    : undefined }),
        });
    }
    create(createProdutoDto) {
        const { fornecedores } = createProdutoDto, produtoData = __rest(createProdutoDto, ["fornecedores"]);
        return this.prisma.produto.create({
            data: Object.assign(Object.assign({}, produtoData), { fornecedores: {
                    connect: fornecedores.map(fornecedor => ({
                        fornecedor_id: fornecedor.fornecedor_id,
                    })),
                } }),
        });
    }
    findAll() {
        return this.prisma.produto.findMany();
    }
    findOne(produto_id) {
        return this.prisma.produto.findUnique({ where: { produto_id } });
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