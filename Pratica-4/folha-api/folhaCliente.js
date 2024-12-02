const axios = require('axios');

const BASE_URL = 'http://localhost:3000/funcionarios';

async function consultarFuncionarios() {
    try{
        const response = await axios.get(BASE_URL);
        const funcionarios = response.data;

        console.log('Funcionarios cadastrados:');
        funcionarios.forEach(func => {
            console.log(`- ${func.nome} (${func.cargo}): R$${func.salario}`);
        });
    }catch (error) {
        console.error(`Erro ao consultar funcionários:`, error.message);
    }
}

module.exports = consultarFuncionarios;