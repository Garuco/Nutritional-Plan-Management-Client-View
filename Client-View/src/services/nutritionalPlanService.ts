import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

// Interfaz para representar los datos del plan nutricional
export interface NutritionalPlanData {
  [x: string]: any;
  mealCategories: string[]; // Tiempos de comida
  exchanges: FoodExchange[]; // Categorías de intercambio
  notes: string; // Notas del plan
}

export interface FoodExchange {
  name: string;
  total: number;
  quantities: number[];
}

// Servicio para obtener el plan nutricional de un paciente
export const getPatientNutritionalPlan = async (
  adminId: string,
  patientId: string
): Promise<NutritionalPlanData | null> => {
  if (!adminId || !patientId) {
    throw new Error("adminId y patientId son requeridos para obtener el plan nutricional.");
  }

  try {
    const nutritionalPlanRef = doc(
      db,
      `administrators/${adminId}/patients/${patientId}/nutritionalPlan/currentPlan`
    );
    const snapshot = await getDoc(nutritionalPlanRef);

    if (!snapshot.exists()) {
      console.log("No se encontró un plan nutricional.");
      return null;
    }

    return snapshot.data() as NutritionalPlanData;
  } catch (error) {
    console.error("Error obteniendo el plan nutricional:", error);
    throw new Error("No se pudo obtener el plan nutricional.");
  }
};

