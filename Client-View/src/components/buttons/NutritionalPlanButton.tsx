import React from "react";
import { useNavigate } from "react-router-dom";
import { PatientData } from "../../services/patientLoginService";
import { DocumentTextIcon } from "@heroicons/react/24/solid"; // Importa el ícono

interface NutritionalPlanButtonProps {
  patient: PatientData;
  adminId: string;
  patientId: string;
}

const NutritionalPlanButton: React.FC<NutritionalPlanButtonProps> = ({ patient, adminId, patientId }) => {
  const navigate = useNavigate();

  const handleNutritionalPlanClick = () => {
    navigate("/nutritional-plan", { state: { patient, adminId, patientId } });
  };

  return (
    <button onClick={handleNutritionalPlanClick} className="flex items-center text-white">
      <DocumentTextIcon className="w-6 h-6 text-white mr-2" /> {/* Añade el ícono */}
    </button>
  );
};

export default NutritionalPlanButton;
