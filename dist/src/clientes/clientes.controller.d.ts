import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Cliente[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
    update(id: string, updateClienteDto: UpdateClienteDto): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ClienteClient<import(".prisma/client").Cliente, never>;
}
