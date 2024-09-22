import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MaxLength,
    MinLength,
    IsDateString,
    IsNumber
} from 'class-validator';

export class CreateFuncionarioDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nome_funcionario: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    cargo: string;

    @IsOptional()
    @IsPhoneNumber('BR') // Change 'BR' to the appropriate country code
    @ApiProperty()
    telefone: string;

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string;

    @IsOptional()
    @IsString()
    @ApiProperty()
    endereco: string;

    // Adding FuncionarioDetails information
    @IsDateString()
    @ApiProperty({ required: false })
    data_contratacao?: Date;

    @IsNumber()
    @ApiProperty({ required: false })
    salario?: number;

}
