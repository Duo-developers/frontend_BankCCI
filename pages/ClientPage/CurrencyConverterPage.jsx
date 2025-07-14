import React from 'react';
import { Container, Typography, Box, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { CurrencyConverter } from '../../components/common/CurrencyConverter';

export const CurrencyConverterPage = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Breadcrumbs sx={{ mb: 3 }}>
                <Link component={RouterLink} to="/client" underline="hover" color="inherit">
                    Inicio
                </Link>
                <Typography color="text.primary">Conversión de Divisas</Typography>
            </Breadcrumbs>

            <Typography variant="h4" gutterBottom>
                Conversión de Divisas
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Utilice esta herramienta para convertir entre diferentes monedas y calcular el valor equivalente.
            </Typography>
            <Box sx={{ maxWidth: 600, mx: 'auto' }}>
                <CurrencyConverter />
            </Box>
        </Container>
    );
};