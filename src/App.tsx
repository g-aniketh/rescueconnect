// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import EmergencyPage from "./pages/EmergencyPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage"; // Optional

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Header and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="emergency" element={<EmergencyPage />} />
          <Route path="about" element={<AboutPage />} />
          {/* Add other main pages here */}

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* You could add routes without the Layout here if needed */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
