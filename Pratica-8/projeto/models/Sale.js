const pool = require('../config/db');

const Sale = {
    create: async (data) => {
        const query = 'INSERT INTO vendas (product_id, quantity, total_price) VALUES ($1, $2, $3) RETURNING *';
        const values = [data.product_id, data.quantity, data.total_price];
        const result = await pool.query(query, values);
        return result.rows[0];
    },

    getAll: async () => {
        const result = await pool.query('SELECT * FROM vendas');
        return result.rows;
    },

    getTopProducts: async () => {
        const querry = 'SELECT product_id, SUM(quantity) AS total_sales FROM vendas GROUP BY total_sales DESC LIMIT 5';
        const result = await pool.query(querry);
        return result.rows;
    },

    //espaço para colocar mais metodos

}

module.exports = Sale;