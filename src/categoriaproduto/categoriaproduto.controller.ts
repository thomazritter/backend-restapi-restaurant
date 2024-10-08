import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaprodutoService } from './categoriaproduto.service';
import { CreateCategoriaProdutoDto } from './dto/create-categoriaproduto.dto';
import { UpdateCategoriaProdutoDto } from './dto/update-categoriaproduto.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('categoriaproduto')
@ApiTags('categoriaproduto')
export class CategoriaprodutoController {
  constructor(private readonly categoriaprodutoService: CategoriaprodutoService) {}

  @Post()
  create(@Body() createCategoriaprodutoDto: CreateCategoriaProdutoDto) {
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
  update(@Param('id') id: string, @Body() updateCategoriaprodutoDto: UpdateCategoriaProdutoDto) {
    return this.categoriaprodutoService.update(+id, updateCategoriaprodutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaprodutoService.remove(+id);
  }
}
