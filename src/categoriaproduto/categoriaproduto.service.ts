import { Injectable } from '@nestjs/common';
import { CreateCategoriaprodutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaprodutoDto } from './dto/update-categoriaproduto.dto';

@Injectable()
export class CategoriaprodutoService {
  create(createCategoriaprodutoDto: CreateCategoriaprodutoDto) {
    return 'This action adds a new categoriaproduto';
  }

  findAll() {
    return `This action returns all categoriaproduto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoriaproduto`;
  }

  update(id: number, updateCategoriaprodutoDto: UpdateCategoriaprodutoDto) {
    return `This action updates a #${id} categoriaproduto`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoriaproduto`;
  }
}
