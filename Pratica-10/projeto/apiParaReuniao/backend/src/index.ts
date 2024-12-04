import express from 'express';
import dotenv from 'dotenv';
import routesReuniao from './routes/routesReuniao'
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/reunioes', routesReuniao);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Servidor rodando no http://localhost:${PORT}`));