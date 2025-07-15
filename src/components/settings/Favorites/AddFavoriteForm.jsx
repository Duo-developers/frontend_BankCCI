import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    CircularProgress,
    Typography,
    Paper,
    Grid // Importación correcta
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const AddFavoriteForm = ({ onAddFavorite, isLoading }) => {
    const [accountNumber, setAccountNumber] = useState('');
    const [alias, setAlias] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!accountNumber.trim()) {
            return;
        }
        onAddFavorite(accountNumber, alias);
        setAccountNumber('');
        setAlias('');
    };

    return (
        <Paper elevation={2} sx={{ p: { xs: 2, md: 3 }, mt: 4 }}>
            <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                Añadir Nueva Cuenta Favorita
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
                {/* CORREGIDO: El prop es 'container', no 'vcontainer' */}
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={5}>
                        <TextField
                            fullWidth
                            label="Número de Cuenta"
                            name="accountNumber"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            required
                            placeholder="Ej: 0000000001"
                            helperText="Ingresa el número de cuenta que deseas agregar a favoritos"
                        />
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField
                            fullWidth
                            label="Alias (Opcional)"
                            name="alias"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                            helperText="Un nombre amigable para identificar esta cuenta"
                        />
                    </Grid>
                    <Grid item xs={12} md={2} display="flex" alignItems="center">
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={isLoading || !accountNumber}
                            startIcon={isLoading ? <CircularProgress size={20} /> : <StarIcon />}
                            sx={{ py: 1.5 }}
                        >
                            Añadir
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};