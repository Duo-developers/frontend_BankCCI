import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes.jsx";
import { Navbar } from "./components/Navbar"; 
import { Footer } from "./components/Footer"; 
import { Box } from "@mui/material";

export const App = () => {
  let element = useRoutes(routes);
  const location = useLocation();
  
  const isLoginPage = location.pathname === '/login'; 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {element}
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
      {!isLoginPage && <Footer />}
    </Box>
  );
};