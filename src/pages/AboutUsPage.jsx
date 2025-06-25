import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';

// Icons for values section
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleIcon from '@mui/icons-material/People';

// Placeholder data for team members
const teamMembers = [
  { name: 'Ricardo Morales', role: 'Director Ejecutivo (CEO)', avatar: 'RM' },
  { name: 'Ana Sofía Paredes', role: 'Directora de Operaciones (COO)', avatar: 'AP' },
  { name: 'Carlos Valenzuela', role: 'Director de Tecnología (CTO)', avatar: 'CV' },
];

export const AboutUsPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: '#002A45',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" fontWeight="bold" gutterBottom>
            Construyendo el Futuro de la Banca en Guatemala
          </Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Somos Bank CCI, una institución financiera nacida de la innovación, comprometida con la transparencia y el desarrollo de nuestros clientes.
          </Typography>
        </Container>
      </Box>

      {/* Mission and Vision Section */}
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Nuestra Misión
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
              Facilitar el progreso financiero de cada guatemalteco a través de servicios bancarios accesibles, seguros y fáciles de usar. Buscamos eliminar las barreras tradicionales, ofreciendo herramientas digitales que empoderen a nuestros clientes para tomar el control de su futuro económico con confianza y simplicidad.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Nuestra Visión
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
              Ser el banco digital líder en la región, reconocido por nuestra innovación constante, nuestra seguridad de clase mundial y por poner genuinamente los intereses de nuestros clientes en el centro de cada decisión. Aspiramos a ser más que un banco; queremos ser el principal aliado financiero en la vida de las personas.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      
      {/* Our Values Section */}
      <Box sx={{ bgcolor: '#f7f9fc', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
            Nuestros Valores Fundamentales
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4} textAlign="center">
              <HandshakeIcon sx={{ fontSize: 50, color: '#003F66' }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Integridad</Typography>
              <Typography>Actuamos con honestidad y transparencia. La confianza de nuestros clientes es nuestro activo más valioso.</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <LightbulbIcon sx={{ fontSize: 50, color: '#003F66' }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Innovación</Typography>
              <Typography>Desafiamos constantemente el status quo para crear soluciones más simples, rápidas y eficientes.</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <PeopleIcon sx={{ fontSize: 50, color: '#003F66' }} />
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>Enfoque en el Cliente</Typography>
              <Typography>Escuchamos, entendemos y nos anticipamos a las necesidades de nuestros clientes para superar sus expectativas.</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Team Section */}
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
          Conoce a Nuestro Equipo Directivo
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Paper elevation={0} sx={{ textAlign: 'center', p: 3, bgcolor: 'transparent' }}>
                <Avatar 
                  sx={{ width: 100, height: 100, margin: '0 auto', mb: 2, bgcolor: '#011B2F', fontSize: '2.5rem' }}
                >
                  {member.avatar}
                </Avatar>
                <Typography variant="h6" fontWeight="bold">{member.name}</Typography>
                <Typography color="text.secondary">{member.role}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
