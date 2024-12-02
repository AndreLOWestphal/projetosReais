// controllers/salesController.js
const pool = require('../config/db');

// Função para criar uma venda (POST)
const creatSale = async (req, res) => {
    const { product_id, quantity, total_price } = req.body;

    if (!product_id || !quantity || !total_price) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO vendas (product_id, quantity, total_price) VALUES ($1, $2, $3) RETURNING *',
            [product_id, quantity, total_price]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao inserir venda:', error);
        res.status(500).json({ error: 'Erro ao inserir venda.' });
    }
};

// Função para obter todas as vendas (GET)
const getAllSales = async (req, res) => {
    try {
        // Consulta no banco para buscar todas as vendas
        const result = await pool.query('SELECT * FROM vendas ORDER BY created_at DESC');
        
        // Verifique se não retornou nenhuma venda
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Nenhuma venda encontrada.' });
        }
        
        // Retorna as vendas encontradas
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar vendas:', error);
        res.status(500).json({ error: 'Erro ao buscar vendas.' });
    }
};


// Função para obter os produtos mais vendidos (GET)
const getTopProducts = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT product_id, SUM(quantity) AS total_sales
            FROM vendas
            GROUP BY product_id
            ORDER BY total_sales DESC
            LIMIT 5
        `);
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar produtos mais vendidos:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos mais vendidos.' });
    }
};

module.exports = { creatSale, getAllSales, getTopProducts };
