import React, { useState, useEffect } from 'react';
import { 
  TextField, Button, FormControlLabel, Switch,
  Grid, Box, Typography, InputAdornment, Alert,
  FormHelperText, CircularProgress, Divider
} from '@mui/material';
import {
  AttachMoney as MoneyIcon,
  Inventory as InventoryIcon,
  Description as DescriptionIcon,
  Label as LabelIcon
} from '@mui/icons-material';

const ProductForm = ({ product, onSubmit, loading, error, isEdit = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    descripcion: '',
    price: '',
    stock: '',
    status: true
  });
  
  const [errors, setErrors] = useState({
    name: '',
    descripcion: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    if (product && isEdit) {
      setFormData({
        name: product.name || '',
        descripcion: product.descripcion || '',
        price: product.price?.toString() || '',
        stock: product.stock?.toString() || '',
        status: product.status !== undefined ? product.status : true
      });
    }
  }, [product, isEdit]);

  const validateField = (name, value) => {
    let errorMessage = '';
    
    switch (name) {
      case 'name':
        if (!value) errorMessage = 'El nombre es obligatorio';
        else if (value.length < 3) errorMessage = 'El nombre debe tener al menos 3 caracteres';
        break;
      case 'descripcion':
        if (!value) errorMessage = 'La descripción es obligatoria';
        else if (value.length < 10) errorMessage = 'La descripción debe tener al menos 10 caracteres';
        break;
      case 'price':
        if (!value) errorMessage = 'El precio es obligatorio';
        else if (isNaN(value) || parseFloat(value) <= 0) errorMessage = 'Ingrese un precio válido mayor a 0';
        break;
      case 'stock':
        if (!value && value !== '0') errorMessage = 'El stock es obligatorio';
        else if (isNaN(value) || parseInt(value) < 0) errorMessage = 'Ingrese un valor de stock válido (0 o mayor)';
        break;
      default:
        break;
    }
    
    return errorMessage;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));
    
    if (name !== 'status') {
      const errorMessage = validateField(name, newValue);
      setErrors(prev => ({
        ...prev,
        [name]: errorMessage
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validar todos los campos
    const newErrors = {
      name: validateField('name', formData.name),
      descripcion: validateField('descripcion', formData.descripcion),
      price: validateField('price', formData.price),
      stock: validateField('stock', formData.stock)
    };
    
    setErrors(newErrors);
    
    // Verificar si hay errores
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }
    
    // Convertir price y stock a números
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock, 10)
    };
    
    onSubmit(productData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="Nombre del Producto"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            error={!!errors.name}
            helperText={errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LabelIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <Box sx={{ mt: 1 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={formData.status}
                  onChange={handleChange}
                  name="status"
                  color="primary"
                />
              }
              label={formData.status ? "Producto activo" : "Producto inactivo"}
            />
            <FormHelperText>
              Los productos inactivos no aparecerán en la tienda
            </FormHelperText>
          </Box>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Descripción"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            multiline
            rows={4}
            required
            error={!!errors.descripcion}
            helperText={errors.descripcion || "Proporcione una descripción clara y detallada del producto"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Precio"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            required
            error={!!errors.price}
            helperText={errors.price}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MoneyIcon color="primary" />
                </InputAdornment>
              ),
              endAdornment: <InputAdornment position="end">Q</InputAdornment>,
            }}
          />
        </Grid>
        
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Stock"
            name="stock"
            type="number"
            value={formData.stock}
            onChange={handleChange}
            required
            error={!!errors.stock}
            helperText={errors.stock}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InventoryIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      
      <Divider sx={{ my: 3 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={20} /> : null}
          sx={{ px: 4 }}
        >
          {loading ? "Procesando..." : (isEdit ? "Guardar Cambios" : "Crear Producto")}
        </Button>
      </Box>
    </Box>
  );
};

export default ProductForm;