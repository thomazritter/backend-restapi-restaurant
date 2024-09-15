import { Module } from '@nestjs/common';
import { CategoriaprodutoService } from './categoriaproduto.service';
import { CategoriaprodutoController } from './categoriaproduto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategoriaprodutoController],
  providers: [CategoriaprodutoService],
  imports: [PrismaModule],
})
export class CategoriaprodutoModule {}
