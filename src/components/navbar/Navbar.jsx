import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, Typography, Chip, Avatar } from '@mui/material'; // <-- 1. IMPORTACIONES AÑADIDAS
import { Link } from 'react-router-dom';
import { useUser } from '../../shared/hooks/useUser';

import MenuIcon from '@mui/icons-material/Menu';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';

export const Navbar = () => {
  const { userRole, isLoggedIn, username, logout } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
  };
  
  const getInitials = (name = '') => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <AppBar 
      position="sticky"
      sx={{ 
        backgroundColor: '#011B2F',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn && (
            <>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }} onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose}>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon sx={{ mr: 1.5 }} />
                  Cerrar Sesión
                </MenuItem>
              </Menu>
            </>
          )}
          
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://res.cloudinary.com/dwc4ynoj9/image/upload/v1751093545/banck_CCI_sinfondo-removebg_gdhpkm.png" 
              alt="Bank CCI Logo" 
              style={{ height: '40px', cursor: 'pointer' }} 
            />
          </Link>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          
          {userRole === 'ADMIN_ROLE' ? (
            <Button color="inherit" component={Link} to="/admin/clients" startIcon={<PeopleAltOutlinedIcon />}>
              Clientes
            </Button>
          ) : userRole === 'USER_ROLE' ? (
            <>
              <Button color="inherit" component={Link} to="/transfers" startIcon={<CompareArrowsOutlinedIcon />}>
                Transferencias
              </Button>
              <Button color="inherit" component={Link} to="/about" startIcon={<InfoOutlinedIcon />}>
                Nosotros
              </Button>
              <Button color="inherit" component={Link} to="/contact" startIcon={<ContactsOutlinedIcon />}>
                Contacto
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/about" startIcon={<InfoOutlinedIcon />}>
                Nosotros
              </Button>
              <Button color="inherit" component={Link} to="/contact" startIcon={<ContactsOutlinedIcon />}>
                Contacto
              </Button>
            </>
          )}

          {!isLoggedIn ? (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{ backgroundColor: '#FFD915', color: '#011B2F', '&:hover': { backgroundColor: '#FFD358' }, marginLeft: '20px' }}
            >
              Acceder
            </Button>
          ) : (
            <Chip
              avatar={<Avatar sx={{ bgcolor: '#FFD915', color: '#011B2F', fontWeight: 'bold' }}>{getInitials(username)}</Avatar>}
              label={username}
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'rgba(255, 255, 255, 0.23)',
                marginLeft: '20px',
                padding: '2px',
                '& .MuiChip-label': {
                  fontWeight: '500'
                },
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }
              }}
            />
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};