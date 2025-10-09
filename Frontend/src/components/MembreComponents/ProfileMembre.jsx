import React, { useState } from "react";
import { User, Phone, Calendar, Lock } from "lucide-react";

const ProfileMembre = () => {
  const [user, setUser] = useState({
    nom: "Jean",
    prenom: "Daniel",
    telephone: "+261 34 12 345 67",
    dateNaissance: "1999-08-12",
    username: "jeandaniel",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profil mis à jour avec succès !");
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow max-w-3xl mx-auto mt-6">
      <div className="flex items-center gap-6 mb-6">
        <img
          src="https://i.pravatar.cc/100?img=15"
          alt="profile"
          className="w-24 h-24 rounded-full border-2 border-blue-500 shadow"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {user.prenom} {user.nom}
          </h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nom */}
        <div>
          <label className="text-sm text-gray-500">Nom</label>
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <User className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="nom"
              value={user.nom}
              onChange={handleChange}
              disabled={!isEditing}
              className={`flex-1 outline-none ${
                isEditing ? "text-gray-800" : "text-gray-500 bg-transparent"
              }`}
            />
          </div>
        </div>

        {/* Prénom */}
        <div>
          <label className="text-sm text-gray-500">Prénom</label>
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <User className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="prenom"
              value={user.prenom}
              onChange={handleChange}
              disabled={!isEditing}
              className={`flex-1 outline-none ${
                isEditing ? "text-gray-800" : "text-gray-500 bg-transparent"
              }`}
            />
          </div>
        </div>

        {/* Téléphone */}
        <div>
          <label className="text-sm text-gray-500">Téléphone</label>
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <Phone className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="telephone"
              value={user.telephone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`flex-1 outline-none ${
                isEditing ? "text-gray-800" : "text-gray-500 bg-transparent"
              }`}
            />
          </div>
        </div>

        {/* Date de naissance */}
        <div>
          <label className="text-sm text-gray-500">Date de naissance</label>
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <Calendar className="w-4 h-4 text-gray-400" />
            <input
              type="date"
              name="dateNaissance"
              value={user.dateNaissance}
              onChange={handleChange}
              disabled={!isEditing}
              className={`flex-1 outline-none ${
                isEditing ? "text-gray-800" : "text-gray-500 bg-transparent"
              }`}
            />
          </div>
        </div>

        {/* Nom d'utilisateur */}
        <div className="sm:col-span-2">
          <label className="text-sm text-gray-500">Nom d'utilisateur</label>
          <div className="flex items-center gap-2 border p-2 rounded-lg">
            <Lock className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              disabled={!isEditing}
              className={`flex-1 outline-none ${
                isEditing ? "text-gray-800" : "text-gray-500 bg-transparent"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Boutons */}
      <div className="mt-6 flex justify-end gap-3">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Modifier
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-5 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Enregistrer
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileMembre;
