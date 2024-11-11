import React from "react";
import { useNavigate } from "react-router-dom";
import { PatientData } from "../../services/patientLoginService"; // Asegúrate de importar la interfaz correcta

interface ProfileButtonProps {
  patient: PatientData; // Tipo de la información del paciente
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ patient }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile", { state: { patient } }); // Pasa la información del paciente
  };

  return (
    <button onClick={handleProfileClick} className="text-white">
      Perfil
    </button>
  );
};

export default ProfileButton;
