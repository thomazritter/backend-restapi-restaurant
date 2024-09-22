import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionariosService {
  constructor(private prisma: PrismaService) {}

  create(createFuncionarioDto: CreateFuncionarioDto) {
    const { nome_funcionario, cargo, telefone, email, endereco, data_contratacao, salario } = createFuncionarioDto;
  
    return this.prisma.funcionario.create({
      data: {
        nome_funcionario,
        cargo,
        telefone,
        email,
        endereco,
        funcionarioDetails: {
          create: {
            data_contratacao,
            salario,
          },
        },
      },
      include: {
        funcionarioDetails: true,
      },
    });
  }

  findAll() {
    return this.prisma.funcionario.findMany({
      include: { 
        funcionarioDetails: true,
        pedidos: true
      },
    });
  }
  
  findOne(id: number) {
    return this.prisma.funcionario.findUnique({
      where: { funcionario_id: id },
      include: { 
        funcionarioDetails: true,
        pedidos: true
      },
    });
  }

  update(funcionario_id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    const { nome_funcionario, cargo, telefone, email, endereco, data_contratacao, salario } = updateFuncionarioDto;
  
    return this.prisma.funcionario.update({
      where: { funcionario_id },
      data: {
        nome_funcionario,
        cargo,
        telefone,
        email,
        endereco,
        funcionarioDetails: {
          update: {
            data_contratacao,
            salario,
          },
        },
      },
      include: {
        funcionarioDetails: true,
      },
    });
  }

  remove(funcionario_id: number) {
    return this.prisma.funcionario.delete({ where: { funcionario_id }});
  }
}
