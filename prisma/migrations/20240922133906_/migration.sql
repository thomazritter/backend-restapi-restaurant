-- CreateTable
CREATE TABLE "Funcionario" (
    "funcionario_id" SERIAL NOT NULL,
    "nome_funcionario" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("funcionario_id")
);

-- CreateTable
CREATE TABLE "FuncionarioDetails" (
    "id" SERIAL NOT NULL,
    "data_contratacao" TIMESTAMP(3) NOT NULL,
    "salario" DOUBLE PRECISION NOT NULL,
    "detailsEmail" TEXT NOT NULL,

    CONSTRAINT "FuncionarioDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "cliente_id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("cliente_id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "pedido_id" SERIAL NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "funcionario_id" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("pedido_id")
);

-- CreateTable
CREATE TABLE "Item_Pedido" (
    "item_pedido_id" SERIAL NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL,
    "valor_total" DOUBLE PRECISION NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "pedido_id" INTEGER NOT NULL,

    CONSTRAINT "Item_Pedido_pkey" PRIMARY KEY ("item_pedido_id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "produto_id" SERIAL NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoria_id" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("produto_id")
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "fornecedor_id" SERIAL NOT NULL,
    "nome_fornecedor" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("fornecedor_id")
);

-- CreateTable
CREATE TABLE "Categoria_Produto" (
    "categoria_id" SERIAL NOT NULL,
    "nome_categoria" TEXT NOT NULL,

    CONSTRAINT "Categoria_Produto_pkey" PRIMARY KEY ("categoria_id")
);

-- CreateTable
CREATE TABLE "_ProdutoFornecedores" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_email_key" ON "Funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "FuncionarioDetails_detailsEmail_key" ON "FuncionarioDetails"("detailsEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_produto_key" ON "Produto"("nome_produto");

-- CreateIndex
CREATE UNIQUE INDEX "Fornecedor_email_key" ON "Fornecedor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_Produto_nome_categoria_key" ON "Categoria_Produto"("nome_categoria");

-- CreateIndex
CREATE UNIQUE INDEX "_ProdutoFornecedores_AB_unique" ON "_ProdutoFornecedores"("A", "B");

-- CreateIndex
CREATE INDEX "_ProdutoFornecedores_B_index" ON "_ProdutoFornecedores"("B");

-- AddForeignKey
ALTER TABLE "FuncionarioDetails" ADD CONSTRAINT "FuncionarioDetails_detailsEmail_fkey" FOREIGN KEY ("detailsEmail") REFERENCES "Funcionario"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("cliente_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_funcionario_id_fkey" FOREIGN KEY ("funcionario_id") REFERENCES "Funcionario"("funcionario_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Pedido" ADD CONSTRAINT "Item_Pedido_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("produto_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item_Pedido" ADD CONSTRAINT "Item_Pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("pedido_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "Categoria_Produto"("categoria_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdutoFornecedores" ADD CONSTRAINT "_ProdutoFornecedores_A_fkey" FOREIGN KEY ("A") REFERENCES "Fornecedor"("fornecedor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProdutoFornecedores" ADD CONSTRAINT "_ProdutoFornecedores_B_fkey" FOREIGN KEY ("B") REFERENCES "Produto"("produto_id") ON DELETE CASCADE ON UPDATE CASCADE;
