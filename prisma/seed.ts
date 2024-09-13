import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Seed data for Categoria_Produto
  const categoria1 = await prisma.categoria_Produto.upsert({
    where: { nome_categoria: 'Bebidas' },
    update: {},
    create: {
      nome_categoria: 'Bebidas',
    },
  });
  

  const categoria2 = await prisma.categoria_Produto.upsert({
    where: { nome_categoria: 'Pratos Principais' },
    update: {},
    create: {
      nome_categoria: 'Pratos Principais',
    },
  });

  onst categoria3 = await prisma.categoria_Produto.upsert({
    where: { nome_categoria: 'Entradas' },
    update: {},
    create: {
      nome_categoria: 'Entradas',
    },
  });

  // Seed data for Fornecedor (Supplier)
  const fornecedor1 = await prisma.fornecedor.upsert({
    where: { nome_fornecedor: 'Distribuidora de Bebidas XYZ' },
    update: {},
    create: {
      nome_fornecedor: 'Distribuidora de Bebidas XYZ',
      telefone: '111-222-3333',
      email: 'contato@distribuidoraxyz.com',
      endereco: 'Rua das Bebidas, 45',
    },
  });

  const fornecedor2 = await prisma.fornecedor.upsert({
    where: { nome_fornecedor: 'Fornecedor de Carnes ABC' },
    update: {},
    create: {
      nome_fornecedor: 'Fornecedor de Carnes ABC',
      telefone: '444-555-6666',
      email: 'contato@carnesabc.com',
      endereco: 'Avenida dos Alimentos, 123',
    },
  });

  // Seed data for Produto (Menu Items)
  const produto1 = await prisma.produto.upsert({
    where: { nome_produto: 'Refrigerante 350ml' },
    update: {},
    create: {
      nome_produto: 'Refrigerante 350ml',
      descricao: 'Refrigerante de cola servido em lata.',
      preco: 5.00,
      categoria_id: categoria1.categoria_id,
      fornecedor_id: fornecedor1.fornecedor_id,
    },
  });

  const produto2 = await prisma.produto.upsert({
    where: { nome_produto: 'Picanha Grelhada' },
    update: {},
    create: {
      nome_produto: 'Picanha Grelhada',
      descricao: 'Picanha grelhada ao ponto com acompanhamento.',
      preco: 49.90,
      categoria_id: categoria2.categoria_id,
      fornecedor_id: fornecedor2.fornecedor_id,
    },
  });

  // Seed data for Cliente (Customer)
  const cliente1 = await prisma.cliente.upsert({
    where: { email: 'cliente1@example.com' },
    update: {},
    create: {
      nome: 'João Silva',
      telefone: '999-888-7777',
      email: 'cliente1@example.com',
      endereco: 'Rua do Cliente, 12',
    },
  });

  // Seed data for Funcionario (Staff)
  const funcionario1 = await prisma.funcionario.upsert({
    where: { email: 'funcionario1@restaurant.com' },
    update: {},
    create: {
      nome_funcionario: 'Maria Souza',
      cargo: 'Garçonete',
      telefone: '222-333-4444',
      email: 'funcionario1@restaurant.com',
      endereco: 'Rua dos Funcionários, 34',
    },
  });

  // Seed data for Pedido (Order)
  const pedido1 = await prisma.pedido.create({
    data: {
      data_pedido: new Date(),
      valor_total: 54.90,
      cliente_id: cliente1.cliente_id,
      funcionario_id: funcionario1.funcionario_id,
      itens_pedido: {
        create: [
          {
            data_pedido: new Date(),
            valor_total: 49.90,
            produto_id: produto2.produto_id, // Picanha Grelhada
          },
          {
            data_pedido: new Date(),
            valor_total: 5.00,
            produto_id: produto1.produto_id, // Refrigerante 350ml
          },
        ],
      },
    },
  });

  console.log({ categoria1, categoria2, fornecedor1, fornecedor2, produto1, produto2, cliente1, funcionario1, pedido1 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close the Prisma Client at the end
    await prisma.$disconnect();
  });
