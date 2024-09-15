import { CategoriaprodutoService } from './categoriaproduto.service';
import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';
export declare class CategoriaprodutoController {
    private readonly categoriaprodutoService;
    constructor(categoriaprodutoService: CategoriaprodutoService);
    create(createCategoriaprodutoDto: CreateCategoriaProdutoDto): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Categoria_Produto[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
    update(id: string, updateCategoriaprodutoDto: UpdateCategoriaProdutoDto): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
}
