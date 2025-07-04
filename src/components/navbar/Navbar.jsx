import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';


export const Navbar = () => {
  const [userRole, setUserRole] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    const checkUserSession = async () => {
      const userInfo = localStorage.getItem('usuario');
      if (userInfo) {
        try {
          const parsedUser = JSON.parse(userInfo);
          setIsLoggedIn(true);
          setUsername(parsedUser.username);
          
          // Ahora intentamos obtener el rol del usuario desde la API
          try {
            const userData = await getCurrentUser(parsedUser.token);
            if (userData && userData.success && userData.user) {
              setUserRole(userData.user.role);
              console.log('Rol del usuario obtenido:', userData.user.role);
            } else {
              // Fallback en caso de que la API no devuelva el rol
              console.log('La API no devolvió el rol, usando fallback');
              if (parsedUser.username.toLowerCase().includes('admin')) {
                setUserRole('ADMIN_ROLE');
              } else {
                setUserRole('USER_ROLE');
              }
            }
          } catch (error) {
            console.error('Error obteniendo rol del usuario:', error);
            // Fallback en caso de error
            if (parsedUser.username.toLowerCase().includes('admin')) {
              setUserRole('ADMIN_ROLE');
            } else {
              setUserRole('USER_ROLE');
            }
          }
        } catch (error) {
          console.error('Error al procesar datos del localStorage:', error);
        }
      }
    };
    
    checkUserSession();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    setIsLoggedIn(false);
    setUserRole(null);
    setUsername('');
    window.location.href = '/'; // Redireccionar a la página principal
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
          
          {/* Mostrar COMPUTADORA si el rol es USER_ROLE */}
          {userRole === 'USER_ROLE' && (
            <Button 
              color="inherit" 
              component={Link} 
              to="/computadora"
              sx={{
                backgroundColor: '#2196f3',
                color: 'white',
                marginLeft: '10px',
                '&:hover': {
                  backgroundColor: '#1976d2',
                },
              }}
            >
              COMPUTADORA
            </Button>
          )}
          
          {/* Mostrar BICICLETA si el rol es ADMIN_ROLE */}
          {userRole === 'ADMIN_ROLE' && (
            <Button 
              color="inherit" 
              component={Link} 
              to="/bicicleta"
              sx={{
                backgroundColor: '#4caf50',
                color: 'white',
                marginLeft: '10px',
                '&:hover': {
                  backgroundColor: '#388e3c',
                },
              }}
            >
              BICICLETA
            </Button>
          )}
        </Box>

        {/* Mostrar botón de inicio de sesión o información del usuario y cerrar sesión */}
        {!isLoggedIn ? (
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
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ 
              color: 'white', 
              marginRight: '15px',
              display: { xs: 'none', sm: 'block' }
            }}>
              Hola, {username}
            </Box>
            <Button
              onClick={handleLogout}
              variant="contained"
              sx={{
                backgroundColor: '#f44336',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#d32f2f',
                },
              }}
            >
              Cerrar Sesión
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};