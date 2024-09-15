import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ItempedidoModule } from './itempedido/itempedido.module';

// module serve as a encapsulator
// encapsulate a feature, such as user management

@Module({
  imports: [PrismaModule, FuncionariosModule, PedidosModule, ClientesModule, ProdutosModule, FornecedoresModule, ItempedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
