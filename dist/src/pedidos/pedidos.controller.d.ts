import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Pedido[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<import(".prisma/client").Pedido, never>;
}
