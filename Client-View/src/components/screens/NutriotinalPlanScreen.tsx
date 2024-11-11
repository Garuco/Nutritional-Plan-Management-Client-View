import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileButton from "../buttons/ProfileButton";
import NutritionalPlanButton from "../buttons/NutritionalPlanButton";
import { fetchPatientNutritionalPlan } from "../../services/nutritionalPlanService";

/*interface NutritionalPlanScreenProps {
  patient: any;
  adminId: string;
  patientId: string;
}*/

const NutritionalPlanScreen: React.FC = () => {
  const location = useLocation();
  const patient = location.state?.patient;
  const adminId = location.state?.adminId;
  const patientId = location.state?.patientId;

  const [nutritionalPlan, setNutritionalPlan] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadNutritionalPlan = async () => {
      try {
        const plan = await fetchPatientNutritionalPlan(adminId, patientId);
        if (plan) {
          setNutritionalPlan(plan);
        }
      } catch (error) {
        console.error("Error loading nutritional plan:", error);
      } finally {
        setLoading(false);
      }
    };

    loadNutritionalPlan();
  }, [adminId, patientId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!nutritionalPlan) {
    return <div>No se ha encontrado el plan nutricional para este paciente.</div>;
  }

  const { exchanges, mealCategories, notes } = nutritionalPlan;

  // Filtrar las categorías con total > 0
  const exchangesFiltered = exchanges.filter((exchange: any) => exchange.total > 0);

  // Dividir las notas por líneas para mostrarlas como viñetas
  const notesList = notes ? notes.split("\n") : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-blue-800 text-white text-center py-4 text-lg font-semibold">
        App name
      </header>
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Plan Nutricional</h1>

        {/* Tabla de plan nutricional */}
        <table className="w-full border-collapse border border-orange-600 text-left">
          <thead>
            <tr>
              <th className="border border-orange-600 px-4 py-2">Intercambio</th>
              {mealCategories.map((meal: any, index: any) => (
                <th key={index} className="border border-orange-600 px-4 py-2">{meal}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {exchangesFiltered.map((exchange: any, index: number) => (
              <tr key={index}>
                <td className="border border-orange-600 px-4 py-2">{exchange.name}</td>
                {exchange.quantities.map((quantity: number, idx: number) => (
                  <td key={idx} className="border border-orange-600 px-4 py-2">
                    {quantity || 0} {/* Muestra la cantidad de intercambios */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Notas del paciente */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Notas</h2>
          <ul className="list-disc pl-6">
            {notesList.map((note: any, index: any) => (
              <li key={index} className="text-sm">{note}</li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="bg-blue-800 flex justify-around py-4">
        <ProfileButton adminId={adminId} patientId={patientId} patient={patient} />
        <NutritionalPlanButton patient={patient} adminId={adminId} patientId={patientId} />
        <button className="text-white">Base de Datos</button>
      </footer>
    </div>
  );
};

export default NutritionalPlanScreen;
