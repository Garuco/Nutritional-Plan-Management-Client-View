// src/components/buttons/LogoutButton.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid"; // Ícono correcto

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar datos del usuario
    localStorage.removeItem("patientData");
    sessionStorage.removeItem("patientData");
    
    // Redirigir al usuario a la página de login
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center justify-center text-white bg-red-600 px-2 py-1 rounded"
    >
      <ArrowLeftStartOnRectangleIcon className="w-6 h-6 text-white" /> {/* Icono centrado */}
    </button>
  );
};

export default LogoutButton;
