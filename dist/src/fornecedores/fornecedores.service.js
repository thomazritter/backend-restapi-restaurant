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
exports.FornecedoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FornecedoresService = class FornecedoresService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFornecedoreDto) {
        return this.prisma.fornecedor.create({ data: createFornecedoreDto });
    }
    findAll() {
        return this.prisma.fornecedor.findMany();
    }
    findOne(fornecedor_id) {
        return this.prisma.fornecedor.findUnique({ where: { fornecedor_id } });
    }
    update(fornecedor_id, updateFornecedoreDto) {
        return this.prisma.fornecedor.update({
            where: { fornecedor_id },
            data: updateFornecedoreDto,
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