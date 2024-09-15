import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  create(createProdutoDto: CreateProdutoDto) {
    return this.prisma.produto.create({ data: createProdutoDto });
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(produto_id: number) {
    return this.prisma.produto.findUnique({ where: { produto_id }});
  }

  update(produto_id: number, updateProdutoDto: UpdateProdutoDto) {
    return this.prisma.produto.update({
      where: { produto_id },
      data: updateProdutoDto,
    });
  }

  remove(produto_id: number) {
    return this.prisma.produto.delete({ where: { produto_id }});
  }
}
