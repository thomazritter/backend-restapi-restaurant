import { CreateFornecedorDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FornecedoresService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFornecedoreDto: CreateFornecedorDto): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Fornecedor[]>;
    findOne(fornecedor_id: number): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
    update(fornecedor_id: number, updateFornecedoreDto: UpdateFornecedorDto): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
    remove(fornecedor_id: number): import(".prisma/client").Prisma.Prisma__FornecedorClient<import(".prisma/client").Fornecedor, never>;
}
