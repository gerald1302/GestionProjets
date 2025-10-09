import React from "react";

const NotificationsChef = () => {
  const notifications = [
    "Nouvelle tâche assignée à Alice",
    "Mise à jour du projet API Trésor",
    "Réunion d'équipe demain à 10h",
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="list-disc pl-6 space-y-2">
        {notifications.map((n, i) => (
          <li key={i} className="text-gray-700">{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsChef;
