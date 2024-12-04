import React, { useState } from 'react';
import axios from 'axios';

const DeletarReuniao = () => {
  const [id, setId] = useState('');

  const tratarDeletar = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/reunioes/${id}`);
      alert('Reunião deletada com sucesso!');
    } catch (error) {
      alert('Erro ao deletar reunião.');
    }
  };

  return (
    <div>
      <input type="text" placeholder="ID da reunião" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={tratarDeletar}>Deletar</button>
    </div>
  );
};

export default DeletarReuniao;
