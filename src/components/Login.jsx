import React, { useState } from "react";
import useLogin from "../shared/hooks/useLogin";
import { validateEmail, validateEmailMessage, validatePassword, validatePasswordMessage } from "../shared/validators";
import { 
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Alert
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const { handleLogin, loading, error } = useLogin();

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!validateEmail(email)) {
      setFormError(validateEmailMessage);
      return;
    }
    if (!validatePassword(password)) {
      setFormError(validatePasswordMessage);
      return;
    }
    await handleLogin(email, password);
  };

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ width: '100%' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon sx={{ color: 'text.secondary' }} />
            </InputAdornment>
          ),
        }}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
          }
        }}
      />
      
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type={showPassword ? 'text' : 'password'}
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={{ color: 'text.secondary' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: '4px',
          }
        }}
      />
      
      {(formError || error) && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {formError || error}
        </Alert>
      )}
      
      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={loading}
        sx={{
          py: 1.5,
          backgroundColor: '#FFD915',
          color: '#002A45',
          fontWeight: 'bold',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: '#FFD358',
          },
          '&.Mui-disabled': {
            backgroundColor: '#f5f5f5',
            color: '#9e9e9e',
          }
        }}
      >
        {loading ? "Cargando..." : "Ingresar"}
      </Button>
    </Box>
  );
};

export default Login;