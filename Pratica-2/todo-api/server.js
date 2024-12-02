const express = require('express');
const Joi = require('joi');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3000;

app.use(express.json());

// Banco de dados improvisado
let tasks = [
    {id: 1, title: "Fazer compras", completed: false},
    {id: 2, title: "Estudar para o teste", completed: false},
];

// Definindo o esquema de validação com Joi
const taskSchema = Joi.object({
    title: Joi.string().min(3).required(),  // 'title' é obrigatório e deve ter pelo menos 3 caracteres
    completed: Joi.boolean()  // 'completed' é opcional, mas se fornecido, deve ser booleano
});

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Tarefas',
            version: '1.0.0',
            description: 'Uma API para gerenciar tarefas',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./server.js'],  // Define onde o Swagger vai procurar as definições das rotas (no caso, no próprio arquivo server.js)
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Rota para acessar a documentação do Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   completed:
 *                     type: boolean
 */
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: O título da tarefa
 *               completed:
 *                 type: boolean
 *                 description: O status de completamento da tarefa
 *     responses:
 *       201:
 *         description: Tarefa criada
 *       400:
 *         description: Erro de validação
 */
app.post('/tasks', (req, res) => {
    const { error } = taskSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    
    tasks.push(newTask);
    res.status(201).json(newTask);
});

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID da tarefa a ser atualizada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Tarefa não encontrada
 */
app.put('/tasks/:id', (req, res) => {
    const { error } = taskSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    tasks[taskIndex] = {
        id: id,
        title: req.body.title,
        completed: req.body.completed
    };
    
    res.status(200).json(tasks[taskIndex]);
});

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: Atualiza parcialmente uma tarefa
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID da tarefa a ser atualizada
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               completed:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */
app.patch('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    if (req.body.title) {
        task.title = req.body.title;
    }

    if (typeof req.body.completed === "boolean") {
        task.completed = req.body.completed;
    }

    res.status(200).json(task);
});

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deleta uma tarefa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: O ID da tarefa a ser deletada
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tarefa deletada com sucesso
 *       404:
 *         description: Tarefa não encontrada
 */
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;

    const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

    if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarefa não encontrada." });
    }

    tasks.splice(taskIndex, 1);
    res.status(204).send();  // Deleta sem retornar conteúdo
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
