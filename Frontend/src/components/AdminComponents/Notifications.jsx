// src/components/Notifications.jsx
import React from "react";

const Notifications = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Notifications</h2>
      <ul className="list-disc pl-6">
        <li>Nouvel utilisateur inscrit</li>
        <li>Changement de rôle effectué</li>
        <li>3 messages non lus</li>
      </ul>
    </div>
  );
};

export default Notifications;
