import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUserInfo from "./pages/AdminUserInfo";
import ModeratorInfo from "./pages/ModeratorInfo";
import AddModeratorPage from "./pages/AddModeratorPage";
import LoginPage from "./pages/LoginPage";
import ModeratorDashboard from "./pages/ModeratorDashboard";
import ModeratorUserInfo from "./pages/ModeratorUserInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/admin/dashboard" element={<AdminDashboard />} exact />
      <Route path="/admin/info" element={<AdminUserInfo />} exact />
      <Route path="/admin/mod-info" element={<ModeratorInfo />} exact />
      <Route path="/admin/add-moderator" element={<AddModeratorPage />} exact />
      <Route path="/login" element={<LoginPage />} exact />
      <Route
        path="/moderator/dashboard"
        element={<ModeratorDashboard />}
        exact
      />
      <Route path="/moderator/info" element={<ModeratorUserInfo />} exact />
    </Routes>
  );
}

export default App;
