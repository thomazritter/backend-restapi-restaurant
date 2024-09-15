import { Injectable } from '@nestjs/common';
import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriaprodutoService {
  constructor(private prisma: PrismaService) {}

  create(createCategoriaprodutoDto: CreateCategoriaProdutoDto) {
    return this.prisma.categoria_Produto.create( { data: createCategoriaprodutoDto });
  }

  findAll() {
    return this.prisma.categoria_Produto.findMany();
  }

  findOne(categoria_id: number) {
    return this.prisma.categoria_Produto.findUnique({where: { categoria_id }});
  }

  update(categoria_id: number, updateCategoriaprodutoDto: UpdateCategoriaProdutoDto) {
    return this.prisma.categoria_Produto.update({
      where: { categoria_id },
      data: updateCategoriaprodutoDto,
    });
  }

  remove(categoria_id: number) {
    return this.prisma.categoria_Produto.delete({ where: { categoria_id }});
  }
}
