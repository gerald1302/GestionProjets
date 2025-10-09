import React from "react";

const ProfileChef = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profil du Chef de Projet</h2>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p><strong>Nom :</strong> Jean Dupont</p>
        <p><strong>Email :</strong> jean.dupont@entreprise.com</p>
        <p><strong>Rôle :</strong> Chef de projet</p>
        <p><strong>Projets en cours :</strong> 3</p>
      </div>
    </div>
  );
};

export default ProfileChef;
