import { ApiProperty } from "@nestjs/swagger";
import {
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
} from 'class-validator';

export class CreateProdutoDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nome_produto: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    descricao: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @ApiProperty()
    preco: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    categoria_id: number; // foreign key to Categoria_Produto

    @IsNumber({}, { each: true })
    @IsNotEmpty()
    @ApiProperty()
    fornecedores?: number[];
}
