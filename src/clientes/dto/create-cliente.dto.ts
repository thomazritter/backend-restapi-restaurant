import { ApiProperty } from "@nestjs/swagger";
import { CreatePedidoDto } from "src/pedidos/dto/create-pedido.dto";

export class CreateClienteDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    email: string;

    @ApiProperty( {uniqueItems: true } )
    endereco: string;

    @ApiProperty({ type: [CreatePedidoDto], isArray: true })
    pedidos: CreatePedidoDto[];
}
