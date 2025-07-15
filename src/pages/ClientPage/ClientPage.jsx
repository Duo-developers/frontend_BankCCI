import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useUser } from '../../shared/hooks/useUser';
import { CurrencyConverter } from '../../components/common/CurrencyConverter';

export const ClientPage = () => {
  const { username } = useUser();

  return (
    <Box sx={{ py: 6, bgcolor: '#f6f8fa', minHeight: '100vh' }}>
      <Container maxWidth={false} sx={{ px: { xs: 0, sm: 6 } }}>
        <Box
          sx={{
            maxWidth: 520,
            ml: { xs: 0, md: 4 },
            mt: { xs: 1, md: 6 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          {/* Saludo */}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: '#2196f3',
              mb: 1,
              textTransform: 'uppercase',
              letterSpacing: '-1px',
              lineHeight: 1
            }}
          >
            ¡Hola, {(username || 'USUARIO1').toUpperCase()}!
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400, mb: 4 }}
          >
            Bienvenido a tu panel de control.
          </Typography>
          {/* Conversor de divisas */}
          <CurrencyConverter />
        </Box>
      </Container>
    </Box>
  );
};