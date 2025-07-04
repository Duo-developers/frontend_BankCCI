import axios from 'axios';

const apiClient = axios.create({
    baseURL:  'http://localhost:3001/cci/v1/',
    timeout: 10000,
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

export const register = async (data) => {
    return await apiClient.post('/user/', data);
}

export const getCurrentUser = async () => {
    try {
        return await apiClient.get('/user/me/information');
    } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        return {
            data: {
                success: false,
                message: 'Error al obtener datos del usuario'
            }
        };
    }
};