import React from 'react';
import {
  Box, Typography, Paper, Grid, TextField, Button,
  CircularProgress
} from '@mui/material';
import { PasswordStrengthIndicator } from '../common/PasswordStrengthIndicator';

const PasswordForm = ({ 
  passwordData, 
  isSubmitting, 
  errors, 
  handlePasswordChange, 
  handlePasswordSubmit 
}) => {
  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
        Cambiar Contraseña
      </Typography>
      
      <Box component="form" onSubmit={handlePasswordSubmit} noValidate>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              type="password" 
              label="Contraseña Actual" 
              name="currentPassword" 
              value={passwordData.currentPassword} 
              onChange={handlePasswordChange} 
              required 
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              type="password" 
              label="Nueva Contraseña" 
              name="newPassword" 
              value={passwordData.newPassword} 
              onChange={handlePasswordChange} 
              required 
              error={!!errors.newPassword} 
              helperText={errors.newPassword} 
            />
            {passwordData.newPassword && (
              <PasswordStrengthIndicator password={passwordData.newPassword} />
            )}
          </Grid>
          
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              type="password" 
              label="Confirmar Nueva Contraseña" 
              name="confirmNewPassword" 
              value={passwordData.confirmNewPassword} 
              onChange={handlePasswordChange} 
              required 
              error={!!errors.confirmNewPassword} 
              helperText={errors.confirmNewPassword} 
            />
          </Grid>
        </Grid>
        
        <Button 
          type="submit" 
          variant="contained" 
          sx={{ mt: 3, py: 1.5 }} 
          disabled={isSubmitting}
        >
          {isSubmitting ? <CircularProgress size={24} /> : 'Actualizar Contraseña'}
        </Button>
      </Box>
    </Paper>
  );
};

export default PasswordForm;