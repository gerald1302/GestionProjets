// src/components/DashboardContent.jsx
import React, { useEffect, useState } from "react";
import { FaUsers, FaUserShield, FaBell } from "react-icons/fa";
import StatCard from "./StatCard";
import BarChartCard from "./BarChartCard";
import LineChartCard from "./LineChartCard";
import { getAllUsers } from "../../api/userApi";

// Données fictives pour la gestion de projet
const barDataInitial = [
  { name: "En cours", value: 12 },
  { name: "Terminé", value: 7 },
  { name: "Annulé", value: 3 },
  { name: "En attente", value: 5 },
];

const lineData1Initial = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 20 },
  { name: "Apr", value: 25 },
  { name: "May", value: 30 },
  { name: "Jun", value: 28 },
  { name: "Jul", value: 35 },
  { name: "Aug", value: 40 },
  { name: "Sep", value: 38 },
  { name: "Oct", value: 45 },
  { name: "Nov", value: 50 },
  { name: "Dec", value: 55 },
];

const lineData2Initial = [
  { name: "Jan", value: 8 },
  { name: "Feb", value: 12 },
  { name: "Mar", value: 18 },
  { name: "Apr", value: 20 },
  { name: "May", value: 28 },
  { name: "Jun", value: 25 },
  { name: "Jul", value: 30 },
  { name: "Aug", value: 35 },
  { name: "Sep", value: 32 },
  { name: "Oct", value: 40 },
  { name: "Nov", value: 45 },
  { name: "Dec", value: 50 },
];

const DashboardContent = () => {
  const [users, setUsers] = useState([]);
  const [barData, setBarData] = useState(barDataInitial);
  const [lineData1, setLineData1] = useState(lineData1Initial);
  const [lineData2, setLineData2] = useState(lineData2Initial);

  // Charger les utilisateurs pour la statistique dynamique
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      }
    };
    fetchUsers();
  }, []);

  const totalUsers = users.length;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Tableau de bord</h2>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<FaUsers size={30} className="text-blue-500" />}
          title="Utilisateurs"
          value={totalUsers}
          trend={<span className="text-green-500">+5% depuis la semaine dernière</span>}
        />
        <StatCard
          icon={<FaUserShield size={30} className="text-purple-500" />}
          title="Admins"
          value="3"
          trend={<span className="text-green-500">+2% ce mois</span>}
        />
        <StatCard
          icon={<FaBell size={30} className="text-yellow-500" />}
          title="Notifications"
          value="15"
          trend={<span className="text-red-500">-3% hier</span>}
        />
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BarChartCard
          title="Projets par état"
          data={barData}
          description="Répartition des projets par statut"
        />
        <LineChartCard
          title="Projets créés par mois"
          data={lineData1}
          color="#8884d8"
          description="Nombre de projets créés chaque mois"
        />
        <LineChartCard
          title="Tâches terminées"
          data={lineData2}
          color="#4CAF50"
          description="Nombre de tâches terminées chaque mois"
        />
      </div>
    </div>
  );
};

export default DashboardContent;
