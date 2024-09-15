import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ItempedidoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createItempedidoDto: CreateItemPedidoDto): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Item_Pedido[]>;
    findOne(item_pedido_id: number): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
    update(item_pedido_id: number, updateItempedidoDto: UpdateItemPedidoDto): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
    remove(item_pedido_id: number): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
}
