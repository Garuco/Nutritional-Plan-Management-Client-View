import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export interface FoodExchange {
  category: string;
  exchanges: string[];
}

// Servicio para obtener la colección de intercambios de comida de la nutricionista
export const fetchFoodExchangesForPatient = async (
  adminId: string
): Promise<FoodExchange[]> => {
  try {
    const adminFoodExchangesRef = collection(
      db,
      `administrators/${adminId}/food exchanges`
    );
    const categoriesDocs = await getDocs(adminFoodExchangesRef);

    const foodExchanges: FoodExchange[] = [];

    for (const categoryDoc of categoriesDocs.docs) {
      const exchangesCollection = collection(categoryDoc.ref, "exchanges");
      const exchangesDocs = await getDocs(exchangesCollection);

      const exchanges = exchangesDocs.docs.map((doc) => doc.data().text);

      foodExchanges.push({
        category: categoryDoc.id,
        exchanges: exchanges.length ? exchanges : [],
      });
    }

    return foodExchanges;
  } catch (error) {
    console.error("Error fetching food exchanges for patient:", error);
    return [];
  }
};
