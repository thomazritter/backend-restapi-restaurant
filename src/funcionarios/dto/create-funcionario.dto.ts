import { ApiProperty } from "@nestjs/swagger";
import { CreatePedidoDto } from 'src/pedidos/dto/create-pedido.dto';  // Adjust path as necessary


// above import is required so we can see swagger showing all of this

export class CreateFuncionarioDto {
    @ApiProperty()
    nome_funcionario: string;

    @ApiProperty()
    cargo: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty( {uniqueItems: true } )
    email: string;

    @ApiProperty()
    endereco: string;

    @ApiProperty({ type: [CreatePedidoDto], isArray: true })
    pedidos: CreateFuncionarioDto[];
}
