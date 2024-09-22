import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Pedido & {
        itens_pedido: (import(".prisma/client").Item_Pedido & {
            produto: import(".prisma/client").Produto;
        })[];
        cliente: import(".prisma/client").Cliente;
        funcionario: import(".prisma/client").Funcionario;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido & {
        itens_pedido: (import(".prisma/client").Item_Pedido & {
            produto: import(".prisma/client").Produto;
        })[];
        cliente: import(".prisma/client").Cliente;
        funcionario: import(".prisma/client").Funcionario;
    }, never>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
}
