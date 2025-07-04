import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../services"; 
import toast from "react-hot-toast";
import { useState } from "react";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (data) => {
        setIsLoading(true);
        try {
            const response = await registerRequest(data);

            if (!response.data || !response.data.success) {
                toast.error(response.data?.message || 'Error al registrar la cuenta');
                return;
            }
            
            toast.success("¡Registro exitoso! Ahora inicia sesión.");
            
            navigate('/'); 

        } catch (error) {
            const errorMessage = error.response?.data?.errors?.[0]?.msg || error.response?.data?.message || 'Error al conectar con el servidor';
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        register,
        isLoading
    };
};