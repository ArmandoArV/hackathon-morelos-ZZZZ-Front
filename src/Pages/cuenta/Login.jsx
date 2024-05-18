import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { API_URL } from "../../constants";
import {
  showSuccessAlert,
  showErrorAlert,
  showInfoAlert,
  showWarningAlert,
} from "../../lib/AlertsUtils";

const Login = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleEmailLogin = (e) => {
    setEmailLogin(e.target.value);
  };

  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    if (emailLogin.trim() === "" || passwordLogin.trim() === "") {
      showInfoAlert("Error", "Todos los campos son requeridos", "error");
      return;
    }
    const loginData = {
      email: emailLogin,
      password: passwordLogin,
    };

    const requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    };

    fetch(`${API_URL}/login`, requestData)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "Login successful") {
          showSuccessAlert("Éxito", "Inicio de sesión exitoso", () => {
            window.location.href = "/dashboard";
          });
          localStorage.setItem("token", data.token);
        } else if (data.message === "invalid password") {
          showWarningAlert("Error", "Contraseña incorrecta");
        } else {
          showWarningAlert("Error", "Usuario no encontrado");
        }
      })
      .catch((error) => {
        showErrorAlert("Error", error.message);
      });
  };

  return (
    <main className="login-container">
      <div className="title">
        <h1>Bienvenida</h1>
      </div>

      <form className="form-login-container" onSubmit={handleSubmitLogin}>
        <div className="wrapper">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            id="input-name"
            required
            onChange={handleEmailLogin}
          />
        </div>

        <div className="wrapper">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            required
            onChange={handlePasswordLogin}
          />
        </div>

        <div className="wrapper">
          <label className="contra">Olvide mi contraseña</label>
        </div>

        <div className="btn-submitt-login">
          <button type="submit" >
            <p>Iniciar sesión</p>
          </button>
        </div>
      </form>

      <span></span>
    </main>
  );
};

export default Login;
