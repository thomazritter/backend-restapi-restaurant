import { ApiProperty } from "@nestjs/swagger";

export class CreatePedidoDto {
    @ApiProperty()
    data_pedido: Date;

    @ApiProperty()
    valor_total: number;

    @ApiProperty()
    cliente_id: number; // foreign key to Cliente

    @ApiProperty()
    funcionario_id: number; // foreign key to Funcionario
}
