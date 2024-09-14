import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FuncionariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFuncionarioDto: CreateFuncionarioDto): string;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Funcionario[]>;
    findOne(funcionario_id: number): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario, never>;
    update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): string;
    remove(id: number): string;
}
