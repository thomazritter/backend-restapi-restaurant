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
exports.FornecedoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FornecedoresService = class FornecedoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFornecedorDto) {
        const { produtos } = createFornecedorDto, fornecedorData = __rest(createFornecedorDto, ["produtos"]);
        return this.prisma.fornecedor.create({
            data: Object.assign(Object.assign({}, fornecedorData), { produtos: produtos
                    ? {
                        connect: produtos.map(produto => ({ produto_id: produto.produto_id })),
                    }
                    : undefined }),
        });
    }
    findAll() {
        return this.prisma.fornecedor.findMany({
            include: {
                produtos: true
            }
        });
    }
    findOne(fornecedor_id) {
        return this.prisma.fornecedor.findUnique({
            where: { fornecedor_id },
            include: {
                produtos: true
            }
        });
    }
    update(fornecedor_id, updateFornecedorDto) {
        const { produtos } = updateFornecedorDto, fornecedorData = __rest(updateFornecedorDto, ["produtos"]);
        return this.prisma.fornecedor.update({
            where: { fornecedor_id },
            data: Object.assign(Object.assign({}, fornecedorData), { produtos: produtos
                    ? {
                        set: produtos.map(produto => ({ produto_id: produto.produto_id })),
                    }
                    : undefined }),
        });
    }
    remove(fornecedor_id) {
        return this.prisma.fornecedor.delete({ where: { fornecedor_id } });
    }
};
FornecedoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FornecedoresService);
exports.FornecedoresService = FornecedoresService;
//# sourceMappingURL=fornecedores.service.js.map