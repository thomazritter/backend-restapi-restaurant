import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaprodutoService } from './categoriaproduto.service';
import { CreateCategoriaprodutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaprodutoDto } from './dto/update-categoriaproduto.dto';

@Controller('categoriaproduto')
export class CategoriaprodutoController {
  constructor(private readonly categoriaprodutoService: CategoriaprodutoService) {}

  @Post()
  create(@Body() createCategoriaprodutoDto: CreateCategoriaprodutoDto) {
    return this.categoriaprodutoService.create(createCategoriaprodutoDto);
  }

  @Get()
  findAll() {
    return this.categoriaprodutoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaprodutoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaprodutoDto: UpdateCategoriaprodutoDto) {
    return this.categoriaprodutoService.update(+id, updateCategoriaprodutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaprodutoService.remove(+id);
  }
}
