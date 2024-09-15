import { ApiProperty } from "@nestjs/swagger";

export class CreateClienteDto {
    @ApiProperty()
    nome: string;

    @ApiProperty()
    telefone: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    endereco: string;
}
