import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginButton from "../buttons/LoginButton";
import { loginPatient } from "../../services/patientLoginService";

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const patient = await loginPatient(email, password);
      if (patient.success) {
        // Redirigir a la página del perfil del paciente
        navigate("/profile", { state: { patient } });
      } else {
        setErrorMessage("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setErrorMessage("Error al intentar iniciar sesión");
    }
  };

  const closeErrorMessage = () => {
    setErrorMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-4 w-64"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-4 w-64"
      />
      <LoginButton onClick={handleLogin} />
      
      {errorMessage && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p>{errorMessage}</p>
            <button
              onClick={closeErrorMessage}
              className="bg-blue-800 text-white px-4 py-2 mt-4 rounded"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
