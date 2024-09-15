import { ApiProperty } from "@nestjs/swagger";
import { CreateProdutoDto } from "src/produtos/dto/create-produto.dto";

export class CreateFornecedoreDto {
    @ApiProperty()
    nome_fornecedor: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    email: string;

    @ApiProperty( {uniqueItems: true } )
    endereco: string;

    @ApiProperty({ type: [CreateProdutoDto], isArray: true })
    produtos: CreateProdutoDto[];
}
