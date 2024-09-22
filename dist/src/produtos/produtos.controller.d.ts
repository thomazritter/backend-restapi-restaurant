import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
export declare class ProdutosController {
    private readonly produtosService;
    constructor(produtosService: ProdutosService);
    create(createProdutoDto: CreateProdutoDto): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Produto & {
        fornecedores: import(".prisma/client").Fornecedor[];
        categoria: import(".prisma/client").Categoria_Produto;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto & {
        fornecedores: import(".prisma/client").Fornecedor[];
        categoria: import(".prisma/client").Categoria_Produto;
    }, never>;
    update(id: string, updateProdutoDto: UpdateProdutoDto): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto, never>;
}
