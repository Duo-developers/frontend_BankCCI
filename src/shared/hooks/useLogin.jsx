import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api"; 
import toast from "react-hot-toast";

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
            
            // 2. LLAMADA A LA API: Llama al backend con los datos correctos.
            const response = await loginRequest(loginData);
            
            if (response.data?.success) {
                toast.success(response.data.message || '¡Bienvenido de vuelta!');
                
                localStorage.setItem('usuario', JSON.stringify({
                    username: response.data.user.username,
                    token: response.data.token
                }));
                
                navigate("/");

                window.location.reload();

            } else {
                toast.error(response.data?.message || 'Credenciales inválidas');
            }
        } catch (error) {
            console.error('Error completo en el inicio de sesión:', error);
            
            if (error.response) {
                toast.error(error.response.data?.message || 'Credenciales inválidas');
            } else if (error.request) {
                toast.error('No se pudo conectar con el servidor. Inténtalo más tarde.');
            } else {
                toast.error('Ocurrió un error inesperado al iniciar sesión.');
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