import { ApiProperty } from "@nestjs/swagger";

export class CreateFuncionarioDto {
    @ApiProperty()
    nome_funcionario: string;

    @ApiProperty()
    cargo: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    endereco: string;
}
