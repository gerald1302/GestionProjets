import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import TacheTableMembre from "./TacheTableMembre";
import NotificationMembre from "./NotificationMembre";

const data = [
  { name: "Lun", terminées: 4 },
  { name: "Mar", terminées: 3 },
  { name: "Mer", terminées: 5 },
  { name: "Jeu", terminées: 2 },
  { name: "Ven", terminées: 4 },
];

const DashboardContentMembre = () => {
  return (
    <div className="space-y-6">
      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-gray-500 text-sm">Tâches assignées</h3>
          <p className="text-2xl font-bold text-blue-600">18</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-gray-500 text-sm">Tâches terminées</h3>
          <p className="text-2xl font-bold text-green-600">12</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-gray-500 text-sm">Tâches en retard</h3>
          <p className="text-2xl font-bold text-red-600">3</p>
        </div>
      </div>

      {/* Graphique */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Progression hebdomadaire</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="terminées" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tâches et Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TacheTableMembre />
        <NotificationMembre />
      </div>
    </div>
  );
};

export default DashboardContentMembre;
