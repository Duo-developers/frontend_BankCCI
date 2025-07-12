import { useState, useEffect, useCallback } from 'react';
import { getCurrentUser, updateMe, updatePassword as updatePasswordRequest } from '../../services/api';
import toast from 'react-hot-toast';

const initialProfileState = {
    name: '', username: '', email: '', dpi: '',
    address: '', phone: '', workName: '', monthlyIncome: ''
};

const initialPasswordState = {
    currentPassword: '', newPassword: '', confirmNewPassword: ''
};

export const useSettings = () => {
    const [profileData, setProfileData] = useState(initialProfileState);
    const [passwordData, setPasswordData] = useState(initialPasswordState);

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const fetchUser = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await getCurrentUser();
            if (response.data?.success && response.data.user) {
                const userData = response.data.user;
                setProfileData({
                    name: userData.name || '',
                    username: userData.username || '',
                    email: userData.email || '',
                    dpi: userData.dpi || '',
                    address: userData.address || '',
                    phone: userData.phone || '',
                    workName: userData.workName || '',
                    monthlyIncome: userData.monthlyIncome || ''
                });
            } else {
                toast.error(response.data?.message || 'No se pudieron cargar los datos.');
            }
        } catch (err) {
            console.error('Error al cargar datos:', err);
            toast.error('Ocurrió un error al cargar tus datos.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const handleChange = (setState) => (e) => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await updateMe(profileData);
            toast.success('¡Perfil actualizado con éxito!');
            await fetchUser(); // Recarga los datos para reflejar los cambios
        } catch (err) {
            console.error('Error al actualizar perfil:', err);
            toast.error(err.response?.data?.message || 'Error al actualizar el perfil.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (passwordData.newPassword.length < 6) {
            newErrors.newPassword = 'La contraseña debe tener al menos 6 caracteres.';
        }
        if (passwordData.newPassword !== passwordData.confirmNewPassword) {
            newErrors.confirmNewPassword = 'Las contraseñas no coinciden.';
        }
        setErrors(newErrors);
        
        if (Object.keys(newErrors).length > 0) return;

        setIsSubmitting(true);
        try {
            await updatePasswordRequest({
                currentPassword: passwordData.currentPassword,
                newPassword: passwordData.newPassword,
            });
            toast.success('¡Contraseña actualizada con éxito!');
            setPasswordData(initialPasswordState); // Limpia el formulario tras el éxito
        } catch (err) {
            console.error('Error al cambiar contraseña:', err);
            toast.error(err.response?.data?.message || 'Error al cambiar la contraseña.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        profileData,
        passwordData,
        isLoading,
        isSubmitting,
        errors,
        handleProfileChange: handleChange(setProfileData),
        handlePasswordChange: handleChange(setPasswordData),
        handleProfileSubmit,
        handlePasswordSubmit,
    };
};