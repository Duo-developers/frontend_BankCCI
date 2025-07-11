import React, { useEffect, useState } from 'react';
import { 
  Box, Container, Typography, Paper, Grid, TextField, Button, 
  CircularProgress, Divider, Alert, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle, LinearProgress, Tooltip
} from '@mui/material';
import { useSettings } from '../../shared/hooks/useSettings';
import InfoIcon from '@mui/icons-material/Info';
import { toast } from 'react-hot-toast';

const isValidPhone = (phone) => {
  return /^\d{8,}$/.test(phone);
};

const calculatePasswordStrength = (password) => {
  if (!password) return 0;
  
  let strength = 0;
  
  strength += Math.min(password.length * 5, 30);
  
  if (/[A-Z]/.test(password)) strength += 15; // Mayúsculas
  if (/[a-z]/.test(password)) strength += 10; // Minúsculas
  if (/\d/.test(password)) strength += 15;    // Números
  if (/[^A-Za-z0-9]/.test(password)) strength += 20; // Caracteres especiales
  
  const uniqueChars = new Set(password).size;
  strength += Math.min(uniqueChars * 2, 10);
  
  return Math.min(strength, 100);
};

const PasswordStrengthIndicator = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  
  let color = '#f44336'; // Rojo (débil)
  let label = 'Débil';
  
  if (strength >= 70) {
    color = '#4caf50'; // Verde (fuerte)
    label = 'Fuerte';
  } else if (strength >= 40) {
    color = '#ff9800'; // Naranja (media)
    label = 'Media';
  }
  
  return (
    <Box sx={{ mt: 1, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2">Fortaleza:</Typography>
        <Typography variant="body2" sx={{ color }}>{label}</Typography>
      </Box>
      <LinearProgress 
        variant="determinate" 
        value={strength} 
        sx={{ 
          height: 8, 
          borderRadius: 5,
          backgroundColor: '#e0e0e0',
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
          }
        }} 
      />
    </Box>
  );
};

export const SettingsPage = () => {
  const { user, isLoading, updateUser, updatePassword, refreshUserData } = useSettings();
  
  const [profileData, setProfileData] = useState({
    name: '',
    username: '',
    email: '',
    dpi: '',
    address: '',
    phone: '',
    workName: '',
    monthlyIncome: ''
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setProfileData({
        name: user.name || '',
        username: user.username || '',
        email: user.email || '',
        dpi: user.dpi || '',
        address: user.address || '',
        phone: user.phone || '',
        workName: user.workName || '',
        monthlyIncome: user.monthlyIncome || ''
      });
    }
  }, [user]);

  const validateProfileData = () => {
    const newErrors = {};
    
    if (profileData.phone && !isValidPhone(profileData.phone)) {
      newErrors.phone = 'Ingrese un número de teléfono válido (mínimo 8 dígitos)';
    }
    
    if (profileData.monthlyIncome && (isNaN(profileData.monthlyIncome) || Number(profileData.monthlyIncome) <= 0)) {
      newErrors.monthlyIncome = 'El ingreso mensual debe ser mayor a 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePasswordData = () => {
    const newErrors = {};
    
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      newErrors.confirmNewPassword = 'Las contraseñas nuevas no coinciden';
    }
    
    if (passwordData.newPassword.length < 6) {
      newErrors.newPassword = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({ ...prevState, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData(prevState => ({ ...prevState, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateProfileData()) {
      return;
    }
    
    setPendingAction('profile');
    setConfirmDialogOpen(true);
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePasswordData()) {
      return;
    }
    
    setPendingAction('password');
    setConfirmDialogOpen(true);
  };
  
const handleConfirmAction = async () => {
  setConfirmDialogOpen(false);
  setIsSubmitting(true);
  
  try {
    if (pendingAction === 'profile') {
      const dataToUpdate = {};
      
      if (profileData.name) dataToUpdate.name = profileData.name;
      if (profileData.username) dataToUpdate.username = profileData.username;
      if (profileData.address) dataToUpdate.address = profileData.address;
      if (profileData.phone) dataToUpdate.phone = profileData.phone;
      if (profileData.workName) dataToUpdate.workName = profileData.workName;
      if (profileData.monthlyIncome) dataToUpdate.monthlyIncome = profileData.monthlyIncome;
      
      if (Object.keys(dataToUpdate).length > 0) {
        console.log("Enviando datos de actualización:", dataToUpdate);
        await updateUser(dataToUpdate);
      } else {
        toast.info('No hay cambios para guardar');
      }
    } else if (pendingAction === 'password') {
      await updatePassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });
      setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
      toast.success('Contraseña actualizada con éxito');
    }
  } catch (error) {
    console.error("Error en la actualización:", error);
    toast.error('Error al guardar los cambios');
  } finally {
    setIsSubmitting(false);
    setPendingAction(null);
  }
};

  const handleCancelAction = () => {
    setConfirmDialogOpen(false);
    setPendingAction(null);
  };

  if (isLoading && !user) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom fontWeight="bold" sx={{ color: '#002A45' }}>
        Ajustes de la Cuenta
      </Typography>
      
      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mt: 4 }}>
        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
          Información Personal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Aquí puedes actualizar tus datos personales. El DPI y el email no son modificables.
        </Typography>
        
        {Object.keys(errors).some(key => ['name', 'username', 'address', 'phone', 'workName', 'monthlyIncome'].includes(key)) && (
          <Alert severity="error" sx={{ mb: 3 }}>
            Por favor, corrija los errores en el formulario antes de continuar.
          </Alert>
        )}
        
        <Box component="form" onSubmit={handleProfileSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Nombre Completo" 
                name="name" 
                value={profileData.name} 
                onChange={handleProfileChange} 
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Nombre de Usuario" 
                name="username" 
                value={profileData.username} 
                onChange={handleProfileChange}
                error={!!errors.username}
                helperText={errors.username || "Este nombre será visible para otros usuarios"}
              />
            </Grid>
            
            {/* Campo DPI (no editable) */}
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="DPI" 
                name="dpi" 
                value={profileData.dpi} 
                disabled
                InputProps={{
                  endAdornment: (
                    <Tooltip title="El DPI no es modificable">
                      <InfoIcon color="disabled" fontSize="small" sx={{ ml: 1 }} />
                    </Tooltip>
                  ),
                }}
              />
            </Grid>
            
            {/* Campo Email (no editable) */}
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Email" 
                name="email" 
                value={profileData.email} 
                disabled
                InputProps={{
                  endAdornment: (
                    <Tooltip title="El email no es modificable">
                      <InfoIcon color="disabled" fontSize="small" sx={{ ml: 1 }} />
                    </Tooltip>
                  ),
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
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Teléfono" 
                name="phone" 
                value={profileData.phone} 
                onChange={handleProfileChange}
                error={!!errors.phone}
                helperText={errors.phone || "Mínimo 8 dígitos"}
                inputProps={{ 
                  pattern: "[0-9]*",
                  inputMode: "numeric"
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                fullWidth 
                label="Lugar de Trabajo" 
                name="workName" 
                value={profileData.workName} 
                onChange={handleProfileChange}
                error={!!errors.workName}
                helperText={errors.workName}
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
                error={!!errors.monthlyIncome}
                helperText={errors.monthlyIncome}
                inputProps={{ min: "1" }}
              />
            </Grid>
          </Grid>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ mt: 3, py: 1.5 }} 
            disabled={isLoading || isSubmitting}
          >
            {isLoading || isSubmitting ? 'Guardando...' : 'Guardar Cambios'}
          </Button>
          <Button 
            variant="outlined" 
            sx={{ mt: 3, ml: 2, py: 1.5 }} 
            onClick={refreshUserData}
            disabled={isLoading || isSubmitting}
          >
            Recargar Datos
          </Button>
        </Box>
      </Paper>
      
      <Divider sx={{ my: 6 }} />

      <Paper elevation={3} sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
          Cambiar Contraseña
        </Typography>
        
        {Object.keys(errors).some(key => ['currentPassword', 'newPassword', 'confirmNewPassword'].includes(key)) && (
          <Alert severity="error" sx={{ mb: 3 }}>
            Por favor, corrija los errores en el formulario antes de continuar.
          </Alert>
        )}
        
        <Box component="form" onSubmit={handlePasswordSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                type="password" 
                label="Contraseña Actual" 
                name="currentPassword" 
                value={passwordData.currentPassword} 
                onChange={handlePasswordChange} 
                error={!!errors.currentPassword}
                helperText={errors.currentPassword}
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
                error={!!errors.newPassword}
                helperText={errors.newPassword || "Mínimo 6 caracteres"}
                required 
              />
              {passwordData.newPassword && <PasswordStrengthIndicator password={passwordData.newPassword} />}
            </Grid>
            <Grid item xs={12}>
              <TextField 
                fullWidth 
                type="password" 
                label="Confirmar Nueva Contraseña" 
                name="confirmNewPassword" 
                value={passwordData.confirmNewPassword} 
                onChange={handlePasswordChange} 
                error={!!errors.confirmNewPassword}
                helperText={errors.confirmNewPassword}
                required 
              />
            </Grid>
          </Grid>
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ mt: 3, py: 1.5 }} 
            disabled={isLoading || isSubmitting}
          >
            {isLoading || isSubmitting ? 'Actualizando...' : 'Actualizar Contraseña'}
          </Button>
        </Box>
      </Paper>
      
      <Dialog
        open={confirmDialogOpen}
        onClose={handleCancelAction}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {pendingAction === 'profile' ? 'Confirmar cambios en el perfil' : 'Confirmar cambio de contraseña'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {pendingAction === 'profile' 
              ? '¿Está seguro de que desea guardar los cambios en su información personal?' 
              : '¿Está seguro de que desea cambiar su contraseña? Tendrá que usar la nueva contraseña la próxima vez que inicie sesión.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelAction}>Cancelar</Button>
          <Button onClick={handleConfirmAction} autoFocus variant="contained">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};