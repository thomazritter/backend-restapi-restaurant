import { CreateFornecedorDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedore.dto';
export declare class FornecedoresService {
    create(createFornecedoreDto: CreateFornecedorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFornecedoreDto: UpdateFornecedorDto): string;
    remove(id: number): string;
}
