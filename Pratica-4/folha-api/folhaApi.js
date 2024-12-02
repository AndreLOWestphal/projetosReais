const express = require('express');
const app = express();
const PORT = 3000;

//banco de dados ficticio
const funcionarios = [
    {id: 1, nome: 'João Silva', cargo: 'Desenvolvedor', salario: '6000'},
    {id: 2, nome: 'João Pedro Henrique', cargo: 'Ddesenvolvedor Jr', salario: '2500'},
    {id: 1, nome: 'Maria Oliveira', cargo: 'Analista', salario: '5000'},
    {id: 1, nome: 'Pedro Santos', cargo: 'Gerente', salario: '9000'},
];

//retorno dos dados dos funcionarios
app.get('/funcionarios', (req, res) => {
    res.json(funcionarios)
})

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

//adicionando
app.post('/funcionarios', (req, res) => {
  const { nome, cargo, salario } = req.body;

  if (!nome || !cargo || !salario) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios!' });
  }

  const novoFuncionario = {
    id: funcionarios.length + 1,
    nome,
    cargo,
    salario,
  };

  funcionarios.push(novoFuncionario);
  res.status(201).json(novoFuncionario);
});

//alterando
app.put('/funcionarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, cargo, salario } = req.body;

  const funcionario = funcionarios.find((f) => f.id === parseInt(id));

  if (!funcionario) {
    return res.status(404).json({ error: 'Funcionário não encontrado!' });
  }

  if (nome) funcionario.nome = nome;
  if (cargo) funcionario.cargo = cargo;
  if (salario) funcionario.salario = salario;

  res.json(funcionario);
});

//delete
app.delete('/funcionarios/:id', (req, res) => {
  const { id } = req.params;

  const index = funcionarios.findIndex((f) => f.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: 'Funcionário não encontrado!' });
  }

  const funcionarioRemovido = funcionarios.splice(index, 1);
  res.json({ message: 'Funcionário removido com sucesso!', funcionarioRemovido });
});

//iniciar o server local
app.listen(PORT, () =>{
    console.log(`API de folha de pagamento rodando em http://localhost:${PORT}`);
})