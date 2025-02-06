import axios from "axios"


export const api = axios.create({

baseURL:"http://localhost:5000",

});

api.interceptors.request.use(async (config) => {
    const token = await localStorage.getItem('token'); // Exemplo de operação assíncrona
    config.headers.authorization = `Bearer ${token}`;
    return config;
  });