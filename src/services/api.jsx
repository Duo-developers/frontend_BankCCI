import axios from 'axios';

const apiClient = axios.create({
    baseURL:  'http://localhost:3001/cci/v1/',
    timeout: 3000,
    httpsAgent: false
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("usuario")

        if(userDetails){
            const token = JSON.parse(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) => {
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    return await apiClient.post('/auth/login', data);
}