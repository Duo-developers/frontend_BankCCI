import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Button, 
  Card, 
  CardContent, 
  IconButton, 
  Divider, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar,
  ListItemSecondaryAction,
  Chip,
  Tooltip,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import EditIcon from '@mui/icons-material/Edit';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SortIcon from '@mui/icons-material/Sort';
import InfoIcon from '@mui/icons-material/Info';

const KpiCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 12,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const ActionCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 12,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

const kpiData = [
  { 
    id: 1, 
    title: 'Usuarios Activos', 
    value: '1,249', 
    change: '+5.8%', 
    trend: 'up', 
    icon: <PeopleAltIcon />,
    color: '#4caf50' 
  },
  { 
    id: 2, 
    title: 'Cuentas Totales', 
    value: '2,871', 
    change: '+3.2%', 
    trend: 'up', 
    icon: <AccountBalanceWalletIcon />,
    color: '#2196f3' 
  },
  { 
    id: 3, 
    title: 'Volumen Transaccional', 
    value: '$32,568', 
    change: '+12.4%', 
    trend: 'up', 
    icon: <MonetizationOnIcon />,
    color: '#673ab7' 
  },
  { 
    id: 4, 
    title: 'Productos en Catálogo', 
    value: '145', 
    change: '+2.5%', 
    trend: 'up', 
    icon: <InventoryIcon />,
    color: '#ff9800' 
  },
];

const topAccountsData = [
  { name: 'Cuenta #5472', movements: 128 },
  { name: 'Cuenta #3821', movements: 96 },
  { name: 'Cuenta #9274', movements: 84 },
  { name: 'Cuenta #1084', movements: 72 },
  { name: 'Cuenta #4529', movements: 65 },
];

const recentActivities = [
  { 
    id: 1, 
    action: 'Nuevo usuario creado', 
    details: 'Usuario: Carlos Mendoza', 
    timestamp: 'Hace 10 minutos', 
    status: 'success' 
  },
  { 
    id: 2, 
    action: 'Depósito realizado', 
    details: '$5,000 a cuenta #7821', 
    timestamp: 'Hace 25 minutos', 
    status: 'success' 
  },
  { 
    id: 3, 
    action: 'Intento de acceso fallido', 
    details: 'IP: 192.168.1.45', 
    timestamp: 'Hace 40 minutos', 
    status: 'warning' 
  },
  { 
    id: 4, 
    action: 'Cuenta actualizada', 
    details: 'Cuenta #3921 - Nuevo límite', 
    timestamp: 'Hace 1 hora', 
    status: 'success' 
  },
  { 
    id: 5, 
    action: 'Producto añadido', 
    details: 'Seguro de viaje premium', 
    timestamp: 'Hace 2 horas', 
    status: 'success' 
  },
];

export const AdminPage = () => {
  const [sortOrder, setSortOrder] = useState('desc');
  
  const sortedAccountsData = [...topAccountsData].sort((a, b) => {
    return sortOrder === 'desc' 
      ? b.movements - a.movements 
      : a.movements - b.movements;
  });
  
  return (
    <Box sx={{ py: 4, bgcolor: '#f9fbfd', minHeight: 'calc(100vh - 64px)' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom color="primary.dark">
            Panel de Administración
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Vista general del sistema bancario. Fecha actual: 12 de Julio, 2025
          </Typography>
        </Box>
        
        {/* Componente 1: KPIs del Sistema */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {kpiData.map((kpi) => (
            <Grid item xs={12} sm={6} md={3} key={kpi.id}>
              <KpiCard elevation={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Avatar sx={{ bgcolor: kpi.color + '20', color: kpi.color }}>
                    {kpi.icon}
                  </Avatar>
                  <Chip 
                    label={kpi.change} 
                    size="small" 
                    color={kpi.trend === 'up' ? 'success' : 'error'}
                    sx={{ fontWeight: 'bold' }}
                  />
                </Box>
                <Typography variant="h4" fontWeight="bold" sx={{ mb: 0.5 }}>
                  {kpi.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {kpi.title}
                </Typography>
              </KpiCard>
            </Grid>
          ))}
        </Grid>
        
        {/* Componente 2: Atajos Administrativos */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={4}>
            <ActionCard elevation={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#4caf50', mr: 2 }}>
                  <PersonAddIcon />
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  Agregar Nuevo Cliente
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Registra un nuevo usuario en el sistema con rol de cliente.
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                color="success"
                component={Link}
                to="/admin/users/new"
                sx={{ mt: 'auto' }}
              >
                Crear Cliente
              </Button>
            </ActionCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ActionCard elevation={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#2196f3', mr: 2 }}>
                  <AddCardIcon />
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  Realizar Depósito
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Deposita fondos en la cuenta de un cliente existente.
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                color="primary"
                component={Link}
                to="/admin/deposits/new"
                sx={{ mt: 'auto' }}
              >
                Nuevo Depósito
              </Button>
            </ActionCard>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <ActionCard elevation={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: '#ff9800', mr: 2 }}>
                  <EditIcon />
                </Avatar>
                <Typography variant="h6" fontWeight="bold">
                  Modificar Depósito
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Edita o corrige los detalles de un depósito existente.
              </Typography>
              <Button 
                variant="contained" 
                fullWidth
                color="warning"
                component={Link}
                to="/admin/deposits"
                sx={{ mt: 'auto' }}
              >
                Ver Depósitos
              </Button>
            </ActionCard>
          </Grid>
        </Grid>
        
        {/* Componente 3: Vista Previa de Reporte Clave */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" fontWeight="bold">
                  Top 5 - Cuentas con más movimientos
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                    <InputLabel id="sort-order-label">Ordenar</InputLabel>
                    <Select
                      labelId="sort-order-label"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      label="Ordenar"
                      startAdornment={<SortIcon fontSize="small" sx={{ mr: 1 }} />}
                    >
                      <MenuItem value="desc">Mayor a menor</MenuItem>
                      <MenuItem value="asc">Menor a mayor</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={sortedAccountsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <RechartsTooltip formatter={(value) => [`${value} movimientos`, 'Movimientos']} />
                  <Bar 
                    dataKey="movements" 
                    name="Movimientos" 
                    fill="#003F66" 
                    barSize={50}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button 
                  component={Link}
                  to="/admin/reports" 
                  color="primary"
                >
                  Ver Reporte Completo
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        {/* Componente 4: Log de Actividad Reciente */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
                Actividad Reciente del Sistema
              </Typography>
              
              <List>
                {recentActivities.map((activity, index) => (
                  <React.Fragment key={activity.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar 
                          sx={{ 
                            bgcolor: activity.status === 'success' ? 'success.light' : 'warning.light',
                            color: activity.status === 'success' ? 'success.dark' : 'warning.dark'
                          }}
                        >
                          {activity.status === 'success' ? <CheckCircleIcon /> : <WarningIcon />}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={activity.action}
                        secondary={
                          <>
                            <Typography component="span" variant="body2" color="text.primary">
                              {activity.details}
                            </Typography>
                            {" — "}
                            <Typography component="span" variant="body2" color="text.secondary">
                              {activity.timestamp}
                            </Typography>
                          </>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Tooltip title="Ver detalles">
                          <IconButton edge="end" aria-label="ver detalles">
                            <InfoIcon />
                          </IconButton>
                        </Tooltip>
                      </ListItemSecondaryAction>
                    </ListItem>
                    {index < recentActivities.length - 1 && <Divider variant="inset" component="li" />}
                  </React.Fragment>
                ))}
              </List>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button 
                  variant="outlined" 
                  component={Link}
                  to="/admin/logs"
                >
                  Ver Todo el Historial
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};