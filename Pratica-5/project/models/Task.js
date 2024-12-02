const {DataTypes} = require('sequelize');
const sequelize = require('../config/database')

const Task = sequelize.define(
    'Task', 
    {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    descricao: {
        type: DataTypes.TEXT,
    },

    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    criado_em:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
},
{
    tableName: 'tarefas',
    underscored: true,
},
);

module.exports = Task;