import { CreateFornecedoreDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedore.dto';
export declare class FornecedoresService {
    create(createFornecedoreDto: CreateFornecedoreDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFornecedoreDto: UpdateFornecedoreDto): string;
    remove(id: number): string;
}
