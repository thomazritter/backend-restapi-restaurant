import { Injectable } from '@nestjs/common';
import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItempedidoService {
  constructor(private prisma: PrismaService) {}

  create(createItempedidoDto: CreateItemPedidoDto) {
    return this.prisma.item_Pedido.create({ data: createItempedidoDto });
  }

  findAll() {
    return this.prisma.item_Pedido.findMany();
  }

  findOne(item_pedido_id: number) {
    return this.prisma.item_Pedido.findUnique({ where: { item_pedido_id }});
  }

  update(item_pedido_id: number, updateItempedidoDto: UpdateItemPedidoDto) {
    return this.prisma.item_Pedido.update({
      where: { item_pedido_id },
      data: updateItempedidoDto,
    });
  }

  remove(item_pedido_id: number) {
    return this.prisma.item_Pedido.delete({ where: { item_pedido_id }});
  }
}
