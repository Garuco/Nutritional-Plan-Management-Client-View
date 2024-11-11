import React from "react";
import { useNavigate } from "react-router-dom";
import { PatientData } from "../../services/patientLoginService";

interface NutritionalPlanButtonProps {
  patient: PatientData;
}

const NutritionalPlanButton: React.FC<NutritionalPlanButtonProps> = ({ patient }) => {
  const navigate = useNavigate();

  const handleNutritionalPlanClick = () => {
    navigate("/nutritional-plan", { state: { patient } });
  };

  return (
    <button onClick={handleNutritionalPlanClick} className="text-white">
      Plan Nutricional
    </button>
  );
};

export default NutritionalPlanButton;
