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
                <h1 className="text-2xl font-bold mb-4 text-center">Bienvenido {patientData.name}</h1>

                {/* Tabla con una sola columna que muestra la información del paciente */}
                <table className="w-full border-collapse border border-orange-600 mb-4 text-left">
                    <tbody>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2" colSpan={2}>
                                <strong>Nombre del paciente:</strong> {patientData.name} {patientData.lastname}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2" colSpan={2}>
                                <strong>Fecha de Inicio:</strong> {patientData.startDate}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2" colSpan={2}>
                                <strong>Correo electrónico:</strong> {patientData.email}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2" colSpan={2}>
                                <strong>Número:</strong> {patientData.phoneNumber}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2" colSpan={2}>
                                <strong>Objetivo:</strong> {patientData.goal}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-orange-600 px-4 py-2" colSpan={2}>
                                <strong>Siguiente cita:</strong> {patientData.nextAppointment}
                            </td>
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
