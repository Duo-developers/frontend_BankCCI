import Button from '@mui/material/Button';
import toast from 'react-hot-toast';

export const HomePage = () => {
  return (
    <div>
      <h1>Página de Inicio</h1>
      <p>¡Bienvenido al banco!</p>
      <Button variant="contained" onClick={() => toast.success('¡Esto es una notificación!')}>
        Mostrar Notificación
      </Button>
    </div>
  );
};