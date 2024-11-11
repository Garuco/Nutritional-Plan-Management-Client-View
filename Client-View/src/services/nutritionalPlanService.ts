// src/services/fetchPatientNutritionalPlan.ts
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export interface RowData {
    exchange: string;
    total: number;
    values: string[];
  }
  export interface NutritionalPlanData {
    mealCategories: string[];
    exchanges: FoodExchange[];
    notes: string;
  }
  
  export interface FoodExchange {
    name: string;
    total: number;
    quantities: number[];
  }

export const fetchPatientNutritionalPlan = async (
  adminId: string,
  patientId: string
) => {
  try {
    const nutritionalPlanRef = doc(
      db,
      `administrators/${adminId}/patients/${patientId}/nutritionalPlan/currentPlan`
    );

    const snapshot = await getDoc(nutritionalPlanRef);

    if (!snapshot.exists()) {
      toast.error("No se encontró un plan nutricional para este paciente.");
      return null;
    }

    return snapshot.data(); // Devuelve los datos del plan nutricional
  } catch (error) {
    console.error("Error al obtener el plan nutricional del paciente:", error);
    toast.error("Error al obtener el plan nutricional.");
    throw new Error("Failed to fetch nutritional plan.");
  }
};
