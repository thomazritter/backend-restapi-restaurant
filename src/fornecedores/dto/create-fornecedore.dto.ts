import { ApiProperty } from "@nestjs/swagger";

export class CreateFornecedorDto {
    @ApiProperty()
    nome_fornecedor: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    endereco: string;

    @ApiProperty()
    produtos?: { produto_id: number }[];
}
