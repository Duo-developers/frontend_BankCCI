import React from 'react';
import { Box } from '@mui/material';
import { Login } from '../../components/Login';

export const LoginPage = () => {
  const switchAuthHandler = () => {
    console.log('Switch auth handler');
  };

  return (
    <Box 
      sx={{ 
        height: '100vh', 
        width: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(to bottom, #f5f7fa, #e8edf2)'
      }}
    >
      <Login switchAuthHandler={switchAuthHandler} />
    </Box>
  );
};