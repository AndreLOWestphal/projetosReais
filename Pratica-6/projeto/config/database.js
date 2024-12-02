const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('jsonplaceholder_db', 'postgres', 'admin123', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;