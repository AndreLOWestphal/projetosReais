const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); //Permite trabalhar com JSON no corpo das requisições

//Banco de dados improvisado
let items = [
    {id: 1, name: "Item 1"},
    {id: 2, name: "Item 2"}
];

//Adicionando verbo GET HTTP
app.get('/tasks', (req, res) => {
    res.status(200).json(items);
});

//Adicionando o verbo POST HTTP
app.post('/tasks', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
})

//Adicionando o verbo PUT HTTP que irá subistituir um item pelo ID
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex !== -1){
        items[itemIndex] = {
            id: id,
            name: req.body.name,
        };
        res.status(200).json(items[itemIndex]);
    }else{
        res.status(404).json({error: "Item não encontrado."})
    }
});

//Adicionando o verbo PATCH HTTP que irá atualizar pelo ID
app.patch('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);

    if(item){
        if(req.body.name){
            item.name = req.body.name
        }
        res.status(200).json(item);
    }else{
        res.status(404).json({error: "Item não encontrado."})
    }
});

//Adicionando o verbo DELETE HTTP que irá excluir pelo ID
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === id);

    if(itemIndex !== -1) {
        items.splice(itemIndex, 1);
        res.status(204).send();
    }else{
        res.status(404).json({error: "Item não encontrado."})
    }
})

//Servidor rodando
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})