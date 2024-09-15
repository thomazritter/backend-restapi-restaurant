import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PedidosService {
  constructor(private prisma: PrismaService) {}

  create(createPedidoDto: CreatePedidoDto) {
    return this.prisma.pedido.create({ data: createPedidoDto });
  }

  findAll() {
    return this.prisma.pedido.findMany();
  }

  findOne(pedido_id: number) {
    return this.prisma.pedido.findUnique({ where: { pedido_id }});
  }

  update(pedido_id: number, updatePedidoDto: UpdatePedidoDto) {
    return this.prisma.pedido.update({
      where: { pedido_id },
      data: updatePedidoDto,
    });
  }

  remove(pedido_id: number) {
    return this.prisma.pedido.delete({ where: { pedido_id }});
  }
}
