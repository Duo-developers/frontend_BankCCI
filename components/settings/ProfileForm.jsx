import React from 'react';
import {
  Box, Typography, Paper, Grid, TextField, Button,
  CircularProgress, Tooltip
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const ProfileForm = ({ 
  profileData, 
  isSubmitting, 
  handleProfileChange, 
  handleProfileSubmit 
}) => {
  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
      <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
        Información Personal
      </Typography>
      
      <Box component="form" onSubmit={handleProfileSubmit} noValidate>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="Nombre Completo" 
              name="name" 
              value={profileData.name} 
              onChange={handleProfileChange} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="Nombre de Usuario" 
              name="username" 
              value={profileData.username} 
              onChange={handleProfileChange} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="DPI" 
              name="dpi" 
              value={profileData.dpi} 
              disabled 
              InputProps={{ 
                endAdornment: (
                  <Tooltip title="El DPI no puede ser modificado.">
                    <InfoIcon color="disabled" fontSize="small" />
                  </Tooltip>
                ) 
              }} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="Email" 
              name="email" 
              value={profileData.email} 
              disabled 
              InputProps={{ 
                endAdornment: (
                  <Tooltip title="El correo no puede ser modificado.">
                    <InfoIcon color="disabled" fontSize="small" />
                  </Tooltip>
                ) 
              }} 
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Dirección" 
              name="address" 
              value={profileData.address} 
              onChange={handleProfileChange} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="Teléfono" 
              name="phone" 
              value={profileData.phone} 
              onChange={handleProfileChange} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              label="Lugar de Trabajo" 
              name="workName" 
              value={profileData.workName} 
              onChange={handleProfileChange} 
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField 
              fullWidth 
              type="number" 
              label="Ingresos Mensuales" 
              name="monthlyIncome" 
              value={profileData.monthlyIncome} 
              onChange={handleProfileChange} 
            />
          </Grid>
        </Grid>
        
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ mt: 3, py: 1.5 }} 
          disabled={isSubmitting}
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Guardar Cambios de Perfil'}
        </Button>
      </Box>
    </Paper>
  );
};

export default ProfileForm;