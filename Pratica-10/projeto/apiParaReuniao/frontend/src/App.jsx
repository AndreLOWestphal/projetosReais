import React, { useState } from 'react';
import Menu from './components/Menu';
import AdicionarReuniao from './components/AdicionarReuniao';
import AtualizarReuniao from './components/AtualizarReuniao';
import DeletarReuniao from './components/DeletarReuniao';
import ListarReuniao from './components/ListarReuniao';

function App() {
  const [currentPage, setCurrentPage] = useState('add'); // Página inicial

  return (
    <div>
      <h1>Gerenciador de Reuniões</h1>
      <Menu setCurrentPage={setCurrentPage} />

      {currentPage === 'add' && <AdicionarReuniao />}
      {currentPage === 'update' && <AtualizarReuniao />}
      {currentPage === 'list' && <ListarReuniao />}
      {currentPage === 'deletar' && <DeletarReuniao />}
    </div>
  );
}

export default App;
