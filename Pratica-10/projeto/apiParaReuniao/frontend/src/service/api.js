import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/reunioes', // Endereço do backend
});

export default api;