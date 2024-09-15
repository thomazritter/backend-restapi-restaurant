import { Module } from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { FornecedoresController } from './fornecedores.controller';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  controllers: [FornecedoresController],
  providers: [FornecedoresService],
  imports: [PrismaModule],
})
export class FornecedoresModule {}
