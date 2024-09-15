import { PartialType } from '@nestjs/swagger';
import { CreateItempedidoDto } from './create-itempedido.dto';

export class UpdateItempedidoDto extends PartialType(CreateItempedidoDto) {}
