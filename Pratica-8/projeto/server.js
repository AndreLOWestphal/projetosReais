const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const salesRoutes = require('./routes/salesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Usando as rotas
app.use('/api', salesRoutes);


// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
