"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.item_Pedido.deleteMany();
    await prisma.pedido.deleteMany();
    await prisma.funcionarioDetails.deleteMany();
    await prisma.funcionario.deleteMany();
    await prisma.cliente.deleteMany({});
    await prisma.produto.deleteMany({});
    await prisma.fornecedor.deleteMany({});
    await prisma.categoria_Produto.deleteMany({});
    const categoria1 = await prisma.categoria_Produto.create({
        data: { nome_categoria: 'Bebidas' },
    });
    const categoria2 = await prisma.categoria_Produto.create({
        data: { nome_categoria: 'Sobremesas' },
    });
    const fornecedor1 = await prisma.fornecedor.create({
        data: {
            nome_fornecedor: 'Fornecedor A',
            telefone: '555-8765',
            email: 'fornecedor.a@example.com',
            endereco: 'Rua dos Fornecedores, 78',
        },
    });
    const funcionario1 = await prisma.funcionario.create({
        data: {
            nome_funcionario: 'Carlos Silva',
            cargo: 'Gerente',
            telefone: '555-1234',
            email: 'carlos.silva@example.com',
            endereco: 'Rua das Flores, 123',
            funcionarioDetails: {
                create: {
                    data_contratacao: new Date('2022-01-15'),
                    salario: 5000.00,
                },
            },
        },
    });
    const funcionario2 = await prisma.funcionario.create({
        data: {
            nome_funcionario: 'Ana Costa',
            cargo: 'Chef',
            telefone: '555-5678',
            email: 'ana.costa@example.com',
            endereco: 'Avenida Central, 45',
            funcionarioDetails: {
                create: {
                    data_contratacao: new Date('2021-05-20'),
                    salario: 4500.00,
                },
            },
        },
    });
    const produto1 = await prisma.produto.create({
        data: {
            nome_produto: 'Refrigerante',
            descricao: 'Bebida gaseificada',
            preco: 5.00,
            categoria: { connect: { categoria_id: categoria1.categoria_id } },
            fornecedores: { connect: [{ fornecedor_id: fornecedor1.fornecedor_id }] },
        },
    });
    const produto2 = await prisma.produto.create({
        data: {
            nome_produto: 'Bolo de Chocolate',
            descricao: 'Delicioso bolo de chocolate',
            preco: 25.00,
            categoria: { connect: { categoria_id: categoria2.categoria_id } },
            fornecedores: { connect: [{ fornecedor_id: fornecedor1.fornecedor_id }] },
        },
    });
    const cliente1 = await prisma.cliente.create({
        data: {
            nome: 'Maria Souza',
            telefone: '555-4321',
            email: 'maria.souza@example.com',
            endereco: 'Travessa Esperança, 987',
            pedidos: {
                create: [
                    {
                        data_pedido: new Date(),
                        valor_total: 30.00,
                        funcionario: { connect: { funcionario_id: funcionario1.funcionario_id } },
                        itens_pedido: {
                            create: [
                                {
                                    produto: { connect: { produto_id: produto1.produto_id } },
                                    valor_total: 5.00,
                                    data_pedido: new Date(),
                                },
                                {
                                    produto: { connect: { produto_id: produto2.produto_id } },
                                    valor_total: 25.00,
                                    data_pedido: new Date(),
                                },
                            ],
                        },
                    },
                ],
            },
        },
    });
    console.log('Seed data created successfully.');
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map