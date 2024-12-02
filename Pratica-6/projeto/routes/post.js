const express = require('express');
const axios = require('axios');
const Post = require('../models/Post');

const router = express.Router();

//requisição para ver dados
router.get('/', async (req, res) =>{
    try{
        const visualizarDados = await Post.findAll();
        res.status(200).json(visualizarDados);
    }catch (error){
        res.status(500).json({error: 'Erro ao obter dados.'})
    }
});

//Rota para importa API do JsonPlaceholder
router.post('/importar', async (req, res) => {
    try{
        console.log('Iniciando aquisição para API');
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log('Dados Recebidos da API: ', response.data);
        const posts = response.data;

        const savedPosts = await Promise.all(
            posts.map(async (post) => {
                return Post.create({
                    id: post.id,
                    userId: post.userId,
                    title: post.title,
                    body: post.body,
                });
            })
        );

        res.status(201).json({message: "Dados importados com sucesso!", savedPosts,});
    }catch (error){
        res.status(500).json({error: 'Erro ao importar dados da API.'});
    }
});

// Endpoint para deletar uma tarefa pelo ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tarefa = await Post.findByPk(id);

        if (!tarefa) {
            return res.status(404).json({ error: 'Tarefa não encontrada' });
        }

        await tarefa.destroy();
        res.status(200).json({ message: `Tarefa com ID ${id} deletada com sucesso!` });
    } catch (error) {
        console.error('Erro ao deletar tarefa:', error);
        res.status(500).json({ error: 'Erro ao tentar deletar tarefa' });
    }
});

// Endpoint para deletar múltiplas tarefas (por uma lista de IDs)
router.delete('/muitas', async (req, res) => {
    try {
        const { ids } = req.body; // Espera um array de IDs no corpo da requisição

        // Verifica se a entrada é um array de números
        if (!Array.isArray(ids) || ids.some(id => typeof id !== 'number')) {
            return res.status(400).json({ error: 'Você precisa fornecer uma lista de IDs válidos' });
        }

        console.log('IDs recebidos:', ids);

        const tarefasDeletadas = await Post.destroy({
            where: {
                id: ids
            }
        });

        if (tarefasDeletadas === 0) {
            return res.status(404).json({ error: 'Nenhuma tarefa encontrada para deletar' });
        }

        res.status(200).json({ message: `${tarefasDeletadas} tarefas deletadas com sucesso!` });
    } catch (error) {
        console.error('Erro ao deletar tarefas:', error);
        res.status(500).json({ error: 'Erro ao tentar deletar tarefas' });
    }
});



module.exports = router;