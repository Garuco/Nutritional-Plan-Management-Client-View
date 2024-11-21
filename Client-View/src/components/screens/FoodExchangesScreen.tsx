import React, { useEffect, useState } from "react";
import { fetchFoodExchangesForPatient, FoodExchange } from "../../services/foodExchangesService";
import LogoutButton from "../buttons/LogoutButton";
import ProfileButton from "../buttons/ProfileButton";
import NutritionalPlanButton from "../buttons/NutritionalPlanButton";
import FoodExchangesButton from "../buttons/FoodExchangesButton";
import { useLocation } from "react-router-dom";

const FoodExchangesScreen: React.FC = () => {
  const location = useLocation();
  const adminId = location.state?.adminId;
  const patientId = location.state?.patientId;
  const patient = location.state?.patient;
  const [foodExchanges, setFoodExchanges] = useState<FoodExchange[]>([]);
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFoodExchangesForPatient(adminId);
      setFoodExchanges(data);

      // Inicializar el estado para que todas las categorías estén cerradas
      const initialState: Record<string, boolean> = {};
      data.forEach((exchange) => {
        initialState[exchange.category] = false;
      });
      setOpenCategories(initialState);
    };

    fetchData();
  }, [adminId]);

  const toggleCategory = (category: string) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-darkBlue text-white text-center py-4 text-lg font-semibold font-leagueSpartan uppercase relative">
        <span>Nutritional Plan</span>
        <div className="absolute top-4 right-4">
          <LogoutButton />
        </div>
      </header>
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-center text-black font-leagueSpartan uppercase mb-6">
          Base de Datos de Intercambios
        </h1>
        {foodExchanges.map((exchange) => (
          <div key={exchange.category} className="mb-4">
            <button
              onClick={() => toggleCategory(exchange.category)}
              className="w-full bg-lightOrange text-white font-comfortaa text-left py-2 px-4 rounded-md shadow-md hover:bg-darkOrange transition"
            >
              {exchange.category}
            </button>
            {openCategories[exchange.category] && (
              <ul className="list-disc pl-8 mt-2 font-comfortaa text-black">
                {exchange.exchanges.map((item, index) => (
                  <li key={index} className="font-comfortaa">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </main>
      <footer className="bg-darkBlue flex justify-around py-4">
        <ProfileButton adminId={adminId} patientId={patientId} patient={patient} />
        <NutritionalPlanButton adminId={adminId} patientId={patientId} patient={patient} />
        <FoodExchangesButton adminId={adminId} patientId={patientId} patient={patient} />
      </footer>
    </div>
  );
};

export default FoodExchangesScreen;
