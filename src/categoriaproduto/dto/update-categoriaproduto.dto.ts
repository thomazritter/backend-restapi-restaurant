import { PartialType } from "@nestjs/swagger";
import { CreateCategoriaProdutoDto } from "./create-categoriaproduto.dto";

export class UpdateCategoriaProdutoDto extends PartialType(CreateCategoriaProdutoDto) {}
