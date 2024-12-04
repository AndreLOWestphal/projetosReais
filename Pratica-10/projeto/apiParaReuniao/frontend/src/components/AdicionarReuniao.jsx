import React, {useState} from "react";
import axios from "axios";

const AdicionarReunião = () => {
    const [form, setForm] = useState({titulo: '', hora_inicio: '', hora_fim: '', participantes: ''});

    const tratarMudanca = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const tratarAcao = async (e) => {
        e.preventDefault();
        try {
            // Converte os campos de datetime-local para o formato TIMESTAMP
            const horaInicio = form.hora_inicio.replace('T', ' ') + ':00';
            const horaFim = form.hora_fim.replace('T', ' ') + ':00';
            
            // Formata a string dos participantes para incluir as chaves {}
            const participantesFormatados = `{${form.participantes.split(',').map(participante => participante.trim()).join(', ')}}`;
    
            // Envia os dados ao backend, incluindo a lista de participantes já com {}
            const response = await axios.post('http://localhost:3000/api/reunioes', {
                ...form,
                hora_inicio: horaInicio,
                hora_fim: horaFim,
                participantes: participantesFormatados,  // Agora os participantes estão formatados
            });
            alert('Reunião adicionada com sucesso!');
            setForm({ titulo: '', hora_inicio: '', hora_fim: '', participantes: '' });
        } catch (error) {
            console.error('Erro ao adicionar reunião:', error);
            alert('Erro ao adicionar reunião.');
        }
    };

    return(
    <form onSubmit={tratarAcao}>
      <input type="text" name="titulo" placeholder="Título" value={form.titulo} onChange={tratarMudanca} required />
      <input type="datetime-local" name="hora_inicio" value={form.hora_inicio} onChange={tratarMudanca} required />
      <input type="datetime-local" name="hora_fim" value={form.hora_fim} onChange={tratarMudanca} required />
      <input type="text" name="participantes" placeholder="Participantes" value={form.participantes} onChange={tratarMudanca} required />
      <button type="submit">Adicionar</button>
    </form>
    );
};

export default AdicionarReunião;