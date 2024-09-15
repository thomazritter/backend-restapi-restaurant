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
exports.FuncionariosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FuncionariosService = class FuncionariosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createFuncionarioDto) {
        return this.prisma.funcionario.create({ data: createFuncionarioDto });
    }
    findAll() {
        return this.prisma.funcionario.findMany();
    }
    findOne(funcionario_id) {
        return this.prisma.funcionario.findUnique({ where: { funcionario_id } });
    }
    update(funcionario_id, updateFuncionarioDto) {
        return this.prisma.funcionario.update({
            where: { funcionario_id },
            data: updateFuncionarioDto,
        });
    }
    remove(funcionario_id) {
        return this.prisma.funcionario.delete({ where: { funcionario_id } });
    }
};
FuncionariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FuncionariosService);
exports.FuncionariosService = FuncionariosService;
//# sourceMappingURL=funcionarios.service.js.map