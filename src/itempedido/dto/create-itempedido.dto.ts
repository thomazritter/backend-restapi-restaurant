import { ApiProperty } from "@nestjs/swagger";

export class CreateItemPedidoDto {
    @ApiProperty()
    data_pedido: Date;

    @ApiProperty()
    valor_total: number;

    @ApiProperty()
    produto_id: number; // foreign key to Produto

    @ApiProperty()
    pedido_id: number; // foreign key to Pedido
}
