import React, { useState } from "react";
import axios from "axios";

const AtualizarReuniao = () => {
    const [id, setId] = useState('');
    const [form, setForm] = useState({ titulo: '', hora_inicio: '', hora_fim: '', participantes: '' });

    const tratarMudanca = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const tratarAcao = async (e) => {
        e.preventDefault();

        // Converte os campos de datetime-local para o formato TIMESTAMP
        const horaInicio = form.hora_inicio.replace('T', ' ') + ':00';
        const horaFim = form.hora_fim.replace('T', ' ') + ':00';
        
        // Formata a string dos participantes para incluir as chaves {}
        const participantesFormatados = `{${form.participantes.split(',').map(participante => participante.trim()).join(', ')}}`;

        // Envia os dados ao backend, incluindo a lista de participantes já com {}
        try {
            await axios.put(`http://localhost:3000/api/reunioes/${id}`, {
                ...form,
                hora_inicio: horaInicio,
                hora_fim: horaFim,
                participantes: participantesFormatados,  // Agora os participantes estão formatados
            });
            alert('Reunião atualizada com sucesso!');
        } catch (error) {
            alert('Erro ao atualizar reunião.');
        }
    };

    return (
        <form onSubmit={tratarAcao}>
            <input
                type="text"
                placeholder="ID da reunião"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <input
                type="text"
                name="titulo"
                placeholder="Título"
                value={form.titulo}
                onChange={tratarMudanca}
                required
            />
            <input
                type="datetime-local"
                name="hora_inicio"
                value={form.hora_inicio}
                onChange={tratarMudanca}
                required
            />
            <input
                type="datetime-local"
                name="hora_fim"
                value={form.hora_fim}
                onChange={tratarMudanca}
                required
            />
            <input
                type="text"
                name="participantes"
                placeholder="Participantes (separados por vírgula)"
                value={form.participantes}
                onChange={tratarMudanca}
                required
            />
            <button type="submit">Atualizar</button>
        </form>
    );
};

export default AtualizarReuniao;
