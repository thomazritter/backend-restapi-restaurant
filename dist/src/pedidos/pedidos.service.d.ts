import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PedidosService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPedidoDto: CreatePedidoDto): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Pedido & {
        itens_pedido: (import(".prisma/client").Item_Pedido & {
            produto: import(".prisma/client").Produto;
        })[];
        cliente: import(".prisma/client").Cliente;
        funcionario: import(".prisma/client").Funcionario;
    })[]>;
    findOne(pedido_id: number): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido & {
        itens_pedido: (import(".prisma/client").Item_Pedido & {
            produto: import(".prisma/client").Produto;
        })[];
        cliente: import(".prisma/client").Cliente;
        funcionario: import(".prisma/client").Funcionario;
    }, never>;
    update(pedido_id: number, updatePedidoDto: UpdatePedidoDto): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    remove(pedido_id: number): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
}
