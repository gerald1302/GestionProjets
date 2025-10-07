// src/pages/Dashboard/MembreDashboard.jsx
import React from "react";

const MembreDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tableau de bord - Membre</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Mes tâches */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-lg">Mes tâches</h2>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
            Voir mes tâches
          </button>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-lg">Notifications</h2>
          <button className="mt-2 bg-purple-500 text-white px-3 py-1 rounded">
            Consulter
          </button>
        </div>

      </div>
    </div>
  );
};

export default MembreDashboard;
