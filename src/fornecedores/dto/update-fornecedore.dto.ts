import { PartialType } from "@nestjs/swagger";
import { CreateFornecedorDto } from "./create-fornecedore.dto";

export class UpdateFornecedorDto extends PartialType(CreateFornecedorDto) {}
