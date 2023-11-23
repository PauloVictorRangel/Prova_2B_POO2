-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "leilaoProduto" TEXT NOT NULL,
    CONSTRAINT "Lance_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoProduto_fkey" FOREIGN KEY ("leilaoProduto") REFERENCES "Leilao" ("produto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Leilao" (
    "produto" TEXT NOT NULL PRIMARY KEY,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "listaLances" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Leilao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
