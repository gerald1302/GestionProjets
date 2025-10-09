import React from "react";

const notifications = [
  { id: 1, message: "Nouvelle tâche assignée : Rapport financier", date: "06/10/2025" },
  { id: 2, message: "Le chef de projet a commenté votre tâche", date: "05/10/2025" },
  { id: 3, message: "Tâche terminée : Mise à jour du module B", date: "04/10/2025" },
];

const NotificationMembre = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Notifications</h3>
      <ul className="space-y-3">
        {notifications.map((n) => (
          <li
            key={n.id}
            className="border-b pb-2 text-gray-700 text-sm flex justify-between"
          >
            <span>{n.message}</span>
            <span className="text-gray-400">{n.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationMembre;
