const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

//criar tarefa dentro do BD
router.post('/', async (req, res) => {
    try{
        const {titulo, descricao} = req.body;
        const novaTarefa = await Task.create({titulo, descricao});
        res.status(201).json(novaTarefa)
    }catch (error){
        res.status(500).json({error: "Erro ao criar tarefa."})
    }
});

//solicitar os dados no BD
router.get('/', async (req, res) => {
    try{
        const tarefas = await Task.findAll();
        res.status(200).json(tarefas);
    }catch (error){
        res.status(500).json({error: 'Erro ao obter tarefas.'})
    }
})

//excluir tarefa no BD
router.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const exluirTarefa = await Task.destroy({where: {id}});
        if(exluirTarefa){
            res.status(200).json({message: `Tarefa com ID ${id} excluida com sucesso.`})
        }else{
            res.status(404).json({error: `Tarefa com ID ${id} não encontrada.`})
        }
    }catch (error){
        res.status(500).json({error: 'Erro ao tentar excluir tarefa'})
    }
})


module.exports = router;