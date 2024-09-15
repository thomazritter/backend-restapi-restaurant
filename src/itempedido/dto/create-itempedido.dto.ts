import { ApiProperty } from "@nestjs/swagger";

export class CreateItempedidoDto {
    @ApiProperty()
    data_pedido: string;

    @ApiProperty()
    valor_total: number;

    @ApiProperty()  // cliente_id from Cliente model
    produto_id: number;
}
