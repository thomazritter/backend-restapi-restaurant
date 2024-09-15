import { Injectable } from '@nestjs/common';
import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';

@Injectable()
export class CategoriaprodutoService {
  create(createCategoriaprodutoDto: CreateCategoriaProdutoDto) {
    return 'This action adds a new categoriaproduto';
  }

  findAll() {
    return `This action returns all categoriaproduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaproduto`;
  }

  update(id: number, updateCategoriaprodutoDto: UpdateCategoriaProdutoDto) {
    return `This action updates a #${id} categoriaproduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaproduto`;
  }
}
