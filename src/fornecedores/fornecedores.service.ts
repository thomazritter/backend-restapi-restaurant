import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FornecedoresService {
  constructor(private prisma: PrismaService) {}

  create(createFornecedoreDto: CreateFornecedorDto) {
    return this.prisma.fornecedor.create({ data: createFornecedoreDto });
  }

  findAll() {
    return this.prisma.fornecedor.findMany();
  }

  findOne(fornecedor_id: number) {
    return this.prisma.fornecedor.findUnique({ where: { fornecedor_id }});
  }

  update(fornecedor_id: number, updateFornecedoreDto: UpdateFornecedorDto) {
    return this.prisma.fornecedor.update({
      where: { fornecedor_id },
      data: updateFornecedoreDto,
    });
  }

  remove(fornecedor_id: number) {
    return this.prisma.fornecedor.delete({ where: { fornecedor_id }});
  }
}
