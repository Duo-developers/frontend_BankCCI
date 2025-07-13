import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, IconButton, Box, Typography
} from '@mui/material';
import { 
  Close as CloseIcon,
  AddCircle as AddIcon,
  Edit as EditIcon 
} from '@mui/icons-material';
import ProductForm from './ProductForm';

const ProductModal = ({ 
  open, 
  onClose, 
  product, 
  onSubmit, 
  loading, 
  error,
  isEdit = false 
}) => {
  return (
    <Dialog 
      open={open} 
      onClose={loading ? undefined : onClose} 
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: 'hidden'
        }
      }}
    >
      <DialogTitle 
        sx={{ 
          bgcolor: 'background.default', 
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isEdit ? (
            <EditIcon sx={{ mr: 1, color: 'primary.main' }} />
          ) : (
            <AddIcon sx={{ mr: 1, color: 'primary.main' }} />
          )}
          <Typography variant="h6" component="div">
            {isEdit ? "Editar Producto" : "Crear Nuevo Producto"}
          </Typography>
        </Box>
        {!loading && (
          <IconButton 
            edge="end" 
            color="inherit" 
            onClick={onClose} 
            aria-label="close"
            size="small"
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers sx={{ p: 3 }}>
        <ProductForm
          product={product}
          onSubmit={onSubmit}
          loading={loading}
          error={error}
          isEdit={isEdit}
        />
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button
          onClick={onClose}
          color="inherit"
          disabled={loading}
        >
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;