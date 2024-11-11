import React from "react";
import { useLocation } from "react-router-dom";
import ProfileButton from "../buttons/ProfileButton";
import NutritionalPlanButton from "../buttons/NutritionalPlanButton";
//import { PatientData } from "../../services/patientLoginService";

const NutritionalPlanScreen: React.FC = () => {
    const location = useLocation();
    const patient = location.state?.patient;
    //const patientData: PatientData = location.state?.patient.patientData;

  /*if (!patient) {
    return <div>No se ha encontrado información del paciente.</div>;
  }*/

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-blue-800 text-white text-center py-4 text-lg font-semibold">
        App name
      </header>
      <main className="flex-grow p-6">
        {/* Placeholder for the nutritional plan content */}
        <h1 className="text-2xl font-bold mb-4">Plan Nutricional</h1>
        <p>Contenido del plan nutricional del paciente.</p>
      </main>
      <footer className="bg-blue-800 flex justify-around py-4">
        <ProfileButton patient={patient} />
        <NutritionalPlanButton patient={patient} />
        <button className="text-white">Base de Datos</button>
      </footer>
    </div>
  );
};

export default NutritionalPlanScreen;
