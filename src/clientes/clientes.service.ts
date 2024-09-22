import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  create(createClienteDto: CreateClienteDto) {
    return this.prisma.cliente.create({ data: createClienteDto });
  }

  findAll() {
    return this.prisma.cliente.findMany({
      include: {
        pedidos: true, // Include related orders
      }
    });
  }
  
  findOne(cliente_id: number) {
    return this.prisma.cliente.findUnique({
      where: { cliente_id },
      include: {
        pedidos: true, // Include related orders
      }
    });
  }  

  update(cliente_id: number, updateClienteDto: UpdateClienteDto) {
    return this.prisma.cliente.update({
      where: { cliente_id },
      data: updateClienteDto,
    });
  }

  remove(cliente_id: number) {
    return this.prisma.cliente.delete({ where: { cliente_id }});
  }
}
