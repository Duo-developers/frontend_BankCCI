import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  Divider, 
  Avatar, 
  IconButton, 
  TextField, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  ListItemSecondaryAction,
  Tab, 
  Tabs,
  InputAdornment
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useUser } from '../../shared/hooks/useUser';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BalanceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(135deg, #002A45 0%, #003F66 100%)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 8,
  boxShadow: '0 8px 16px rgba(0, 63, 102, 0.2)',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '150px',
    height: '150px',
    background: 'radial-gradient(circle, rgba(255,217,21,0.3) 0%, rgba(255,217,21,0) 70%)',
    borderRadius: '50%',
    transform: 'translate(50%, -50%)',
    zIndex: 0,
  }
}));

const ActionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
}));

const TransactionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  borderRadius: 8,
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTab-root': {
    minWidth: 'unset',
    padding: theme.spacing(1, 2),
    fontWeight: 'bold',
    fontSize: '0.875rem',
  },
  '& .Mui-selected': {
    color: theme.palette.primary.main,
  },
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.primary.main,
    height: 3,
  }
}));

const TransferButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
  width: 40,
  height: 40
}));

const MainActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#003F66',
  color: 'white',
  padding: theme.spacing(1.5, 0),
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#002A45',
  },
}));

const favoriteContacts = [
  { id: 1, name: 'Laura Campos', accountNumber: '**** 4532', avatar: 'L' },
  { id: 2, name: 'Marco Antonio', accountNumber: '**** 7891', avatar: 'M' },
  { id: 3, name: 'Carlos Pérez', accountNumber: '**** 3214', avatar: 'C' }
];

const recentTransactions = [
  { 
    id: 1, 
    type: 'ingreso', 
    amount: 1500.00, 
    description: 'Depósito - Nómina', 
    date: '10 Jul 2025', 
    entity: 'Empresa XYZ' 
  },
  { 
    id: 2, 
    type: 'egreso', 
    amount: 89.99, 
    description: 'Pago - Servicios', 
    date: '08 Jul 2025', 
    entity: 'Eléctrica Nacional' 
  },
  { 
    id: 3, 
    type: 'egreso', 
    amount: 120.50, 
    description: 'Transferencia', 
    date: '05 Jul 2025', 
    entity: 'Laura Campos' 
  },
  { 
    id: 4, 
    type: 'ingreso', 
    amount: 500.00, 
    description: 'Transferencia recibida', 
    date: '01 Jul 2025', 
    entity: 'Carlos Pérez' 
  }
];

export const ClientPage = () => {
  const { username } = useUser(); // Obtenemos el nombre del usuario actual
  const [currency, setCurrency] = useState('USD');
  const [transferAmounts, setTransferAmounts] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Función para convertir moneda (simulada)
  const convertCurrency = () => {
    setCurrency(currency === 'USD' ? 'EUR' : 'USD');
  };
  
  // Función para manejar el cambio de pestaña
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  
  // Función para manejar el cambio en el campo de monto para cada contacto
  const handleAmountChange = (contactId, value) => {
    setTransferAmounts({
      ...transferAmounts,
      [contactId]: value
    });
  };
  
  // Función para manejar el envío de transferencia (simulada)
  const handleTransfer = (contactId) => {
    const amount = transferAmounts[contactId];
    if (!amount) return;
    
    // Aquí iría la lógica para procesar la transferencia
    alert(`Transferencia de $${amount} realizada con éxito`);
    
    // Limpiamos el monto del contacto específico después de la transferencia
    setTransferAmounts({
      ...transferAmounts,
      [contactId]: ''
    });
  };
  
  return (
    <Box sx={{ py: 4, bgcolor: '#f9fbfd', minHeight: 'calc(100vh - 64px)' }}>
      {/* Cambiado de maxWidth="lg" a maxWidth="xl" para que ocupe más ancho */}
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4 } }}>
        {/* Saludo principal - Ahora usando el nombre del usuario dinámicamente */}
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          gutterBottom 
          sx={{ color: '#0277bd', mb: 1 }}
        >
          ¡Hola, {username || 'Usuario'}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          Bienvenido a tu panel de control. Aquí puedes gestionar tus finanzas.
        </Typography>
        
        {/* Ajustado el espaciado entre componentes */}
        <Grid container spacing={4}>
          {/* Componente 1: Saldo Principal */}
          <Grid item xs={12} lg={5} xl={4}>
            <BalanceCard>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <AccountBalanceWalletIcon sx={{ fontSize: 28, mr: 1 }} />
                  <Typography variant="h6">Mi Saldo Principal</Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                  <Typography variant="h3" fontWeight="bold" sx={{ fontSize: '2.5rem' }}>
                    ${currency === 'USD' ? '4,850.75' : '4,460.69'}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ ml: 1 }}>
                    {currency}
                  </Typography>
                </Box>
                
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 4 }}>
                  Cuenta Corriente: **** 5678
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <Button 
                    variant="contained" 
                    size="medium"
                    startIcon={<SendIcon />}
                    sx={{ 
                      bgcolor: '#FFD915', 
                      color: '#011B2F',
                      '&:hover': { bgcolor: '#FFD358' },
                      fontWeight: 'bold',
                      px: 3
                    }}
                  >
                    TRANSFERIR
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="medium"
                    startIcon={<CurrencyExchangeIcon />}
                    onClick={convertCurrency}
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.5)', 
                      color: 'white',
                      '&:hover': { 
                        borderColor: 'white', 
                        bgcolor: 'rgba(255,255,255,0.1)' 
                      },
                      px: 2
                    }}
                  >
                    CAMBIAR A {currency === 'USD' ? 'EUR' : 'USD'}
                  </Button>
                </Box>
              </Box>
            </BalanceCard>
          </Grid>
          
          {/* Componente 2: Transferencias Rápidas - Aumentado el ancho */}
          <Grid item xs={12} lg={7} xl={8}>
            <ActionCard>
              <Typography variant="h6" fontWeight="bold" color="primary.dark" sx={{ mb: 0.5 }}>
                Transferencias Rápidas
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Envía dinero a tus contactos favoritos
              </Typography>
              
              <StyledTabs 
                value={selectedTab} 
                onChange={handleTabChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="FAVORITOS" sx={{ fontWeight: 'bold' }} />
                <Tab label="RECIENTES" sx={{ fontWeight: 'bold' }} />
              </StyledTabs>
              
              <Box sx={{ mt: 3, mb: 2 }}>
                {selectedTab === 0 && (
                  <>
                    {favoriteContacts.map((contact, index) => (
                      <Box 
                        key={contact.id}
                        sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          py: 2,
                          borderBottom: index < favoriteContacts.length - 1 ? '1px solid #eee' : 'none'
                        }}
                      >
                        <Avatar 
                          sx={{ 
                            bgcolor: '#003F66',
                            color: 'white',
                            width: 48,
                            height: 48,
                            fontSize: '1.2rem',
                            fontWeight: 'bold'
                          }}
                        >
                          {contact.avatar}
                        </Avatar>
                        <Box sx={{ ml: 2, flexGrow: 1 }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {contact.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {contact.accountNumber}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TextField
                            size="small"
                            placeholder="Monto"
                            variant="outlined"
                            value={transferAmounts[contact.id] || ''}
                            onChange={(e) => handleAmountChange(contact.id, e.target.value)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Typography sx={{ color: 'text.secondary' }}>$</Typography>
                                </InputAdornment>
                              ),
                            }}
                            sx={{ width: '140px' }}
                          />
                          <TransferButton
                            onClick={() => handleTransfer(contact.id)}
                            aria-label="transferir"
                          >
                            <ArrowForwardIcon />
                          </TransferButton>
                        </Box>
                      </Box>
                    ))}
                  </>
                )}
                
                {selectedTab === 1 && (
                  <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Typography variant="body1" color="text.secondary">
                      Tus contactos recientes aparecerán aquí.
                    </Typography>
                  </Box>
                )}
              </Box>
              
              <Box sx={{ mt: 'auto', pt: 2 }}>
                <MainActionButton 
                  fullWidth
                  variant="contained"
                  startIcon={<SendIcon />}
                >
                  NUEVA TRANSFERENCIA
                </MainActionButton>
              </Box>
            </ActionCard>
          </Grid>
          
          {/* Componente 3: Movimientos Recientes */}
          <Grid item xs={12}>
            <TransactionCard>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight="bold" color="primary.dark">
                  Movimientos Recientes
                </Typography>
                <Button 
                  size="small" 
                  color="primary"
                  component={Link}
                  to="/accounts"
                >
                  VER TODOS
                </Button>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <List sx={{ width: '100%', p: 0 }}>
                {recentTransactions.map((transaction) => (
                  <React.Fragment key={transaction.id}>
                    <ListItem 
                      alignItems="flex-start"
                      sx={{ py: 1.5 }}
                    >
                      <ListItemAvatar>
                        <Avatar 
                          sx={{ 
                            bgcolor: transaction.type === 'ingreso' ? '#4caf50' : '#ff9800',
                            color: 'white'
                          }}
                        >
                          {transaction.type === 'ingreso' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={
                          <Typography variant="subtitle2" component="span">
                            {transaction.description}
                          </Typography>
                        } 
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.secondary">
                              {transaction.entity} • {transaction.date}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Typography 
                          variant="subtitle2" 
                          color={transaction.type === 'ingreso' ? 'success.main' : 'warning.dark'}
                          fontWeight="bold"
                        >
                          {transaction.type === 'ingreso' ? '+' : '-'}${transaction.amount.toFixed(2)}
                        </Typography>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {transaction.id < recentTransactions.length && <Divider component="li" />}
                  </React.Fragment>
                ))}
              </List>
            </TransactionCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};