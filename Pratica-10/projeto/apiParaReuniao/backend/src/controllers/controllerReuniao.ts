import { NextFunction, Request, Response } from "express";
import { pool } from "../db/conexoes";

// Função para formatar data e hora
const formatarDataHora = (dataHora: string): string => {
  const dataObj = new Date(dataHora);
  const dia = String(dataObj.getDate()).padStart(2, '0');
  const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); // Mes começa do zero
  const ano = dataObj.getFullYear();
  const horas = String(dataObj.getHours()).padStart(2, '0');
  const minutos = String(dataObj.getMinutes()).padStart(2, '0');
  const segundos = String(dataObj.getSeconds()).padStart(2, '0');

  return `${dia}-${mes}-${ano} às ${horas}:${minutos}:${segundos}`;
};

// Função para formatar participantes
const formatarParticipantes = (participantes: string | string[]): string => {
  if (typeof participantes === 'string') {
    // Se for uma string, divide pelos separadores de vírgula
    return participantes.split(',').join(', ');
  } else if (Array.isArray(participantes)) {
    // Se for um array, apenas junta com vírgula
    return participantes.join(', ');
  }
  return ''; 
};

// Função para criar reunião
export const criarReuniao = async (req: Request, res: Response): Promise<void> => {
  const { titulo, hora_inicio, hora_fim, participantes } = req.body;

  const conflitoQuery = `
    SELECT * 
    FROM reunioes 
    WHERE ($1 < hora_fim AND $2 > hora_inicio)
  `;

  try {
    const conflitos = await pool.query(conflitoQuery, [hora_inicio, hora_fim]);

    if (conflitos?.rows.length > 0) {
      res.status(400).json({ error: 'Horário conflitante.' });
      return;
    }

    const inserirQuery = `
      INSERT INTO reunioes (titulo, hora_inicio, hora_fim, participantes) 
      VALUES ($1, $2, $3, $4) RETURNING *
    `;

    const result = await pool.query(inserirQuery, [titulo, hora_inicio, hora_fim, participantes]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Erro ao criar reunião:", error);
    res.status(500).json({ error: 'Erro ao criar reunião. Tente novamente.' });
  }
};

// Função para atualizar reunião
export const atualizarReuniao = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { titulo, hora_inicio, hora_fim, participantes } = req.body;

  if (!titulo || !hora_inicio || !hora_fim || !participantes) {
    res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    return;
  }

  try {
    const { rowCount } = await pool.query(
      `SELECT * FROM reunioes WHERE id = $1`,
      [id]
    );

    if (rowCount === 0) {
      res.status(404).json({ error: 'Reunião não encontrada.' });
      return;
    }

    await pool.query(
      'UPDATE reunioes SET titulo = $1, hora_inicio = $2, hora_fim = $3, participantes = $4 WHERE id = $5',
      [titulo, hora_inicio, hora_fim, participantes, id]
    );

    res.status(200).json({ message: 'Reunião atualizada com sucesso' });
  } catch (error) {
    console.error('Erro ao atualizar reunião:', error);
    res.status(500).json({ error: 'Erro ao atualizar reunião. Tente novamente.' });
  }
};

// Função para deletar
export const deletarReuniao = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    // Verificar se a reunião existe
    const { rowCount } = await pool.query(
      'SELECT * FROM reunioes WHERE id = $1',
      [id]
    );

    if (rowCount === 0) {
      res.status(404).json({ error: 'Reunião não encontrada' });
      return;
    }

    // Deletar a reunião
    await pool.query('DELETE FROM reunioes WHERE id = $1', [id]);

    res.status(200).json({ message: 'Reunião deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar reunião:', error);
    res.status(500).json({ error: 'Erro ao deletar reunião. Tente novamente.' });
  }
};

// Função para listar reuniões
export const listarReuniao = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM reunioes;');

    // Formatando dados antes de enviar para o cliente
    const reunioesFormatadas = result.rows.map(reuniao => ({
      ...reuniao,
      hora_inicio: formatarDataHora(reuniao.hora_inicio),
      hora_fim: formatarDataHora(reuniao.hora_fim),
      participantes: formatarParticipantes(reuniao.participantes)
    }));

    res.json(reunioesFormatadas);
    return;
  } catch (error) {
    console.error("Erro ao listar reuniões:", error);
    res.status(500).json({ error: 'Erro ao listar reuniões.' });
    return;
  }
};