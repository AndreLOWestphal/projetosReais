import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListarReuniao = () => {
  const [reunioes, setReunioes] = useState([]);

  useEffect(() => {
    const buscarReunioes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/reunioes');
        console.log(response.data);
        setReunioes(response.data);
      } catch (error) {
        alert('Erro ao listar reuniões.');
      }
    };
    buscarReunioes();
  }, []);

  return (
    <div>
      <h2>Reuniões</h2>
      <ul>
        {reunioes.map((meeting) => (
          <li key={meeting.id}>
            <strong>{meeting.titulo}</strong>: {meeting.hora_inicio} até {meeting.hora_fim}
            <div>
              <strong>Participantes:</strong> {meeting.participantes}
            </div>
            <div>
              -----------------------------------------------------------------------------------------------
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarReuniao;
