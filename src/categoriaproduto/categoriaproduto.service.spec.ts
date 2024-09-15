import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaprodutoService } from './categoriaproduto.service';

describe('CategoriaprodutoService', () => {
  let service: CategoriaprodutoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriaprodutoService],
    }).compile();

    service = module.get<CategoriaprodutoService>(CategoriaprodutoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
