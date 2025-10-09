import React, { useState } from "react";
import SidebarMembre from "../components/MembreComponents/SidebarMembre";
import TopBarMembre from "../components/MembreComponents/TopBarMembre";
import DashboardContentMembre from "../components/MembreComponents/DashboardContentMembre";
import TacheTableMembre from "../components/MembreComponents/TacheTableMembre";
import ProfileMembre from "../components/MembreComponents/ProfileMembre";
import NotificationMembre from "../components/MembreComponents/NotificationMembre";

const MembreDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-screen w-screen flex p-6 gap-6">
      {/* Sidebar */}
      <SidebarMembre activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu principal */}
      <div className="flex-1 p-6 overflow-y-auto">
        <TopBarMembre />

        {/* Affichage dynamique selon l’onglet sélectionné */}
        {activeTab === "dashboard" && <DashboardContentMembre />}
        {activeTab === "taches" && <TacheTableMembre />}
        {activeTab === "notifications" && <NotificationMembre />}
        {activeTab === "profile" && <ProfileMembre />}
      </div>
    </div>
  );
};

export default MembreDashboard;




