import { Module } from '@nestjs/common';
import { CategoriaprodutoService } from './categoriaproduto.service';
import { CategoriaprodutoController } from './categoriaproduto.controller';

@Module({
  controllers: [CategoriaprodutoController],
  providers: [CategoriaprodutoService]
})
export class CategoriaprodutoModule {}
