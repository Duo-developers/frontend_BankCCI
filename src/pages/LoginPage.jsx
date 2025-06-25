import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';

export const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={3}
        sx={{
          marginTop: 8,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          Página de Login
        </Typography>
        <Typography component="p" sx={{ mt: 1, mb: 3 }}>
          Por favor, inicia sesión.
        </Typography>
        
        <Box component="form" noValidate sx={{ width: '100%' }}>
          {/* Aquí irían tus campos de texto para email y contraseña */}

          <Button 
            variant="outlined" 
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Iniciar Sesión
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};