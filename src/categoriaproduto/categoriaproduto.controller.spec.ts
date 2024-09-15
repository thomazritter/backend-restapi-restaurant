import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaprodutoController } from './categoriaproduto.controller';
import { CategoriaprodutoService } from './categoriaproduto.service';

describe('CategoriaprodutoController', () => {
  let controller: CategoriaprodutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaprodutoController],
      providers: [CategoriaprodutoService],
    }).compile();

    controller = module.get<CategoriaprodutoController>(CategoriaprodutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
