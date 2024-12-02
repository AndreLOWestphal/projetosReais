const axios = require('axios');

// Configuração
const API_KEY = '98205cb006cf70bbc4b98b6219785cf5'; //chave
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Metodo/Funçao para buscar dados sobre clima
async function buscarClima(cidade) {
    try{
        const response = await axios.get(BASE_URL, {
            params: {
                q: cidade,
                appid: API_KEY,
                units: 'metric', // adquirindo dados de temperatura em celsius
                lang: 'pt_br', // resposta em portugues brasil
            },
        });
        const dados = response.data;

        console.log(`Clima em ${dados.name}, ${dados.sys.country}:`);
        console.log(`Temperatura: ${dados.main.temp}°C`);
        console.log(`Descrição: ${dados.weather[0].description}`)
        console.log(`Umidade: ${dados.main.humidity}%`)
    }catch (error){
        if(error.response){
            console.error(`Erro ${error.response.status}: ${error.response.data.message}`);
        }else{
            console.error(`Erro na requisição: `, error.message);
        }
    }
}

// Executando função com alguma cidade
const cidade = 'Ceilândia';
buscarClima(cidade);