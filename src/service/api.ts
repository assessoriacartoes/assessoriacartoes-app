import axios from 'axios';

const api = axios.create({
    baseURL: 'https://assessoria-cartoes-api.herokuapp.com/'
});

export default api;