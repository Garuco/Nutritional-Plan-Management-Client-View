// src/components/buttons/FoodExchangesButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { PatientData } from "../../services/patientLoginService"; // Ajusta la ruta según tu estructura de carpetas
import { Square3Stack3DIcon } from "@heroicons/react/24/outline"; // Importa el icono que necesitas

interface FoodExchangesButtonProps {
  adminId: string;
  patientId: string;
  patient: PatientData;
}

const FoodExchangesButton: React.FC<FoodExchangesButtonProps> = ({
  adminId,
  patientId,
  patient,
}) => {
  const navigate = useNavigate();

  const handleFoodExchangesClick = () => {
    // Pasamos adminId, patientId y los datos del paciente en el state al navegar
    navigate("/food-exchanges", { state: { adminId, patientId, patient } });
  };

  return (
    <button
      onClick={handleFoodExchangesClick}
      className="flex items-center space-x-2 text-white font-comfortaa hover:text-darkOrange transition"
    >
      <Square3Stack3DIcon className="h-6 w-6" /> {/* Tamaño del icono ajustado */}
    </button>
  );
};

export default FoodExchangesButton;
