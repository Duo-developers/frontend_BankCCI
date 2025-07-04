import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../../services"; // Asumo que esta es la ruta a tu api.jsx
import toast from "react-hot-toast";
import { useState } from "react";

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    /**
     * Modificamos la función para que acepte un único objeto `data`
     * que contendrá todos los campos del formulario.
     */
    const register = async (data) => {
        setIsLoading(true);
        try {
            // Pasamos el objeto `data` completo a la petición.
            // Asegúrate de que los nombres de las propiedades coincidan
            // con lo que espera tu backend (username, workName, etc.).
            const response = await registerRequest(data);

            // Esta parte para manejar la respuesta ya está bien.
            if (!response.data || !response.data.success) {
                toast.error(response.data?.message || 'Error al registrar la cuenta');
                return;
            }
            
            toast.success("¡Registro exitoso! Ahora inicia sesión.");
            
            // Redirigimos al login después de un registro exitoso.
            navigate('/'); // O a la ruta que prefieras

        } catch (error) {
            // Si hay errores de validación, el backend los enviará aquí.
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