import { ApiProperty } from "@nestjs/swagger";
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProdutoDto } from "src/produtos/dto/create-produto.dto";

export class CreateFornecedorDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nome_fornecedor: string;

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

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateProdutoDto)
    @ApiProperty({ type: () => [CreateProdutoDto], required: false })
    produtos?: { produto_id: number }[];
}
