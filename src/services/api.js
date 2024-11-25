import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sorvetes-api-production.up.railway.app/'
})

export default api