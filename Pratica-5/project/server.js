const express = require('express');
const sequelize = require('./config/database');
const taskRoutes = require('./routes/task');
const Task = require('./models/Task');

const app = express();
app.use(express.json());

app.use('/tarefas', taskRoutes);

(async () => {
  try {
    // Cria conexão e sincroniza tabelas
    await sequelize.authenticate();
    console.log('Banco de Dados conectado!');
    await sequelize.sync({ force: false });
    console.log('Banco de dados sincronizado!');
    app.listen(3000, () =>{
      console.log('Servidor rodando na porta 3000.')
    });
  } catch (error) {
    console.error('Erro ao inicializar o Banco de Dados: ', error);
  }
})();
