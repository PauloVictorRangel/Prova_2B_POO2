import { Request, Response } from 'express';
import { criarUsuario } from '../services/userServices';

export const criarUsuarioController = async (req: Request, res: Response) => {
  try {
    const {id, nome, email } = req.body;
    const usuario = await criarUsuario(id ,nome, email);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};