import { PartialType } from '@nestjs/swagger';
import { CreateCategoriaprodutoDto } from './create-categoriaproduto.dto';

export class UpdateCategoriaprodutoDto extends PartialType(CreateCategoriaprodutoDto) {}
