import { useNavigate } from "react-router-dom"
import { register as registerRequest } from "../../services"
import toast from "react-hot-toast"
import { useState } from "react"

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (email, password, username) => {
        try {
            setIsLoading(true);
            
            const response = await registerRequest({
                email,
                password,
                name: username 
            });

            if (!response.data || !response.data.success) {
                toast.error(response.data?.message || 'Error al registrar la cuenta');
                return;
            }
            
            toast.success(response.data.message);
            
            const userDetails = {
                id: response.data.user.id,
                name: response.data.user.name,
                email: response.data.user.email
            };
            
            localStorage.setItem("user", JSON.stringify(userDetails));
            
            navigate('/');
            
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'Error al conectar con el servidor';
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