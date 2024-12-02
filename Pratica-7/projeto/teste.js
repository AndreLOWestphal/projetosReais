const vendas = require('./array');
const calcularTotalVendas = require('./calcularTotalVendas')

console.log(vendas);
vendas.push({id:16, produto: 'ervilha', quantidade: 300, preco: 2});
console.log(vendas);
vendas.pop();
console.log(vendas);
console.log(`O valor total das vendas é: R$ ${calcularTotalVendas(vendas)}`);