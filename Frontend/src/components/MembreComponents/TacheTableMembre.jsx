import React from "react";

const taches = [
  { id: 1, titre: "Corriger le rapport", etat: "En cours", deadline: "10/10/2025" },
  { id: 2, titre: "Valider le document A", etat: "Terminée", deadline: "06/10/2025" },
  { id: 3, titre: "Préparer la réunion", etat: "En retard", deadline: "03/10/2025" },
];

const TacheTableMembre = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4 text-gray-700">Mes Tâches</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b text-gray-500">
            <th className="pb-2">Titre</th>
            <th className="pb-2">État</th>
            <th className="pb-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((tache) => (
            <tr key={tache.id} className="border-b text-gray-700">
              <td className="py-2">{tache.titre}</td>
              <td
                className={`py-2 font-medium ${
                  tache.etat === "Terminée"
                    ? "text-green-600"
                    : tache.etat === "En retard"
                    ? "text-red-600"
                    : "text-yellow-600"
                }`}
              >
                {tache.etat}
              </td>
              <td className="py-2">{tache.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TacheTableMembre;
