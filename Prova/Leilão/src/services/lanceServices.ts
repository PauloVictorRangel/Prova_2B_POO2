import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const criarLance = async (id: number, usuarioId: number, leilaoId: number, valor: number) => {
    return prisma.lance.create({
        data: {
            id,
            usuarioId,
            leilaoId,
            valor,
        },
    });
};