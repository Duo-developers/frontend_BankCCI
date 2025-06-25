import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Avatar } from '@mui/material';

// Importing icons from Material-UI
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

// Main component for the Home Page
export const HomePage = () => {
  return (
    <Box>
      {/* 1. Hero Section */}
      <Box 
        sx={{
          bgcolor: '#002A45', // Azul intermedio de la paleta
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" fontWeight="bold" gutterBottom>
            La banca digital que se adapta a ti
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: '#FFD358' }}>
            Abre una cuenta en minutos y maneja tus finanzas sin complicaciones.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              bgcolor: '#FFD915', // Amarillo principal
              color: '#011B2F', // Texto en azul oscuro
              '&:hover': { bgcolor: '#FFD358' }
            }}
          >
            Abre tu cuenta ahora
          </Button>
        </Container>
      </Box>

      {/* 2. Products/Services Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Nuestros Productos
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* Service 1: Savings Account */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <AccountBalanceWalletIcon sx={{ fontSize: 50, color: '#003F66' }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Cuentas de Ahorro</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Intereses competitivos y sin comisiones ocultas.</Typography>
            </Paper>
          </Grid>
          {/* Service 2: Credit Cards */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <CreditCardIcon sx={{ fontSize: 50, color: '#003F66' }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Tarjetas de Crédito</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Beneficios exclusivos y aceptación mundial.</Typography>
            </Paper>
          </Grid>
          {/* Service 3: Investments */}
          <Grid item xs={12} sm={4}>
            <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
              <TrendingUpIcon sx={{ fontSize: 50, color: '#003F66' }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Inversiones</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Haz crecer tu dinero con nuestros planes de inversión.</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      
      {/* 3. "Why Choose Us" Section */}
      <Box sx={{ bgcolor: '#f7f9fc', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            ¿Por qué elegir Bank CCI?
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <SecurityIcon sx={{ fontSize: 40, color: '#003F66', mr: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Seguridad de Vanguardia</Typography>
                <Typography>Tus datos y tu dinero están protegidos con la mejor tecnología.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <SupportAgentIcon sx={{ fontSize: 40, color: '#003F66', mr: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">Atención 24/7</Typography>
                <Typography>Estamos aquí para ayudarte, cuando sea que nos necesites.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <SmartphoneIcon sx={{ fontSize: 40, color: '#003F66', mr: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold">App Móvil Intuitiva</Typography>
                <Typography>Gestiona todo desde la palma de tu mano con nuestra app.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Testimonials Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Lo que dicen nuestros clientes
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#FFD915', mr: 2 }}>LC</Avatar>
                <Typography fontWeight="bold">Laura Campos</Typography>
              </Box>
              <Typography variant="body1" fontStyle="italic">"Abrir mi cuenta fue increíblemente rápido y la app es muy fácil de usar. ¡El mejor banco digital!"</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#FFD915', mr: 2 }}>MA</Avatar>
                <Typography fontWeight="bold">Marco Antonio</Typography>
              </Box>
              <Typography variant="body1" fontStyle="italic">"La atención al cliente es excepcional. Resolvieron mi problema en minutos. Muy recomendado."</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* 5. Final Call to Action Section */}
      <Box sx={{ bgcolor: '#011B2F', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ¿Listo para empezar?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Únete a la nueva era de la banca.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{
              bgcolor: '#FFD915',
              color: '#011B2F',
              '&:hover': { bgcolor: '#FFD358' }
            }}
          >
            Conviértete en Cliente CCI
          </Button>
        </Container>
      </Box>
    </Box>
  );
};
