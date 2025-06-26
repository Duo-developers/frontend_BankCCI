import React, { useState } from "react";
import useLogin from "../shared/hooks/useLogin";
import { validateEmail, validateEmailMessage, validatePassword, validatePasswordMessage } from "../shared/validators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { handleLogin, loading, error } = useLogin();

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!validateEmail(email)) {
      setFormError(validateEmailMessage);
      return;
    }
    if (!validatePassword(password)) {
      setFormError(validatePasswordMessage);
      return;
    }
    await handleLogin(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="login-form">
      <h2>Iniciar Sesión</h2>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {formError && <div className="error">{formError}</div>}
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading}>
        {loading ? "Cargando..." : "Ingresar"}
      </button>
    </form>
  );
};

export default Login;
