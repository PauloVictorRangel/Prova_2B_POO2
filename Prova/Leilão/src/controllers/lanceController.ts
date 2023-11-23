import { Request, Response } from 'express';
import { criarLance } from '../services/lanceServices';

export const criarLanceController = async (req: Request, res: Response) => {
  try {
    const { id, usuarioId, leilaoId, valor } = req.body;
    const lance = await criarLance(id, usuarioId, leilaoId, valor);
    res.json(lance);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar lance' });
  }
};