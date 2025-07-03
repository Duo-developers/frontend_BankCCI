import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <AppBar 
      position="sticky"
      sx={{ 
        backgroundColor: '#011B2F',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://res.cloudinary.com/dwc4ynoj9/image/upload/v1751093545/banck_CCI_sinfondo-removebg_gdhpkm.png" 
              alt="Bank CCI Logo" 
              style={{ height: '40px', cursor: 'pointer' }} 
            />
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit" component={Link} to="/services">Servicios</Button>
          <Button color="inherit" component={Link} to="/about">Nosotros</Button>
          <Button color="inherit" component={Link} to="/contact">Contacto</Button>
        </Box>

        <Button
          component={Link}
          to="/auth"
          variant="contained"
          sx={{
            backgroundColor: '#FFD915',
            color: '#011B2F',
            '&:hover': {
              backgroundColor: '#FFD358',
            },
            marginLeft: '20px',
          }}
        >
          Área de Clientes
        </Button>
      </Toolbar>
    </AppBar>
  );
};