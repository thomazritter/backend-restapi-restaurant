import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  update(produto_id: number, updateProdutoDto: UpdateProdutoDto) {
    const { fornecedores, ...produtoData } = updateProdutoDto;

    return this.prisma.produto.update({
      where: { produto_id },
      data: {
        ...produtoData,
        fornecedores: fornecedores
          ? {
              set: fornecedores.map((fornecedor) => ({
                fornecedor_id: fornecedor.fornecedor_id,
              })),
            }
          : undefined, // Only update fornecedores if provided
      },
    });
  }

  create(createProdutoDto: CreateProdutoDto) {
    const { fornecedores, ...produtoData } = createProdutoDto;
    
    return this.prisma.produto.create({
      data: {
        ...produtoData,
        fornecedores: {
          connect: fornecedores.map(fornecedor => ({
            fornecedor_id: fornecedor.fornecedor_id,
          })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.produto.findMany();
  }

  findOne(produto_id: number) {
    return this.prisma.produto.findUnique({ where: { produto_id }});
  }

  remove(produto_id: number) {
    return this.prisma.produto.delete({ where: { produto_id }});
  }
}
