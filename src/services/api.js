import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sorvetes-api.vercel.app/'
})

export default api