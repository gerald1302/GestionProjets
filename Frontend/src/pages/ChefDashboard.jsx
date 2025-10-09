// // src/pages/Dashboard/ChefProjetDashboard.jsx
import React, { useState } from "react";
import SidebarChef from "../components/ChefComponents/SidebarChef";
import TopBarChef from "../components/ChefComponents/TopBarChef";
import DashboardContentChef from "../components/ChefComponents/DashboardContentChef";
import TacheTable from "../components/ChefComponents/TacheTable";
import ProfileChef from "../components/ChefComponents/ProfileChef";
import NotificationsChef from "../components/ChefComponents/NotificationsChef";

const ChefDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 h-screen w-screen flex p-6 gap-6">
      {/* Sidebar */}
      <SidebarChef activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Contenu principal */}
      <div className="flex-1 p-6 overflow-y-auto">
        <TopBarChef />

        {activeTab === "dashboard" && <DashboardContentChef />}
        {activeTab === "taches" && <TacheTable />}
        {activeTab === "profile" && <ProfileChef />}
        {activeTab === "notifications" && <NotificationsChef />}
      </div>
    </div>
  );
};

export default ChefDashboard;





// import React from "react";

// const ChefProjetDashboard = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Tableau de bord - Chef de projet</h1>
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        
//         {/* Gestion des projets */}
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="font-semibold text-lg">Mes projets</h2>
//           <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
//             Créer un projet
//           </button>
//         </div>

//         {/* Gestion des tâches */}
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="font-semibold text-lg">Tâches</h2>
//           <button className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">
//             Assigner une tâche
//           </button>
//         </div>

//         {/* Rapports */}
//         <div className="bg-white shadow rounded-lg p-4">
//           <h2 className="font-semibold text-lg">Rapports</h2>
//           <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
//             Consulter
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ChefProjetDashboard;
