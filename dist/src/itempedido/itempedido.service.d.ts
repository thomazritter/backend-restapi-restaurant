import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';
export declare class ItempedidoService {
    create(createItempedidoDto: CreateItemPedidoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateItempedidoDto: UpdateItemPedidoDto): string;
    remove(id: number): string;
}
