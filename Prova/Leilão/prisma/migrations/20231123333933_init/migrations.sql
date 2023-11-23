/*
  Warnings:

  - You are about to drop the column `leilaoProduto` on the `Lance` table. All the data in the column will be lost.
  - The primary key for the `Leilao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `leilaoId` to the `Lance` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Leilao` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lance" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "valor" REAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "leilaoId" INTEGER NOT NULL,
    CONSTRAINT "Lance_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Lance_leilaoId_fkey" FOREIGN KEY ("leilaoId") REFERENCES "Leilao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Lance" ("id", "usuarioId", "valor") SELECT "id", "usuarioId", "valor" FROM "Lance";
DROP TABLE "Lance";
ALTER TABLE "new_Lance" RENAME TO "Lance";
CREATE TABLE "new_Leilao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "datalimite" DATETIME NOT NULL,
    "listaLances" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Leilao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Leilao" ("datalimite", "listaLances", "preco", "produto", "usuarioId") SELECT "datalimite", "listaLances", "preco", "produto", "usuarioId" FROM "Leilao";
DROP TABLE "Leilao";
ALTER TABLE "new_Leilao" RENAME TO "Leilao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;