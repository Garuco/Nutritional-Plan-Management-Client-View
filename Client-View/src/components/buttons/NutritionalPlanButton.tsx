import React from "react";
import { useNavigate } from "react-router-dom";
import { PatientData } from "../../services/patientLoginService";

interface NutritionalPlanButtonProps {
  patient: PatientData;
  adminId: string;
  patientId: string;
}

const NutritionalPlanButton: React.FC<NutritionalPlanButtonProps> = ({ patient, adminId, patientId }) => {
  const navigate = useNavigate();

  const handleNutritionalPlanClick = () => {
    console.log("Boton Plan", adminId);
    console.log("Boton Plan", patientId);
    navigate("/nutritional-plan", { state: { patient, adminId, patientId } });
  };

  return (
    <button onClick={handleNutritionalPlanClick} className="text-white">
      Plan Nutricional
    </button>
  );
};

export default NutritionalPlanButton;
