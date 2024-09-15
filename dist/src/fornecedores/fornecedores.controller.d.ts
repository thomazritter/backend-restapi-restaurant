import { FornecedoresService } from './fornecedores.service';
import { CreateFornecedorDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedore.dto';
export declare class FornecedoresController {
    private readonly fornecedoresService;
    constructor(fornecedoresService: FornecedoresService);
    create(createFornecedoreDto: CreateFornecedorDto): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Fornecedor[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
    update(id: string, updateFornecedoreDto: UpdateFornecedorDto): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
}
