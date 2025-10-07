import React from "react";

const StatCard = ({ icon, title, value, trend }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
      <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-2xl">{value}</p>
        <span className="text-sm">{trend}</span>
      </div>
    </div>
  );
};

export default StatCard;
