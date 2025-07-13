import { useState, useEffect, useCallback } from 'react';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../../services/api';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Usar useCallback para mantener la referencia estable entre renderizados
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Error al cargar productos');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, []); // Sin dependencias para mantener la función estable

  const fetchProductById = useCallback(async (productId) => {
    setLoading(true);
    try {
      const response = await getProductById(productId);
      setSelectedProduct(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error al obtener el producto');
      console.error('Error fetching product:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCreateProduct = useCallback(async (productData) => {
    setLoading(true);
    try {
      const response = await createProduct(productData);
      setProducts(prev => [...prev, response.data]);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error al crear producto');
      console.error('Error creating product:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleUpdateProduct = useCallback(async (productId, productData) => {
    setLoading(true);
    try {
      const response = await updateProduct(productId, productData);
      setProducts(prev => prev.map(p => p.uid === productId ? response.data : p));
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Error al actualizar producto');
      console.error('Error updating product:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDeleteProduct = useCallback(async (productId) => {
    setLoading(true);
    try {
      await deleteProduct(productId);
      setProducts(prev => prev.filter(p => p.uid !== productId));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || 'Error al eliminar producto');
      console.error('Error deleting product:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Efecto para cargar productos al montar el componente
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // Ahora es seguro incluir fetchProducts porque es estable

  return {
    products,
    loading,
    error,
    selectedProduct,
    fetchProducts,
    getProductById: fetchProductById,
    createProduct: handleCreateProduct,
    updateProduct: handleUpdateProduct,
    deleteProduct: handleDeleteProduct,
    setSelectedProduct
  };
};