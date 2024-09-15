import { Module } from '@nestjs/common';
import { ItempedidoService } from './itempedido.service';
import { ItempedidoController } from './itempedido.controller';
import { PrismaModule } from 'src/prisma/prisma.module';  

@Module({
  controllers: [ItempedidoController],
  providers: [ItempedidoService],
  imports: [PrismaModule],
})
export class ItempedidoModule {}
