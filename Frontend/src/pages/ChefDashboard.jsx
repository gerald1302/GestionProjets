// src/pages/Dashboard/ChefProjetDashboard.jsx
import React from "react";

const ChefProjetDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tableau de bord - Chef de projet</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Gestion des projets */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-lg">Mes projets</h2>
          <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
            Créer un projet
          </button>
        </div>

        {/* Gestion des tâches */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-lg">Tâches</h2>
          <button className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">
            Assigner une tâche
          </button>
        </div>

        {/* Rapports */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="font-semibold text-lg">Rapports</h2>
          <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
            Consulter
          </button>
        </div>

      </div>
    </div>
  );
};

export default ChefProjetDashboard;
