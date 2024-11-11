import React from "react";
import { useLocation } from "react-router-dom";
import ProfileButton from "../buttons/ProfileButton";
import NutritionalPlanButton from "../buttons/NutritionalPlanButton";

// Asegúrate de definir la interfaz PatientData si no la has importado ya
interface PatientData {
    name: string;
    lastname: string;
    birthdate: string;
    startDate: string;
    goal: string;
    email: string;
    phoneNumber: string;
    password: string;
    nextAppointment: string;
}

const ProfileScreen: React.FC = () => {
    // Recuperamos los datos del paciente del estado de la redirección
    const location = useLocation();
    const patient = location.state?.patient;
    const patientData: PatientData = location.state?.patient.patientData;

    if (!patient) {
        return <div>No se ha encontrado información del paciente.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <header className="bg-blue-800 text-white text-center py-4 text-lg font-semibold">
                App name
            </header>
            <main className="flex-grow p-6">
                {/* Mensaje de bienvenida */}
                <h1 className="text-2xl font-bold mb-4">Bienvenido, {patientData.name} {patientData.lastname}</h1>

                {/* Tabla con la información del paciente */}
                <table className="w-full border-collapse border border-orange-600 text-center mb-4">
                    <tbody>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2">Nombre del paciente:</td>
                            <td className="border border-orange-600 px-4 py-2">{patientData.name} {patientData.lastname}</td>
                            <td className="border border-orange-600 px-4 py-2">Fecha de Inicio:</td>
                            <td className="border border-orange-600 px-4 py-2">{patientData.startDate}</td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2">Correo electrónico:</td>
                            <td className="border border-orange-600 px-4 py-2">{patientData.email}</td>
                            <td className="border border-orange-600 px-4 py-2">Número:</td>
                            <td className="border border-orange-600 px-4 py-2">{patientData.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2">Objetivo:</td>
                            <td className="border border-orange-600 px-4 py-2">{patientData.goal}</td>
                            <td className="border border-orange-600 px-4 py-2">Siguiente cita:</td>
                            <td className="border border-orange-600 px-4 py-2">{patientData.nextAppointment}</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer className="bg-blue-800 flex justify-around py-4">
                <ProfileButton patient={patient} />
                <NutritionalPlanButton patient={patient} />
                <button className="text-white">Base de Datos</button>
            </footer>
        </div>
    );
};

export default ProfileScreen;
