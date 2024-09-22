import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProdutosService {
    private prisma;
    constructor(prisma: PrismaService);
    update(produto_id: number, updateProdutoDto: UpdateProdutoDto): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto, never>;
    create(createProdutoDto: CreateProdutoDto): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Produto & {
        categoria: import(".prisma/client").Categoria_Produto;
        fornecedores: import(".prisma/client").Fornecedor[];
    })[]>;
    findOne(produto_id: number): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto & {
        categoria: import(".prisma/client").Categoria_Produto;
        fornecedores: import(".prisma/client").Fornecedor[];
    }, never>;
    remove(produto_id: number): import(".prisma/client").Prisma.Prisma__ProdutoClient<import(".prisma/client").Produto, never>;
}
