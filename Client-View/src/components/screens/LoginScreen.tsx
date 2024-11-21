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
        console.log(patient.adminId);
        console.log(patient.patientId);
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
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://www.efadeporte.com/blog/wp-content/uploads/2024/10/cabecera-nutricion-deportiva-dieta-mediterranea-efad.jpg")',
      }}
    >
      <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-white p-6 rounded shadow-lg w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-6 text-darkBlue font-leagueSpartan uppercase">Login</h1>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 mb-4 w-64 font-comfortaa"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mb-4 w-64 font-comfortaa"
          />
          <LoginButton onClick={handleLogin} />

          {errorMessage && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded shadow-lg text-center">
                <p className="font-comfortaa">{errorMessage}</p>
                <button
                  onClick={closeErrorMessage}
                  className="bg-darkBlue text-white px-4 py-2 mt-4 rounded font-comfortaa"
                >
                  Aceptar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
