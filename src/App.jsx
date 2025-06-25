import React from "react";
import { useRoutes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes.jsx";
import { Navbar } from "./components/Navbar"; 
import { Footer } from "./components/Footer"; 
import { Box } from "@mui/material";

export default function App() {
  const element = useRoutes(routes);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {element}
      </Box>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </Box>
  );
};