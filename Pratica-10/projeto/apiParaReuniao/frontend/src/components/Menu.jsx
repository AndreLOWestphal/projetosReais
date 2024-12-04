import React, {useState} from "react";

const Menu = ({setCurrentPage}) => {
    return (
        <nav>
            <button onClick={() => setCurrentPage('add')}>Adicionar Reunião</button>
            <button onClick={() => setCurrentPage('update')}>Atualizar Reunião</button>
            <button onClick={() => setCurrentPage('list')}>Listar Reuniões</button>
            <button onClick={() => setCurrentPage('deletar')}>Deletar Reunião</button>
        </nav>
    );
};

export default Menu;