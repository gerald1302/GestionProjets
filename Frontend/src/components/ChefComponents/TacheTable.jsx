import React, { useState } from "react";

const TacheTable = () => {
  const [taches, setTaches] = useState([
    { id: 1, titre: "Analyse des besoins", statut: "Terminée", responsable: "Jean" },
    { id: 2, titre: "Développement API", statut: "En cours", responsable: "Alice" },
    { id: 3, titre: "Test et validation", statut: "En attente", responsable: "Luc" },
  ]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tâches du projet</h2>
      <table className="min-w-full bg-white rounded-xl shadow overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600">
            <th className="px-6 py-3">#</th>
            <th className="px-6 py-3">Titre</th>
            <th className="px-6 py-3">Responsable</th>
            <th className="px-6 py-3">Statut</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((tache) => (
            <tr key={tache.id} className="border-t hover:bg-gray-50">
              <td className="px-6 py-3">{tache.id}</td>
              <td className="px-6 py-3">{tache.titre}</td>
              <td className="px-6 py-3">{tache.responsable}</td>
              <td
                className={`px-6 py-3 font-semibold ${
                  tache.statut === "Terminée"
                    ? "text-green-500"
                    : tache.statut === "En cours"
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {tache.statut}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TacheTable;
