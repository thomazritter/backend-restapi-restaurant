import { ApiProperty } from "@nestjs/swagger";

export class CreateProdutoDto {
    @ApiProperty()
    nome_produto: string;

    @ApiProperty()
    descricao: string;

    @ApiProperty()
    preco: number;

    @ApiProperty()
    categoria_id: number; // foreign key to Categoria_Produto

    @ApiProperty()
    fornecedores: number[]; // foreign key to Fornecedor
}
