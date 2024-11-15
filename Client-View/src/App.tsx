//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./components/screens/LoginScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import NutritionalPlanScreen from "./components/screens/NutriotinalPlanScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/nutritional-plan" element={<NutritionalPlanScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
