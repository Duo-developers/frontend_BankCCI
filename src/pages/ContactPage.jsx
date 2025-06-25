import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const ContactPage = () => {
  return (
    <Box>
      {/* Page Header */}
      <Box sx={{ bgcolor: '#002A45', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" fontWeight="bold">
            Contáctanos
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Estamos aquí para ayudarte. Resuelve tus dudas o envíanos tus comentarios.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={5}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Envíanos un Mensaje
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
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
                  <Grid item xs={12} sm={6}>
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
                  sx={{
                    mt: 3,
                    mb: 2,
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

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Información de Contacto
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                También puedes comunicarte con nosotros a través de los siguientes canales:
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <PhoneIcon sx={{ mr: 2, color: '#003F66' }} />
                <Box>
                  <Typography fontWeight="bold">Línea de Atención</Typography>
                  <Typography>+502 2233-4455</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <EmailIcon sx={{ mr: 2, color: '#003F66' }} />
                <Box>
                  <Typography fontWeight="bold">Correo Electrónico</Typography>
                  <Typography>atencion@bankcci.com.gt</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocationOnIcon sx={{ mr: 2, color: '#003F66' }} />
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
