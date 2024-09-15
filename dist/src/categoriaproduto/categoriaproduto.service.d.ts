import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';
export declare class CategoriaprodutoService {
    create(createCategoriaprodutoDto: CreateCategoriaProdutoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCategoriaprodutoDto: UpdateCategoriaProdutoDto): string;
    remove(id: number): string;
}
