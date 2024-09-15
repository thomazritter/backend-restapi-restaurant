import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoriaProdutoDto {
    @ApiProperty()
    nome_categoria: string;
}
