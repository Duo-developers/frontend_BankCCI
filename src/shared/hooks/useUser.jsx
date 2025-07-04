import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../services/api';

export const useUser = () => {
    const [userRole, setUserRole] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const logout = () => {
        localStorage.removeItem('usuario');
        setIsLoggedIn(false);
        setUserRole(null);
        setUsername('');
        window.location.href = '/'; 
    };

    useEffect(() => {
        const checkUserSession = async () => {
            const userInfo = localStorage.getItem('usuario');
            if (!userInfo) {
                setIsLoggedIn(false);
                return;
            }

            try {
                const response = await getCurrentUser();
                
                if (response.data && response.data.success && response.data.user?.role) {
                    setIsLoggedIn(true);
                    setUsername(response.data.user.username);
                    setUserRole(response.data.user.role);
                } else {
                    console.warn('Token inválido o sesión expirada. Cerrando sesión.');
                    logout();
                }
            } catch (error) {
                console.error('No se pudo verificar la sesión con el servidor. Cerrando sesión.', error);
                logout();
            }
        };

        checkUserSession();
    }, []);


    return { userRole, isLoggedIn, username, logout };
};