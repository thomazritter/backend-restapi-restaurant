import { ApiProperty } from "@nestjs/swagger";

// above import is required so we can see swagger showing all of this

export class CreateFuncionarioDto {
    @ApiProperty()
    nome_funcionario: String;

    @ApiProperty()
    cargo: String;

    @ApiProperty()
    telefone: String;

    @ApiProperty( {uniqueItems: true } )
    email: String;

    @ApiProperty()
    endereco: String;

    @ApiProperty




}
