import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';

// --- Iconos para la página ---
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // Icono principal
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send'; // Icono para el botón de enviar

// URL de la imagen de fondo para el encabezado
const headerImageUrl = 'https://res.cloudinary.com/dwc4ynoj9/image/upload/v1751089409/habilidades-call-center_e9bs3t.jpg';

export const ContactPage = () => {
  return (
    <Box>
      {/* 1. Encabezado con Imagen de Fondo y Transparencia */}
      <Box 
        sx={{ 
          color: 'white', 
          py: 8, 
          textAlign: 'center',
          position: 'relative',
          backgroundImage: `url(${headerImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Efecto de superposición para transparencia
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 42, 69, 0.65)', // Azul oscuro con 65% de opacidad
            zIndex: 1,
          },
          '> *': {
            position: 'relative',
            zIndex: 2,
          }
        }}
      >
        <Container maxWidth="md">
          <SupportAgentIcon sx={{ fontSize: 60, mb: 2, color: '#FFD915' }} />
          <Typography component="h1" variant="h2" fontWeight="bold">
            Contáctanos
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
            Estamos aquí para ayudarte. Resuelve tus dudas o envíanos tus comentarios.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={5} alignItems="flex-start">
          
          {/* Columna del Formulario de Contacto */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Envíanos un Mensaje
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name"
                      name="fullName"
                      required
                      fullWidth
                      id="fullName"
                      label="Nombre Completo"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Correo Electrónico"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="subject"
                      label="Asunto"
                      name="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="message"
                      label="Tu Mensaje"
                      id="message"
                      multiline
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    bgcolor: '#FFD915',
                    color: '#011B2F',
                    '&:hover': { bgcolor: '#FFD358' }
                  }}
                >
                  Enviar Mensaje
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Columna de la Información de Contacto */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: { xs: 0, md: 2 }, mt: { xs: 4, md: 0 } }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Nuestros Canales
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                También puedes comunicarte con nosotros directamente:
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon sx={{ mr: 2, color: '#003F66', fontSize: 30 }} />
                <Box>
                  <Typography fontWeight="bold">Línea de Atención</Typography>
                  <Typography>+502 2233-4455</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ mr: 2, color: '#003F66', fontSize: 30 }} />
                <Box>
                  <Typography fontWeight="bold">Correo Electrónico</Typography>
                  <Typography>atencion@bankcci.com.gt</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOnIcon sx={{ mr: 2, color: '#003F66', fontSize: 30 }} />
                <Box>
                  <Typography fontWeight="bold">Oficina Central</Typography>
                  <Typography>Av. Reforma 1-23, Zona 10, Edificio CCI, Nivel 15, Ciudad de Guatemala</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};