import { ItempedidoService } from './itempedido.service';
import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';
export declare class ItempedidoController {
    private readonly itempedidoService;
    constructor(itempedidoService: ItempedidoService);
    create(createItempedidoDto: CreateItemPedidoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateItempedidoDto: UpdateItemPedidoDto): string;
    remove(id: string): string;
}
