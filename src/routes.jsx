// Importa las páginas directamente, sin pasar por el index.js
import { HomePage } from "./pages/HomePage.jsx"; 
import { LoginPage } from "./pages/LoginPage.jsx";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];