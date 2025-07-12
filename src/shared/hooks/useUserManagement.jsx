import { useState, useCallback, useEffect } from 'react';
import { getUsers, deleteUser } from '../../services/api';
import toast from 'react-hot-toast';

export const useUserManagement = (openNewUserDialog) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);

    const fetchUsers = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getUsers();
            if (response.data?.success) {
                setUsers(response.data.users);
            } else {
                setError(response.data?.message || 'Error al cargar los usuarios.');
                toast.error(response.data?.message || 'Error al cargar los usuarios.');
            }
        } catch (err) {
            setError(err.message || 'Error de conexión al servidor.');
            toast.error(err.message || 'Error de conexión al servidor.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        if (openNewUserDialog) {
            handleOpenForm();
        }
    }, [openNewUserDialog]);


    const handleOpenForm = (user = null) => {
        setSelectedUser(user);
        setIsFormOpen(true);
    };

    const handleCloseForm = () => {
        setSelectedUser(null);
        setIsFormOpen(false);
        fetchUsers();
    };

    const handleOpenConfirm = (user) => {
        setUserToDelete(user);
        setIsConfirmOpen(true);
    };

    const handleCloseConfirm = () => {
        setUserToDelete(null);
        setIsConfirmOpen(false);
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;
        try {
            await deleteUser(userToDelete.uid);
            toast.success(`Usuario ${userToDelete.username} desactivado con éxito.`);
            fetchUsers();
        } catch (err) {
            toast.error(err.response?.data?.message || 'Error al desactivar el usuario.');
        } finally {
            handleCloseConfirm();
        }
    };

    return {
        users,
        isLoading,
        error,
        selectedUser,
        isFormOpen,
        isConfirmOpen,
        userToDelete,
        handleOpenForm,
        handleCloseForm,
        handleOpenConfirm,
        handleCloseConfirm,
        handleDeleteUser
    };
};