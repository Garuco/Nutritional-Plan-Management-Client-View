import React from "react";
import { useNavigate } from "react-router-dom";
import { PatientData } from "../../services/patientLoginService"; // Asegúrate de importar la interfaz correcta

interface ProfileButtonProps {
  patient: PatientData; // Tipo de la información del paciente
  adminId: string;
  patientId: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ patient, adminId, patientId }) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Pasamos adminId, patientId y los datos del paciente en el state al navegar
    navigate("/profile", { state: { patient, adminId, patientId } });
  };

  return (
    <button onClick={handleProfileClick} className="text-white">
      Perfil
    </button>
  );
};

export default ProfileButton;
