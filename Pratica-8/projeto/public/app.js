document.getElementById('saleForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    //obtendo valores inseridos do formulario
    const product_id = document.getElementById('product_id').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const total_price = parseFloat(document.getElementById('total_price').value);

    try{
        // enviar dados para o backend
        const response = await axios.post('http://localhost:3000/api/sales', {
            product_id,
            quantity,
            total_price,
        });
        
        //exibir msgm sucesso
        document.getElementById('responseMessage').textContent = 'Venda inserida comm sucesso.';
        document.getElementById('responseMessage').classList.remove('error'); 
    
    }catch (error){

        //exibir msgm erro
        document.getElementById('responseMessage').textContent = 'Erro ao inserir venda.';
        document.getElementById('responseMessage').classList.add('error');
        console.error(error);
    }
});