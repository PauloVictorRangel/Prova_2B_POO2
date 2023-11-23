const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const prisma = new PrismaClient();
const port = 3000;

// Middleware para processar dados JSON
app.use(express.json());


app.get('/usuarios', async(req, res) => {
 
  const usuarios = await prisma.usuario.findMany();
  /*[
    { id: 1, nome: 'Usuário 1' },
    { id: 2, nome: 'Usuário 2' },
  ];*/

  res.json(usuarios);
});


app.post('/usuarios', async(req, res) => {
  const { nome, email } = req.body;


  const novoUsuario = await prisma.usuario.create({
    data: {
        nome,
        email,
    },
  })
  /*{ id: 3, nome, email };*/

  res.json({ message: 'Usuário criado com sucesso!', usuario: novoUsuario });
});
// Rota para atualizar um usuário existente
app.put('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nome, email } = req.body;
  
    const usuarioAtualizado = await prisma.usuario.update({
      where: { id },
      data: {
        nome,
        email,
      },
    });
  
    res.json({ message: 'Usuário atualizado com sucesso!', usuario: usuarioAtualizado });
  });
  

  app.delete('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id, 10);
  
    const usuarioExcluido = await prisma.usuario.delete({
      where: { id },
    });
  
    res.json({ message: 'Usuário excluído com sucesso!', usuario: usuarioExcluido });
  });
  

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
