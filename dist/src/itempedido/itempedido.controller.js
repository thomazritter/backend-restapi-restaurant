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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItempedidoController = void 0;
const common_1 = require("@nestjs/common");
const itempedido_service_1 = require("./itempedido.service");
const create_itempedido_dto_1 = require("./dto/create-itempedido.dto");
const update_itempedido_dto_1 = require("./dto/update-itempedido.dto");
let ItempedidoController = class ItempedidoController {
    constructor(itempedidoService) {
        this.itempedidoService = itempedidoService;
    }
    create(createItempedidoDto) {
        return this.itempedidoService.create(createItempedidoDto);
    }
    findAll() {
        return this.itempedidoService.findAll();
    }
    findOne(id) {
        return this.itempedidoService.findOne(+id);
    }
    update(id, updateItempedidoDto) {
        return this.itempedidoService.update(+id, updateItempedidoDto);
    }
    remove(id) {
        return this.itempedidoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_itempedido_dto_1.CreateItemPedidoDto]),
    __metadata("design:returntype", void 0)
], ItempedidoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ItempedidoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItempedidoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_itempedido_dto_1.UpdateItemPedidoDto]),
    __metadata("design:returntype", void 0)
], ItempedidoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ItempedidoController.prototype, "remove", null);
ItempedidoController = __decorate([
    (0, common_1.Controller)('itempedido'),
    __metadata("design:paramtypes", [itempedido_service_1.ItempedidoService])
], ItempedidoController);
exports.ItempedidoController = ItempedidoController;
//# sourceMappingURL=itempedido.controller.js.map