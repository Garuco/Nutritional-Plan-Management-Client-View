//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import NutritionalPlanScreen from "./components/screens/NutritionalPlanScreen";
import FoodExchangesScreen from "./components/screens/FoodExchangesScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/nutritional-plan" element={<NutritionalPlanScreen />} />
        <Route path="/food-exchanges" element={<FoodExchangesScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
