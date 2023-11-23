import { Request, Response } from 'express';
import { criarLeilao } from '../services/leilaoServices';

export const criarLeilaoController = async (req: Request, res: Response) => {
  try {
    const { id, produto, preco, datalimite, usuarioId, listaLances } = req.body;
    const leilao = await criarLeilao(id, produto, preco, datalimite, usuarioId, listaLances);
    res.json(leilao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar leilão' });
  }
};