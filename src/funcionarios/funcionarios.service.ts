import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionariosService {
  constructor(private prisma: PrismaService) {}

  create(createFuncionarioDto: CreateFuncionarioDto) {
    return this.prisma.funcionario.create({ data: createFuncionarioDto});
  }

  findAll() {
    return this.prisma.funcionario.findMany({
      include: {
        pedidos: true, // Include related orders
      }
    });
  }
  
  findOne(funcionario_id: number) {
    return this.prisma.funcionario.findUnique({
      where: { funcionario_id },
      include: {
        pedidos: true, // Include related orders
      }
    });
  }  

  update(funcionario_id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    return this.prisma.funcionario.update({
      where: { funcionario_id },
      data: updateFuncionarioDto,
    });
  }

  remove(funcionario_id: number) {
    return this.prisma.funcionario.delete({ where: { funcionario_id }});
  }
}
