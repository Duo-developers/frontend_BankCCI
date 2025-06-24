// src/main.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'; // <-- Fíjate que no tiene llaves {}
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <CssBaseline /> 
      <App />
    </BrowserRouter>
);