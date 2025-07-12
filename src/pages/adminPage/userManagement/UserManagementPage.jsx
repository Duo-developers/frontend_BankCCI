import React from 'react';
import {
    Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Button, IconButton, CircularProgress, Alert,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { useUserManagement } from '../../../shared/hooks/useUserManagement';
import { UserForm } from '../../../components/UserForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const UserManagementPage = ({ openNewUserDialog = false }) => {
    const {
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
    } = useUserManagement(openNewUserDialog);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" fontWeight="bold">
                    Gestión de Usuarios
                </Typography>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpenForm()}
                >
                    Añadir Usuario
                </Button>
            </Box>

            <Paper elevation={2}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Username</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Rol</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.uid} hover>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.status ? 'Activo' : 'Inactivo'}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleOpenForm(user)} color="primary">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => handleOpenConfirm(user)} color="error">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            {isFormOpen && (
                <UserForm
                    open={isFormOpen}
                    onClose={handleCloseForm}
                    user={selectedUser}
                />
            )}

            <Dialog open={isConfirmOpen} onClose={handleCloseConfirm}>
                <DialogTitle>Confirmar Desactivación</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que quieres desactivar al usuario <strong>{userToDelete?.username}</strong>?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseConfirm}>Cancelar</Button>
                    <Button onClick={handleDeleteUser} color="error" variant="contained">
                        Desactivar
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};