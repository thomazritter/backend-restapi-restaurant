import { FuncionariosService } from './funcionarios.service';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
export declare class FuncionariosController {
    private readonly funcionariosService;
    constructor(funcionariosService: FuncionariosService);
    create(createFuncionarioDto: CreateFuncionarioDto): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
    }, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
        pedidos: import(".prisma/client").Pedido[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
        pedidos: import(".prisma/client").Pedido[];
    }, never>;
    update(id: number, updateFuncionarioDto: UpdateFuncionarioDto): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario & {
        funcionarioDetails: import(".prisma/client").FuncionarioDetails;
    }, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__FuncionarioClient<import(".prisma/client").Funcionario, never>;
}
