import { FornecedoresService } from './fornecedores.service';
import { CreateFornecedoreDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedore.dto';
export declare class FornecedoresController {
    private readonly fornecedoresService;
    constructor(fornecedoresService: FornecedoresService);
    create(createFornecedoreDto: CreateFornecedoreDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFornecedoreDto: UpdateFornecedoreDto): string;
    remove(id: string): string;
}
