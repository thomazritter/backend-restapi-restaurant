import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createClienteDto: CreateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Cliente & {
        pedidos: import(".prisma/client").Pedido[];
    })[]>;
    findOne(cliente_id: number): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente & {
        pedidos: import(".prisma/client").Pedido[];
    }, never>;
    update(cliente_id: number, updateClienteDto: UpdateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
    remove(cliente_id: number): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
}
