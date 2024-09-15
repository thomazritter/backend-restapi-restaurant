import { FornecedoresService } from './fornecedores.service';
import { CreateFornecedorDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedore.dto';
export declare class FornecedoresController {
    private readonly fornecedoresService;
    constructor(fornecedoresService: FornecedoresService);
    create(createFornecedoreDto: CreateFornecedorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFornecedoreDto: UpdateFornecedorDto): string;
    remove(id: string): string;
}
