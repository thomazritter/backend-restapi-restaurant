import { ApiProperty } from "@nestjs/swagger";

export class CreatePedidoDto {
    @ApiProperty()
    data_pedido: string;

    @ApiProperty()
    valor_total: number;

    @ApiProperty()
    client: string;

    @ApiProperty( {uniqueItems: true } )
    email: string;

    @ApiProperty()
    endereco: string;

    @ApiProperty({ type: [CreatePedidoDto], isArray: true })
    pedidos: CreatePedidoDto[];
}
