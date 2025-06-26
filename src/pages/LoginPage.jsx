import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Login from '../components/Login';

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
        <Login />
      </Paper>
    </Container>
  );
};