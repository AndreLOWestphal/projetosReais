const express = require('express');
const sequilize = require('./config/database');
const postRoutes = require('./routes/post');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

//Rotas
app.use('/posts', postRoutes);

(async () => {
    try{
        await sequelize.authenticate();
        console.log('Conexão bem sucedida com Banco de Dados.');
        await sequelize.sync();
        console.log('Sincronização bem sucedida com Banco de Dados.')

        app.listen(3000, () => {
            console.log('Servidor rodando localmente na porta 3000.')
        })
    }catch(error){
        console.error('Erro ao inicializar o Banco de Dados:', error);
    }
})();