import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import Login from '../../components/Login.jsx'; 

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 70px)',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        py: 4,
      }}
    >
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={2}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: '8px',
            backgroundColor: 'white',
            maxWidth: 400,
            mx: 'auto',
          }}
        >
          <Box 
            sx={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Box 
              component="img"
              src="https://res.cloudinary.com/dwc4ynoj9/image/upload/v1751093545/banck_CCI_sinfondo-removebg_gdhpkm.png"
              alt="Bank CCI Logo"
              sx={{ 
                height: 60,
                mb: 2,
              }}
            />
          </Box>
          
          <Typography 
            variant="h5" 
            component="h1" 
            align="center" 
            gutterBottom 
            fontWeight="500"
            sx={{ mb: 1, color: '#212121' }}
          >
            Iniciar sesión
          </Typography>
          
          <Typography 
            variant="body2" 
            align="center" 
            sx={{ mb: 3, color: 'text.secondary' }}
          >
            Bienvenido, por favor inicia sesión para continuar
          </Typography>
          
          <Login />
          
        </Paper>
      </Container>
    </Box>
  );
};