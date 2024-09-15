import { CategoriaprodutoService } from './categoriaproduto.service';
import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';
export declare class CategoriaprodutoController {
    private readonly categoriaprodutoService;
    constructor(categoriaprodutoService: CategoriaprodutoService);
    create(createCategoriaprodutoDto: CreateCategoriaProdutoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCategoriaprodutoDto: UpdateCategoriaProdutoDto): string;
    remove(id: string): string;
}
