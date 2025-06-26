import { useState } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await login({ email, password });
      if (response?.error) {
        setError(response.message || "Credenciales inválidas");
        return;
      }
      if (response?.data?.token) {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: response.data.token, ...response.data })
        );
        navigate("/home");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (e) {
      setError("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};

export default useLogin;
