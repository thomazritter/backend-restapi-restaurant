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
          connect: { categoria_id }, // Connect to the existing category
        },
        // Handle connecting and disconnecting the suppliers
        fornecedores: fornecedores?.length > 0
          ? {
              set: fornecedores.map(fornecedor_id => ({ fornecedor_id })), // Set the new fornecedores list
            }
          : undefined, // Avoid resetting if fornecedores is not provided
      },
    });
  }
  

create(createProdutoDto: CreateProdutoDto) {
  const { fornecedores, categoria_id, ...produtoData } = createProdutoDto;

  return this.prisma.produto.create({
    data: {
      ...produtoData,
      categoria: {
        connect: { categoria_id },
      },
      fornecedores: fornecedores?.length > 0
        ? {
            connect: fornecedores.map(fornecedor_id => ({
              fornecedor_id, // Now it directly maps the ID to the correct format
            })),
          }
        : undefined, // Handle case where no fornecedores are provided
    },
  });
}

findAll() {
  return this.prisma.produto.findMany({
    include: {
      categoria: true,  // This will include all category details
      fornecedores: true // This will include all associated suppliers
    }
  });
}

findOne(produto_id: number) {
  return this.prisma.produto.findUnique({
    where: { produto_id },
    include: {
      categoria: true, // Include full category details
      fornecedores: true // Include all associated suppliers
    }
  });
}

  remove(produto_id: number) {
    return this.prisma.produto.delete({ where: { produto_id }});
  }
}
