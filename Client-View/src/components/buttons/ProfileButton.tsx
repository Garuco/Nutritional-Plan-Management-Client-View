import React from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid"; // Importamos el ícono de usuario
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
    <button
      onClick={handleProfileClick}
      className="bg-darkBlue text-white p-4 rounded flex items-center justify-center"
    >
      <UserIcon className="w-6 h-6" /> {/* Ícono de usuario con un tamaño ajustado */}
    </button>
  );
};

export default ProfileButton;