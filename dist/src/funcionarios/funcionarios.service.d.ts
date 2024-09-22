import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class FuncionariosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createFuncionarioDto: CreateFuncionarioDto): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
    }, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
        pedidos: import(".prisma/client").Pedido[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
        pedidos: import(".prisma/client").Pedido[];
    }, never>;
    update(funcionario_id: number, updateFuncionarioDto: UpdateFuncionarioDto): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
    }, never>;
    remove(funcionario_id: number): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario, never>;
}
