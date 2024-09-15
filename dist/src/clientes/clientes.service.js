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
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClientesService = class ClientesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createClienteDto) {
        return this.prisma.cliente.create({ data: createClienteDto });
    }
    findAll() {
        return this.prisma.cliente.findMany();
    }
    findOne(cliente_id) {
        return this.prisma.cliente.findUnique({ where: { cliente_id } });
    }
    update(cliente_id, updateClienteDto) {
        return this.prisma.cliente.update({
            where: { cliente_id },
            data: updateClienteDto,
        });
    }
    remove(cliente_id) {
        return this.prisma.cliente.delete({ where: { cliente_id } });
    }
};
ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientesService);
exports.ClientesService = ClientesService;
//# sourceMappingURL=clientes.service.js.map