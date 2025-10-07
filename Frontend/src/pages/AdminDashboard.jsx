// src/pages/AdminDashboard.jsx
// src/pages/AdminDashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/AdminComponents/Sidebar";
import TopBar from "../components/AdminComponents/TopBar";
import DashboardContent from "../components/AdminComponents/DashboardContent";
import UserTable from "../components/AdminComponents/UserTable";
import Profile from "../components/AdminComponents/Profile";
import Notifications from "../components/AdminComponents/Notifications";
import MobileSkills from "../components/AdminComponents/MobileSkills";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-screen w-screen flex p-6 gap-6">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu principal */}
      <div className="flex-1 p-6">
        <TopBar />

        {activeTab === "dashboard" && <DashboardContent />}
        {activeTab === "tables" && <UserTable />}
        {activeTab === "profile" && <Profile />}
        {activeTab === "notifications" && <Notifications />}
        {activeTab === "mobile" && <MobileSkills />}
      </div>
    </div>
  );
};

export default AdminDashboard;

