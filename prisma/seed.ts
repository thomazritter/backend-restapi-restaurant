import { PrismaClient } from '@prisma/client';

// initialize the Prisma Client
const prisma = new PrismaClient();

async function main() {
  const funcionario1 = await prisma.funcionario.upsert({
    where: { email : 'funcionario1@gmail.com' },
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
