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
exports.FornecedoresController = void 0;
const common_1 = require("@nestjs/common");
const fornecedores_service_1 = require("./fornecedores.service");
const create_fornecedore_dto_1 = require("./dto/create-fornecedore.dto");
const update_fornecedore_dto_1 = require("./dto/update-fornecedore.dto");
let FornecedoresController = class FornecedoresController {
    constructor(fornecedoresService) {
        this.fornecedoresService = fornecedoresService;
    }
    create(createFornecedoreDto) {
        return this.fornecedoresService.create(createFornecedoreDto);
    }
    findAll() {
        return this.fornecedoresService.findAll();
    }
    findOne(id) {
        return this.fornecedoresService.findOne(+id);
    }
    update(id, updateFornecedoreDto) {
        return this.fornecedoresService.update(+id, updateFornecedoreDto);
    }
    remove(id) {
        return this.fornecedoresService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_fornecedore_dto_1.CreateFornecedoreDto]),
    __metadata("design:returntype", void 0)
], FornecedoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FornecedoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FornecedoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_fornecedore_dto_1.UpdateFornecedoreDto]),
    __metadata("design:returntype", void 0)
], FornecedoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FornecedoresController.prototype, "remove", null);
FornecedoresController = __decorate([
    (0, common_1.Controller)('fornecedores'),
    __metadata("design:paramtypes", [fornecedores_service_1.FornecedoresService])
], FornecedoresController);
exports.FornecedoresController = FornecedoresController;
//# sourceMappingURL=fornecedores.controller.js.map