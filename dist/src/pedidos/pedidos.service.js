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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PedidosService = class PedidosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createPedidoDto) {
        return this.prisma.pedido.create({ data: createPedidoDto });
    }
    findAll() {
        return this.prisma.pedido.findMany({
            include: {
                cliente: true,
                funcionario: true,
                itens_pedido: {
                    include: {
                        produto: true,
                    }
                }
            }
        });
    }
    findOne(pedido_id) {
        return this.prisma.pedido.findUnique({
            where: { pedido_id },
            include: {
                cliente: true,
                funcionario: true,
                itens_pedido: {
                    include: {
                        produto: true,
                    }
                }
            }
        });
    }
    update(pedido_id, updatePedidoDto) {
        return this.prisma.pedido.update({
            where: { pedido_id },
            data: updatePedidoDto,
        });
    }
    remove(pedido_id) {
        return this.prisma.pedido.delete({ where: { pedido_id } });
    }
};
PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidosService);
exports.PedidosService = PedidosService;
//# sourceMappingURL=pedidos.service.js.map