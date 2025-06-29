import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login as loginRequest } from "../../services/api";
import { useState } from "react";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (emailOrUsername, password) => {
        setIsLoading(true);
        
        try {
            const isEmail = emailOrUsername.includes('@');
            const loginData = isEmail 
                ? { email: emailOrUsername, password } 
                : { username: emailOrUsername, password };
            
            const response = await loginRequest(loginData);
            
            if (response.data && response.data.success) {
                toast.success(response.data.message || 'Inicio de sesión exitoso');
                
                localStorage.setItem('usuario', JSON.stringify({
                    username: response.data.user.username,
                    token: response.data.token
                }));
                
                navigate("/");
            } else {
                toast.error(response.data?.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error completo:', error);
            
            if (error.response) {
                toast.error(error.response.data?.message || 'Credenciales inválidas');
            } else if (error.request) {
                toast.error('No se pudo conectar con el servidor');
            } else {
                toast.error('Error al iniciar sesión');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {
        login,
        isLoading
    };
};