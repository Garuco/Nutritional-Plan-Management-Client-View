import React from "react";
import { useLocation } from "react-router-dom";
import ProfileButton from "../buttons/ProfileButton";
import NutritionalPlanButton from "../buttons/NutritionalPlanButton";
import LogoutButton from "../buttons/LogoutButton";  // Importa el LogoutButton
import FoodExchangesButton from "../buttons/FoodExchangesButton";

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
    const location = useLocation();
    const patient = location.state?.patient;
    const patientData: PatientData = location.state?.patient.patientData;
    const adminId = location.state?.patient.adminId;
    const patientId = location.state?.patient.patientId;

    if (!patient || !adminId || !patientId) {
        return <div>No se ha encontrado información del paciente.</div>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <header className="bg-darkBlue text-white text-center py-4 text-lg font-semibold font-leagueSpartan uppercase relative">
                <span>Nutritional Plan</span>
                {/* Aquí se posiciona el botón de Logout */}
                <div className="absolute top-4 right-4">
                    <LogoutButton />
                </div>
            </header>
            <main className="flex-grow p-6">
                <h1 className="text-2xl font-bold mb-4 text-center text-black font-leagueSpartan uppercase">Bienvenido {patientData.name}</h1>

                <table className="w-full border-collapse border border-darkOrange mb-4 text-left font-comfortaa">
                    <tbody>
                        <tr>
                            <td className="border border-darkOrange px-4 py-2" colSpan={2}>
                                <strong>Nombre del paciente:</strong> {patientData.name} {patientData.lastname}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-darkOrange px-4 py-2" colSpan={2}>
                                <strong>Fecha de Inicio:</strong> {patientData.startDate}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-darkOrange px-4 py-2" colSpan={2}>
                                <strong>Correo electrónico:</strong> {patientData.email}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-darkOrange px-4 py-2" colSpan={2}>
                                <strong>Número:</strong> {patientData.phoneNumber}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-darkOrange px-4 py-2" colSpan={2}>
                                <strong>Objetivo:</strong> {patientData.goal}
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-darkOrange px-4 py-2" colSpan={2}>
                                <strong>Siguiente cita:</strong> {patientData.nextAppointment}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <footer className="bg-darkBlue flex justify-around py-4">
                <ProfileButton adminId={adminId} patientId={patientId} patient={patient} />
                <NutritionalPlanButton
                    adminId={adminId}
                    patientId={patientId}
                    patient={patient}
                />
                <FoodExchangesButton adminId={adminId} patientId={patientId} patient={patient} />
            </footer>
        </div>
    );
};

export default ProfileScreen;
