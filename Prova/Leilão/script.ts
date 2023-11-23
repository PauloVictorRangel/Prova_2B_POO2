import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const lance = await prisma.lance.create({
      data: {
        id: 13,
        comprador: { connect: {id: 1000}},
        leilao: { connect: {id: 10}},
        valor: 7.91
      }
  });
  console.log(lance)
}

main()