function calcularTotalVendas(vendas){
    return vendas.reduce((total, venda) => total + (venda.quantidade * venda.preco), 0);
}

module.exports = calcularTotalVendas;