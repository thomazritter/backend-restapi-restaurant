import { PartialType } from "@nestjs/swagger";
import { CreateItemPedidoDto } from "./create-itempedido.dto";

export class UpdateItemPedidoDto extends PartialType(CreateItemPedidoDto) {}
