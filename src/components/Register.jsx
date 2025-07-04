import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Grid
} from "@mui/material";
import { useRegister } from "../shared/hooks/useRegister";

const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();
    
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        dpi: '',
        address: '',
        phone: '',
        workName: '',
        monthlyIncome: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        await register(formData);
    };

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
                        Crear una cuenta nueva
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Completa todos los campos para registrarte
                    </Typography>
                </Box>

                <Box component="form" onSubmit={handleRegister}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nombre de usuario"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nombre Completo"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />
                        </Grid>
                    </Grid>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Correo electrónico"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Contraseña"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        helperText="La contraseña debe tener al menos 8 caracteres (Ej: Password123!)"
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="DPI (13 dígitos)"
                                name="dpi"
                                value={formData.dpi}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Teléfono"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />
                        </Grid>
                    </Grid>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Dirección"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Lugar de trabajo"
                                name="workName"
                                value={formData.workName}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Ingresos Mensuales"
                                name="monthlyIncome"
                                type="number"
                                value={formData.monthlyIncome}
                                onChange={handleChange}
                                required
                                margin="normal"
                            />
                        </Grid>
                    </Grid>
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={isLoading}
                        sx={{
                            mt: 3,
                            mb: 2,
                            py: 1.5,
                            textTransform: 'none',
                            fontWeight: 500,
                            fontSize: '0.9rem'
                        }}
                    >
                        {isLoading ? "Registrando..." : "Crear cuenta"}
                    </Button>
                    
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
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

export default Register;