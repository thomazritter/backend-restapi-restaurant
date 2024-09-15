import { Injectable } from '@nestjs/common';
import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';

@Injectable()
export class ItempedidoService {
  create(createItempedidoDto: CreateItemPedidoDto) {
    return 'This action adds a new itempedido';
  }

  findAll() {
    return `This action returns all itempedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itempedido`;
  }

  update(id: number, updateItempedidoDto: UpdateItemPedidoDto) {
    return `This action updates a #${id} itempedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} itempedido`;
  }
}
