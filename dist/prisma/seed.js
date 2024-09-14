"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const funcionario1 = await prisma.funcionario.upsert({
        where: { email: 'funcionario1@gmail.com' },
        update: {},
        create: {
            nome_funcionario: 'Maria Souza',
            cargo: 'Garçonete',
            telefone: '222-333-4444',
            email: 'funcionario1@restaurant.com',
            endereco: 'Rua dos Funcionários, 34',
        },
    });
    console.log({ funcionario1 });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map