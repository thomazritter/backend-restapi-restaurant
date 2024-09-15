import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItempedidoService } from './itempedido.service';
import { CreateItemPedidoDto } from './dto/create-itempedido.dto';
import { UpdateItemPedidoDto } from './dto/update-itempedido.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('itempedido')
@ApiTags('itempedido')
export class ItempedidoController {
  constructor(private readonly itempedidoService: ItempedidoService) {}

  @Post()
  create(@Body() createItempedidoDto: CreateItemPedidoDto) {
    return this.itempedidoService.create(createItempedidoDto);
  }

  @Get()
  findAll() {
    return this.itempedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itempedidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateItempedidoDto: UpdateItemPedidoDto) {
    return this.itempedidoService.update(+id, updateItempedidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itempedidoService.remove(+id);
  }
}
