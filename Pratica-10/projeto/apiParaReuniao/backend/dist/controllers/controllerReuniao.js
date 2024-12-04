"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarReuniao = exports.deletarReuniao = exports.atualizarReuniao = exports.criarReuniao = void 0;
const conexoes_1 = require("../db/conexoes");
// Função para formatar data e hora
const formatarDataHora = (dataHora) => {
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
const formatarParticipantes = (participantes) => {
    if (typeof participantes === 'string') {
        // Se for uma string, divide pelos separadores de vírgula
        return participantes.split(',').join(', ');
    }
    else if (Array.isArray(participantes)) {
        // Se for um array, apenas junta com vírgula
        return participantes.join(', ');
    }
    return '';
};
// Função para criar reunião
const criarReuniao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, hora_inicio, hora_fim, participantes } = req.body;
    const conflitoQuery = `
    SELECT * 
    FROM reunioes 
    WHERE ($1 < hora_fim AND $2 > hora_inicio)
  `;
    try {
        const conflitos = yield conexoes_1.pool.query(conflitoQuery, [hora_inicio, hora_fim]);
        if ((conflitos === null || conflitos === void 0 ? void 0 : conflitos.rows.length) > 0) {
            res.status(400).json({ error: 'Horário conflitante.' });
            return;
        }
        const inserirQuery = `
      INSERT INTO reunioes (titulo, hora_inicio, hora_fim, participantes) 
      VALUES ($1, $2, $3, $4) RETURNING *
    `;
        const result = yield conexoes_1.pool.query(inserirQuery, [titulo, hora_inicio, hora_fim, participantes]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error("Erro ao criar reunião:", error);
        res.status(500).json({ error: 'Erro ao criar reunião. Tente novamente.' });
    }
});
exports.criarReuniao = criarReuniao;
// Função para atualizar reunião
const atualizarReuniao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { titulo, hora_inicio, hora_fim, participantes } = req.body;
    if (!titulo || !hora_inicio || !hora_fim || !participantes) {
        res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        return;
    }
    try {
        const { rowCount } = yield conexoes_1.pool.query(`SELECT * FROM reunioes WHERE id = $1`, [id]);
        if (rowCount === 0) {
            res.status(404).json({ error: 'Reunião não encontrada.' });
            return;
        }
        yield conexoes_1.pool.query('UPDATE reunioes SET titulo = $1, hora_inicio = $2, hora_fim = $3, participantes = $4 WHERE id = $5', [titulo, hora_inicio, hora_fim, participantes, id]);
        res.status(200).json({ message: 'Reunião atualizada com sucesso' });
    }
    catch (error) {
        console.error('Erro ao atualizar reunião:', error);
        res.status(500).json({ error: 'Erro ao atualizar reunião. Tente novamente.' });
    }
});
exports.atualizarReuniao = atualizarReuniao;
// Função para deletar
const deletarReuniao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        // Verificar se a reunião existe
        const { rowCount } = yield conexoes_1.pool.query('SELECT * FROM reunioes WHERE id = $1', [id]);
        if (rowCount === 0) {
            res.status(404).json({ error: 'Reunião não encontrada' });
            return;
        }
        // Deletar a reunião
        yield conexoes_1.pool.query('DELETE FROM reunioes WHERE id = $1', [id]);
        res.status(200).json({ message: 'Reunião deletada com sucesso' });
    }
    catch (error) {
        console.error('Erro ao deletar reunião:', error);
        res.status(500).json({ error: 'Erro ao deletar reunião. Tente novamente.' });
    }
});
exports.deletarReuniao = deletarReuniao;
// Função para listar reuniões
const listarReuniao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield conexoes_1.pool.query('SELECT * FROM reunioes;');
        // Formatando dados antes de enviar para o cliente
        const reunioesFormatadas = result.rows.map(reuniao => (Object.assign(Object.assign({}, reuniao), { hora_inicio: formatarDataHora(reuniao.hora_inicio), hora_fim: formatarDataHora(reuniao.hora_fim), participantes: formatarParticipantes(reuniao.participantes) })));
        res.json(reunioesFormatadas);
        return;
    }
    catch (error) {
        console.error("Erro ao listar reuniões:", error);
        res.status(500).json({ error: 'Erro ao listar reuniões.' });
        return;
    }
});
exports.listarReuniao = listarReuniao;
