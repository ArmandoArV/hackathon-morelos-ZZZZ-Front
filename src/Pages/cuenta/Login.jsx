import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="login-container">
        <div className="title">
          <h1>Bienvenida</h1>
        </div>

        <form className="form-login-container">
          <div className="wrapper">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu email"
              id="input-name"
              required
            />
          </div>

          <div className="wrapper">
            <label>Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <div className="wrapper">
            <label className="contra">Olvide mi contraseña</label>
          </div>

          <div>
            <button type="submit" className="btn-submitt-login">
              <Link to="/informacion-personal">
                {" "}
                <font color="#5B57F4">Iniciar sesión</font>
              </Link>
            </button>
          </div>
        </form>

        <span></span>
      </div>
    </main>
  );
};

export default Login;
