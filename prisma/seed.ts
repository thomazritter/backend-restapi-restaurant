import { PrismaClient } from '@prisma/client';

// Initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Seed Fornecedor
  const fornecedor1 = await prisma.fornecedor.upsert({
    where: { email: 'fornecedor1@supplies.com' },
    update: {},
    create: {
      nome_fornecedor: 'Supplier A',
      telefone: '111-222-3333',
      email: 'fornecedor1@supplies.com',
      endereco: 'Rua dos Fornecedores, 12',
    },
  });

  const fornecedor2 = await prisma.fornecedor.upsert({
    where: { email: 'fornecedor2@supplies.com' },
    update: {},
    create: {
      nome_fornecedor: 'Supplier B',
      telefone: '444-555-6666',
      email: 'fornecedor2@supplies.com',
      endereco: 'Rua dos Fornecedores, 34',
    },
  });

  // Seed Categoria_Produto
  const categoria1 = await prisma.categoria_Produto.upsert({
    where: { nome_categoria: 'Bebidas' },
    update: {},
    create: {
      nome_categoria: 'Bebidas',
    },
  });

  // Seed Produto
  const produto1 = await prisma.produto.upsert({
    where: { nome_produto: 'Coca Cola' },
    update: {},
    create: {
      nome_produto: 'Coca Cola',
      descricao: 'Refrigerante de cola',
      preco: 5.0,
      categoria: { connect: { categoria_id: categoria1.categoria_id } }, // Foreign key reference to Categoria_Produto
      fornecedores: { connect: [{ fornecedor_id: fornecedor1.fornecedor_id }, { fornecedor_id: fornecedor2.fornecedor_id }] }, // Connect multiple fornecedores
    },
  });

  // Seed Cliente
  const cliente1 = await prisma.cliente.upsert({
    where: { email: 'cliente1@customer.com' },
    update: {},
    create: {
      nome: 'João Silva',
      telefone: '333-444-5555',
      email: 'cliente1@customer.com',
      endereco: 'Rua dos Clientes, 78',
    },
  });

  // Seed Funcionario
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

  // Seed Pedido
  const pedido1 = await prisma.pedido.create({
    data: {
      data_pedido: new Date(),
      valor_total: 30.0,
      cliente: { connect: { cliente_id: cliente1.cliente_id } }, // Foreign key reference to Cliente
      funcionario: { connect: { funcionario_id: funcionario1.funcionario_id } }, // Foreign key reference to Funcionario
    },
  });

  // Seed Item_Pedido
  const item_pedido1 = await prisma.item_Pedido.create({
    data: {
      data_pedido: new Date(),
      valor_total: 5.0,
      produto: { connect: { produto_id: produto1.produto_id } }, // Foreign key reference to Produto
      pedido: { connect: { pedido_id: pedido1.pedido_id } }, // Foreign key reference to Pedido
    },
  });

  // Add more items, pedidos, or other entities as necessary...

  console.log({
    fornecedor1,
    fornecedor2,
    categoria1,
    produto1,
    cliente1,
    funcionario1,
    pedido1,
    item_pedido1,
  });
}

// Execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the Prisma Client at the end
    await prisma.$disconnect();
  });
