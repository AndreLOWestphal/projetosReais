const consultarFuncionarios = require('./folhaCliente');

async function main() {
    console.log('\n === Consulta de Funcionarios ===');
    await consultarFuncionarios();
}

main();