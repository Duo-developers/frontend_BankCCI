import React from 'react';
import { Table, Button, Badge, Spinner, Alert } from 'react-bootstrap';

const ProductsTable = ({ products, loading, error, onEdit, onDelete, onRefresh }) => {
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-2">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" className="my-3">
        {error}
        <Button variant="outline-danger" size="sm" className="ms-3" onClick={onRefresh}>
          Reintentar
        </Button>
      </Alert>
    );
  }

  if (!products || products.length === 0) {
    return (
      <Alert variant="info" className="my-3">
        No hay productos disponibles. Puedes crear un nuevo producto.
      </Alert>
    );
  }

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.uid}>
              <td>{product.name}</td>
              <td>
                <div style={{ maxHeight: '60px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {product.descripcion}
                </div>
              </td>
              <td>Q{product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>
                <Badge bg={product.status ? 'success' : 'danger'}>
                  {product.status ? 'Activo' : 'Inactivo'}
                </Badge>
              </td>
              <td>
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="me-2"
                  onClick={() => onEdit(product)}
                >
                  Editar
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={() => onDelete(product.uid)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductsTable;