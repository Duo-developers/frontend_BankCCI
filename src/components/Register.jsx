import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container
} from "@mui/material";
import {
  validateEmail,
  validatePassword,
  validateUsername, 
  validateEmailMessage,
  validatePasswordMessage,
  validateUsernameMessage 
} from "../shared/validators";
import { useRegister } from "../shared/hooks/useRegister"; 


export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(
      formState.email.value, 
      formState.password.value, 
      formState.username.value
    );
  };

  const isSubmitDisabled =
    isLoading || 
    !formState.email.isValid || 
    !formState.password.isValid || 
    !formState.username.isValid;

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        borderRadius: 1,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          mb: 4
        }}>
          <Box 
            component="img"
            src="https://res.cloudinary.com/dwc4ynoj9/image/upload/v1751093545/banck_CCI_sinfondo-removebg_gdhpkm.png"
            alt="Bank CCI Logo"
            sx={{ height: 60, mb: 2 }}
          />
          <Typography variant="h5" component="h1" fontWeight="500">
            Crear cuenta
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Regístrate para comenzar a usar nuestra plataforma
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleRegister}>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre de usuario"
            name="username"
            type="text"
            value={formState.username.value}
            onChange={(e) => handleInputValueChange(e.target.value, "username")}
            onBlur={(e) => handleInputValidationOnBlur(e.target.value, "username")}
            error={formState.username.showError}
            helperText={formState.username.showError ? validateUsernameMessage : ""}
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={formState.email.value}
            onChange={(e) => handleInputValueChange(e.target.value, "email")}
            onBlur={(e) => handleInputValidationOnBlur(e.target.value, "email")}
            error={formState.email.showError}
            helperText={formState.email.showError ? validateEmailMessage : ""}
            sx={{ mb: 2 }}
          />
          
          <TextField
            fullWidth
            margin="normal"
            label="Contraseña"
            name="password"
            type="password"
            value={formState.password.value}
            onChange={(e) => handleInputValueChange(e.target.value, "password")}
            onBlur={(e) => handleInputValidationOnBlur(e.target.value, "password")}
            error={formState.password.showError}
            helperText={formState.password.showError ? validatePasswordMessage : ""}
            sx={{ mb: 3 }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitDisabled}
            sx={{
              py: 1.5,
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '0.9rem'
            }}
          >
            {isLoading ? "Procesando..." : "Registrarse"}
          </Button>
          
          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Typography 
              variant="body2" 
              color="primary"
              onClick={switchAuthHandler}
              sx={{ cursor: 'pointer' }}
            >
              ¿Ya tienes una cuenta? Inicia sesión aquí
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

Register.propTypes = {
    switchAuthHandler: PropTypes.func.isRequired,
};
  