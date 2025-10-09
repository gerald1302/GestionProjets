import React, { useState } from "react";
import { FaProjectDiagram, FaTasks, FaUsers } from "react-icons/fa";
import StatCard from "../AdminComponents/StatCard";
import BarChartCard from "../AdminComponents/BarChartCard";
import LineChartCard from "../AdminComponents/LineChartCard";

// Données simulées pour le chef
const barDataInitial = [
  { name: "Tâches en cours", value: 10 },
  { name: "Terminées", value: 6 },
  { name: "En attente", value: 4 },
];

const lineData1Initial = [
  { name: "Jan", value: 5 },
  { name: "Feb", value: 7 },
  { name: "Mar", value: 10 },
  { name: "Apr", value: 12 },
  { name: "May", value: 15 },
  { name: "Jun", value: 13 },
];

const DashboardContentChef = () => {
  const [barData] = useState(barDataInitial);
  const [lineData] = useState(lineData1Initial);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Vue d'ensemble</h2>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<FaProjectDiagram size={30} className="text-blue-500" />}
          title="Projets actifs"
          value="5"
          trend={<span className="text-green-500">+2 ce mois</span>}
        />
        <StatCard
          icon={<FaTasks size={30} className="text-orange-500" />}
          title="Tâches en cours"
          value="10"
          trend={<span className="text-blue-500">+4 cette semaine</span>}
        />
        <StatCard
          icon={<FaUsers size={30} className="text-purple-500" />}
          title="Membres d'équipe"
          value="8"
          trend={<span className="text-green-500">+1 nouveau</span>}
        />
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BarChartCard
          title="Progression des tâches"
          data={barData}
          description="Répartition des tâches selon leur statut"
        />
        <LineChartCard
          title="Évolution mensuelle des projets"
          data={lineData}
          color="#4F46E5"
          description="Nombre de projets gérés par mois"
        />
      </div>
    </div>
  );
};

export default DashboardContentChef;
