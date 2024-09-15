import { ItempedidoService } from './itempedido.service';
import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';
export declare class ItempedidoController {
    private readonly itempedidoService;
    constructor(itempedidoService: ItempedidoService);
    create(createItempedidoDto: CreateItemPedidoDto): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Item_Pedido[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
    update(id: string, updateItempedidoDto: UpdateItemPedidoDto): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__Item_PedidoClient<import(".prisma/client").Item_Pedido, never>;
}
