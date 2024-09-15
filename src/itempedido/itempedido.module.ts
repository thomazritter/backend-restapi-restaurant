import { Module } from '@nestjs/common';
import { ItempedidoService } from './itempedido.service';
import { ItempedidoController } from './itempedido.controller';

@Module({
  controllers: [ItempedidoController],
  providers: [ItempedidoService]
})
export class ItempedidoModule {}
