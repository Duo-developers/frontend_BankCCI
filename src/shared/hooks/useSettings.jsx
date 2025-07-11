import { useState, useEffect, useCallback } from 'react';
import { getCurrentUser, updateMe, updatePassword as updatePasswordRequest } from '../../services/api';
import toast from 'react-hot-toast';

export const useSettings = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUser = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getCurrentUser();
            if (response.data?.success && response.data.user) {
                setUser(response.data.user);
                console.log("Datos de usuario cargados:", response.data.user);
            } else {
                console.error("Error en respuesta:", response.data);
                setError(response.data?.message || 'No se pudieron cargar los datos del usuario');
                toast.error(response.data?.message || 'No se pudieron cargar los datos del usuario.');
            }
        } catch (error) {
            console.error('Error detallado:', error);
            setError(error.message || 'Error desconocido');
            toast.error(`Error al conectar con el servidor: ${error.message || 'Error desconocido'}`);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const updateUser = async (data) => {
        const toastId = 'update-user-' + Date.now();

        setIsLoading(true);
        setError(null);
        
        try {
            const response = await updateMe({
                name: data.name || undefined,
                username: data.username || undefined,
                address: data.address || undefined,
                phone: data.phone || undefined,
                workName: data.workName || undefined,
                monthlyIncome: data.monthlyIncome ? Number(data.monthlyIncome) : undefined
            });
            
            if (response.data?.success) {
            toast.success(response.data.message || '¡Datos actualizados con éxito!', { id: toastId });
                await fetchUser();
            } else {
                setError(response.data?.message || 'No se pudieron actualizar los datos');
                toast.error(response.data?.message || 'No se pudieron actualizar los datos.');
            }
        } catch (error) {
            console.error("Error completo en updateUser:", error);
            console.error("Respuesta del servidor:", error.response?.data);
            
            let errorMessage = 'Error al actualizar los datos.';
            
            if (error.response?.data?.errors && error.response.data.errors.length > 0) {
                errorMessage = error.response.data.errors.map(err => err.msg).join(', ');
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };
    
    const updatePassword = async (data) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await updatePasswordRequest(data);
            if (response.data?.success) {
                toast.success(response.data.message || '¡Contraseña actualizada con éxito!');
            } else {
                setError(response.data?.message || 'No se pudo actualizar la contraseña');
                toast.error(response.data?.message || 'No se pudo actualizar la contraseña.');
            }
        } catch (error) {
            console.error("Error en updatePassword:", error);
            
            let errorMessage = 'Error al cambiar la contraseña.';
            
            if (error.response?.data?.errors && error.response.data.errors.length > 0) {
                errorMessage = error.response.data.errors.map(err => err.msg).join(', ');
            } else if (error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const refreshUserData = async () => {
        console.log("Recargando datos de usuario...");
        await fetchUser();
    };

    return { user, isLoading, error, updateUser, updatePassword, refreshUserData };
};

export default useSettings;  // Añadir esta línea para permitir ambos tipos de importación