import React from "react";
import { useRegister } from "../../shared/hooks/useRegister";

const RegisterPage = () => {
  const { register, isLoading } = useRegister();
  const [form, setForm] = React.useState({
    username: "",
    password: "",
    name: "",
    dpi: "",
    address: "",
    phone: "",
    email: "",
    workName: "",
    monthlyIncome: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2>Registrar nuevo usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>DPI</label>
          <input
            type="text"
            name="dpi"
            value={form.dpi}
            onChange={handleChange}
            required
            minLength={13}
            maxLength={13}
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Teléfono</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Nombre del trabajo</label>
          <input
            type="text"
            name="workName"
            value={form.workName}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <div>
          <label>Ingreso mensual</label>
          <input
            type="number"
            name="monthlyIncome"
            value={form.monthlyIncome}
            onChange={handleChange}
            required
            min={0}
            style={{ width: "100%", marginBottom: 12 }}
          />
        </div>
        <button type="submit" disabled={isLoading} style={{ width: "100%" }}>
          {isLoading ? "Registrando..." : "Registrar"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
