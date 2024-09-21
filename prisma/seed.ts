import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Fornecedores (Suppliers)
  const fornecedor1 = await prisma.fornecedor.upsert({
    where: { email: 'fornecedor1@example.com' },
    update: {},
    create: {
      nome_fornecedor: 'Fornecedor A',
      telefone: '123-456-7890',
      email: 'fornecedor1@example.com',
      endereco: 'Rua A, 123',
    },
  });

  const fornecedor2 = await prisma.fornecedor.upsert({
    where: { email: 'fornecedor2@example.com' },
    update: {},
    create: {
      nome_fornecedor: 'Fornecedor B',
      telefone: '987-654-3210',
      email: 'fornecedor2@example.com',
      endereco: 'Rua B, 456',
    },
  });

  // Seed Produtos (Products) and associate them with Fornecedores
  const produto1 = await prisma.produto.upsert({
    where: { nome_produto: 'Produto A' },
    update: {},
    create: {
      nome_produto: 'Produto A',
      descricao: 'Descrição do Produto A',
      preco: 100.0,
      categoria: {
        connectOrCreate: {
          where: { nome_categoria: 'Categoria A' },
          create: { nome_categoria: 'Categoria A' },
        },
      },
      fornecedores: {
        connect: [
          { fornecedor_id: fornecedor1.fornecedor_id },
          { fornecedor_id: fornecedor2.fornecedor_id },
        ], // Linking Produto to both Fornecedor 1 and Fornecedor 2
      },
    },
  });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
