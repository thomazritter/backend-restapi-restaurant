import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsPhoneNumber } from 'class-validator';

export class CreateClienteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nome: string;

    @IsOptional()
    @IsPhoneNumber('BR') // Change 'BR' to the appropriate country code
    @ApiProperty()
    telefone: string;

    @IsEmail()
    @ApiProperty()
    email: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    endereco: string;
}
