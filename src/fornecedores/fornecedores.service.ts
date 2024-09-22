import { Injectable } from '@nestjs/common';
import { CreateFornecedorDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedore.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FornecedoresService {
  constructor(private prisma: PrismaService) {}

  create(createFornecedorDto: CreateFornecedorDto) {
    const { produtos, ...fornecedorData } = createFornecedorDto;
  
    return this.prisma.fornecedor.create({
      data: {
        ...fornecedorData,
        produtos: produtos
          ? {
              connect: produtos.map(produto => ({ produto_id: produto.produto_id })),
            }
          : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.fornecedor.findMany({
      include: {
        produtos: true // Include related products for each supplier
      }
    });
  }  

  findOne(fornecedor_id: number) {
    return this.prisma.fornecedor.findUnique({
      where: { fornecedor_id },
      include: {
        produtos: true // Include related products for the specific supplier
      }
    });
  }
  

  update(fornecedor_id: number, updateFornecedorDto: UpdateFornecedorDto) {
    const { produtos, ...fornecedorData } = updateFornecedorDto;
  
    return this.prisma.fornecedor.update({
      where: { fornecedor_id },
      data: {
        ...fornecedorData,
        produtos: produtos
          ? {
              set: produtos.map(produto => ({ produto_id: produto.produto_id })),
            }
          : undefined,
      },
    });
  }

  remove(fornecedor_id: number) {
    return this.prisma.fornecedor.delete({ where: { fornecedor_id }});
  }
}
