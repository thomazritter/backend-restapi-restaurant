import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private prisma: PrismaService) {}

  
update(produto_id: number, updateProdutoDto: UpdateProdutoDto) {
  const { fornecedores, categoria_id, ...produtoData } = updateProdutoDto;

  return this.prisma.produto.update({
    where: { produto_id },
    data: {
      ...produtoData,
      // Handle updating the category
      categoria: {
        connect: { categoria_id },  // Connect to the existing category
      },
      // Handle connecting the suppliers
      fornecedores: {
        connect: fornecedores?.map(fornecedor => ({
          fornecedor_id: fornecedor.fornecedor_id,
        })),
        disconnect: [], // If you want to disconnect previously connected suppliers, you can specify them here.
      },
    },
  });
}

create(createProdutoDto: CreateProdutoDto) {
  const { fornecedores, categoria_id, ...produtoData } = createProdutoDto;

  return this.prisma.produto.create({
    data: {
      ...produtoData,
      // Handle the category connection
      categoria: {
        connect: { categoria_id }, // Assuming categoria_id is a number
      },
      // Handle the suppliers connection
      fornecedores: {
        connect: fornecedores?.map(fornecedor => ({
          fornecedor_id: fornecedor.fornecedor_id, // Ensure this is a number
        })) || [], // Default to an empty array if fornecedores is undefined
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
