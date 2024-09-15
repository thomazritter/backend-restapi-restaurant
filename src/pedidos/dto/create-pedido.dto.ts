import { ApiProperty } from '@nestjs/swagger';
import { CreateItempedidoDto } from 'src/itempedido/dto/create-itempedido.dto';  // Adjust path as necessary


export class CreatePedidoDto {
  @ApiProperty()
  data_pedido: string;

  @ApiProperty()
  valor_total: number;

  @ApiProperty()  // cliente_id from Cliente model
  cliente_id: number;

  @ApiProperty()  // funcionario_id from Funcionario model
  funcionario_id: number;

  @ApiProperty({ type: [CreateItempedidoDto], isArray: true})  // List of item IDs
  itens_pedido: CreateItempedidoDto[];  // Assuming you only pass the IDs of Item_Pedido
}