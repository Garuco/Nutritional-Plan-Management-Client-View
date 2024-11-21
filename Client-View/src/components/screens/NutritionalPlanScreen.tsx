import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPatientNutritionalPlan, NutritionalPlanData } from "../../services/nutritionalPlanService";
import ProfileButton from "../buttons/ProfileButton";
import NutritionalPlanButton from "../buttons/NutritionalPlanButton";
import LogoutButton from "../buttons/LogoutButton";  // Importa el LogoutButton
import FoodExchangesButton from "../buttons/FoodExchangesButton";

const NutritionalPlanScreen: React.FC = () => {
    const location = useLocation();
    const adminId = location.state?.adminId;
    const patientId = location.state?.patientId;
    const patient = location.state?.patient;

    const [nutritionalPlan, setNutritionalPlan] = useState<NutritionalPlanData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (adminId && patientId) {
            getPatientNutritionalPlan(adminId, patientId)
                .then(plan => setNutritionalPlan(plan))
                .catch(err => setError(`Error obteniendo el plan nutricional: ${err.message}`));
        } else {
            setError("Información incompleta: no se recibió adminId o patientId.");
        }
    }, [adminId, patientId]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <header className="bg-darkBlue text-white text-center py-4 text-lg font-semibold font-leagueSpartan uppercase">
                Nutritional Plan
                <div className="absolute top-4 right-4">
                    <LogoutButton />
                </div>
            </header>
            <main className="flex-grow p-6">
                <h1 className="text-2xl font-bold mb-4 text-left text-black font-leagueSpartan uppercase">My Plan</h1>
                {error ? (
                    <p className="text-red-500 font-comfortaa">{error}</p>
                ) : nutritionalPlan ? (
                    <div>
                        {/* Contenedor con scroll horizontal para la tabla */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-lightOrange text-left font-comfortaa">
                                <thead>
                                    <tr>
                                        <th className="border border-lightOrange px-4 py-2 bg-lightOrange text-black font-leagueSpartan uppercase">Intercambio</th>
                                        <th className="border border-lightOrange px-4 py-2 bg-lightOrange text-black text-center font-leagueSpartan uppercase">Total</th>
                                        {nutritionalPlan.mealCategories.map((category: string, index: number) => (
                                            <th key={index} className="border border-lightOrange px-4 py-2 bg-lightOrange text-black text-center font-leagueSpartan uppercase">
                                                {category}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {nutritionalPlan.exchanges
                                        .filter((type: any) => type.total > 0)
                                        .map((type: any, rowIndex: number) => (
                                            <tr key={rowIndex}>
                                                <td className="border border-lightOrange px-4 py-2 bg-lightOrange text-black font-comfortaa">
                                                    {type.name}
                                                </td>
                                                <td className="border border-lightOrange px-4 py-2 text-center font-comfortaa">{type.total}</td>
                                                {type.quantities.map((quantity: number, colIndex: number) => (
                                                    <td
                                                        key={colIndex}
                                                        className="border border-lightOrange px-4 py-2 text-center font-comfortaa"
                                                    >
                                                        {quantity > 0 ? quantity : ""}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Notas */}
                        <div className="mt-6">
                            <h2 className="text-lg font-semibold mb-2 text-black border-b border-black font-leagueSpartan uppercase">Notas</h2>
                            <ul className="list-disc pl-6 font-comfortaa">
                                {nutritionalPlan.notes.split("\n").map((note: string, index: number) => (
                                    <li key={index} className="mb-1">
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ) : (
                    <p className="font-comfortaa">Cargando plan nutricional...</p>
                )}
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

export default NutritionalPlanScreen;
