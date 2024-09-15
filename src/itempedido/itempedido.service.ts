import { Injectable } from '@nestjs/common';
import { CreateItempedidoDto } from './dto/create-itempedido.dto';
import { UpdateItempedidoDto } from './dto/update-itempedido.dto';

@Injectable()
export class ItempedidoService {
  create(createItempedidoDto: CreateItempedidoDto) {
    return 'This action adds a new itempedido';
  }

  findAll() {
    return `This action returns all itempedido`;
  }

  findOne(id: number) {
    return `This action returns a #${id} itempedido`;
  }

  update(id: number, updateItempedidoDto: UpdateItempedidoDto) {
    return `This action updates a #${id} itempedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} itempedido`;
  }
}
