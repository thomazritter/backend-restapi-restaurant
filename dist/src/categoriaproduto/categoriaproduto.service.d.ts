import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CategoriaprodutoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCategoriaprodutoDto: CreateCategoriaProdutoDto): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Categoria_Produto[]>;
    findOne(categoria_id: number): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
    update(categoria_id: number, updateCategoriaprodutoDto: UpdateCategoriaProdutoDto): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
    remove(categoria_id: number): import(".prisma/client").Prisma.Prisma__Categoria_ProdutoClient<import(".prisma/client").Categoria_Produto, never>;
}
