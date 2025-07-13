import React, { useState, useEffect } from 'react';
import { 
  Container, Typography, Box, Button, Paper, Table, 
  TableBody, TableCell, TableContainer, TableHead, 
  TableRow, Chip, IconButton, TextField, InputAdornment,
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Alert, Snackbar, Grid, Divider,
  CircularProgress, TablePagination
} from '@mui/material';
import { 
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Sort as SortIcon,
  Refresh as RefreshIcon
} from '@mui/icons-material';
import { ProductModal } from '../../components/admin';
import { useProducts } from '../../shared/hooks';

export const ProductManagementPage = () => {
  const { 
    products, 
    loading, 
    error, 
    fetchProducts, 
    createProduct, 
    updateProduct, 
    deleteProduct 
  } = useProducts();
  
  // Estados para modales y acciones
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [actionSuccess, setActionSuccess] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // Estados para búsqueda y filtrado
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [showActive, setShowActive] = useState(true);
  
  // Estado para paginación
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    document.title = 'Administración de Productos';
  }, []);

  // Filtrado y ordenamiento de productos
  const filteredProducts = products
    .filter(product => 
      (showActive ? product.status : true) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortDirection === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  // Productos paginados
  const paginatedProducts = filteredProducts.slice(
    page * rowsPerPage, 
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleOpenEditModal = (product) => {
    setSelectedProduct(product);
    setShowEditModal(true);
  };

  const handleOpenDeleteModal = (productId, productName) => {
    setProductIdToDelete(productId);
    setSelectedProduct({ name: productName });
    setShowDeleteModal(true);
  };

  const handleCreateProduct = async (productData) => {
    const result = await createProduct(productData);
    if (result) {
      setShowCreateModal(false);
      setActionSuccess('Producto creado exitosamente');
      setSnackbarOpen(true);
    }
  };

  const handleUpdateProduct = async (productData) => {
    if (!selectedProduct) return;
    const result = await updateProduct(selectedProduct.uid, productData);
    if (result) {
      setShowEditModal(false);
      setActionSuccess('Producto actualizado exitosamente');
      setSnackbarOpen(true);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!productIdToDelete) return;
    const result = await deleteProduct(productIdToDelete);
    if (result) {
      setShowDeleteModal(false);
      setActionSuccess('Producto eliminado exitosamente');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ p: 3, bgcolor: 'background.default' }}>
          <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
            <Grid item xs={12} md={8}>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 0.5 }}>
                Administración de Productos
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Gestione el catálogo de productos: cree, actualice y elimine productos para su tienda.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleOpenCreateModal}
                sx={{ borderRadius: 2 }}
              >
                Crear Nuevo Producto
              </Button>
            </Grid>
          </Grid>

          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button
                  variant={sortDirection === 'asc' ? "contained" : "outlined"}
                  color="secondary"
                  startIcon={<SortIcon />}
                  onClick={toggleSortDirection}
                  size="small"
                >
                  {sortDirection === 'asc' ? 'A-Z' : 'Z-A'}
                </Button>
                <Button
                  variant={showActive ? "contained" : "outlined"}
                  color="secondary"
                  startIcon={<FilterListIcon />}
                  onClick={() => setShowActive(!showActive)}
                  size="small"
                >
                  {showActive ? 'Activos' : 'Todos'}
                </Button>
                <IconButton color="primary" onClick={fetchProducts} size="small">
                  <RefreshIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Divider />

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ p: 3 }}>
            <Alert 
              severity="error" 
              action={
                <Button color="inherit" size="small" onClick={fetchProducts}>
                  Reintentar
                </Button>
              }
            >
              {error}
            </Alert>
          </Box>
        ) : filteredProducts.length === 0 ? (
          <Box sx={{ 
            p: 6, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Box sx={{ 
              width: 100, 
              height: 100, 
              borderRadius: '50%', 
              bgcolor: 'action.hover', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              mb: 2 
            }}>
              <FilterListIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            </Box>
            <Typography variant="h6" color="textSecondary">
              {searchTerm ? 'No se encontraron productos con esa búsqueda' : 'No hay productos disponibles'}
            </Typography>
            {searchTerm && (
              <Button 
                sx={{ mt: 2 }}
                variant="outlined"
                onClick={() => setSearchTerm('')}
              >
                Limpiar búsqueda
              </Button>
            )}
          </Box>
        ) : (
          <>
            <TableContainer>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold' }}>Nombre</TableCell>
                    <TableCell sx={{ fontWeight: 'bold' }}>Descripción</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Precio</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Stock</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Estado</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedProducts.map((product) => (
                    <TableRow 
                      key={product.uid} 
                      hover
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'medium' }}>
                        {product.name}
                      </TableCell>
                      <TableCell>
                        <Box sx={{ 
                          maxWidth: 400, 
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}>
                          {product.descripcion}
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 'bold' }}>
                        Q{product.price.toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <Chip 
                          label={product.stock}
                          color={
                            product.stock > 10 ? 'success' : 
                            product.stock > 0 ? 'warning' : 
                            'error'
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Chip 
                          label={product.status ? 'Activo' : 'Inactivo'}
                          color={product.status ? 'success' : 'default'}
                          variant="outlined"
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <IconButton 
                          size="small" 
                          color="primary"
                          onClick={() => handleOpenEditModal(product)}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton 
                          size="small" 
                          color="error"
                          onClick={() => handleOpenDeleteModal(product.uid, product.name)}
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={filteredProducts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Paper>

      {/* Modal para crear producto */}
      <ProductModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSubmit={handleCreateProduct}
        loading={loading}
        error={error}
        isEdit={false}
      />

      {/* Modal para editar producto */}
      <ProductModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        product={selectedProduct}
        onSubmit={handleUpdateProduct}
        loading={loading}
        error={error}
        isEdit={true}
      />

      {/* Dialog de confirmación para eliminar */}
      <Dialog
        open={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle sx={{ color: 'error.main' }}>
          Confirmar Eliminación
        </DialogTitle>
        <DialogContent>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            mb: 2 
          }}>
            <Box sx={{ 
              bgcolor: 'error.light', 
              color: 'error.main', 
              borderRadius: '50%', 
              p: 2, 
              mb: 2 
            }}>
              <DeleteIcon fontSize="large" />
            </Box>
            <DialogContentText>
              ¿Está seguro que desea eliminar este producto?
            </DialogContentText>
            {selectedProduct && (
              <Typography variant="subtitle1" sx={{ mt: 1, fontWeight: 'medium' }}>
                "{selectedProduct.name}"
              </Typography>
            )}
          </Box>
          <Alert severity="warning" sx={{ mt: 2 }}>
            Esta acción cambiará el estado del producto a inactivo. No se eliminará permanentemente de la base de datos.
          </Alert>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button 
            variant="outlined"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancelar
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            onClick={handleDeleteConfirm} 
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? 'Eliminando...' : 'Eliminar Producto'}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar para mostrar mensajes de éxito */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
          {actionSuccess}
        </Alert>
      </Snackbar>
    </Container>
  );
};

