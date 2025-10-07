// src/pages/inscript.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../api/authApi";

import img1 from "../assets/image/Ellipse 6.png";
import img2 from "../assets/image/Ellipse 4.png";
import img3 from "../assets/image/Ellipse 5.png";
import imagconnex from "../assets/image/connexion.png";

const inscript = () => {
  const navigate = useNavigate()
   // États des champs
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await registerApi({
        nom,
        email,
        motDePasse,
        role: "MEMBRE", // par défaut
      });

      setSuccess("Inscription réussie !");
      console.log("Utilisateur créé :", res);

      // Redirige vers connexion après 2s
      setTimeout(() => navigate("/connexion"), 2000);
    } catch (err) {
      setError("Échec de l'inscription. " + err.message);
    }
  };

  return (
    <>
   <div className="relative h-screen bg-[#28344A] text-white overflow-hidden">
      <div className="flex items-center justify-between p-5 relative z-10">
        {/* image decorative1 */}
        <div className="absolute left-0 top-0 h-72 opacity-30 px-2 py-2">
          <img src={img1} alt="" />
        </div>

        {/* image decorative2 */}
        <div className="opacity-30 absolute right-0 bottom-0 h-72 py-32">
          <img src={img2} alt="" className="w-60 h-auto bg-[4A62DD]" />
        </div>
      </div>

      {/* corps de la page */}
      <div className="flex items-center justify-center shadow-full bg-[#171622] w-3/5 h-4/5 rounded-2xl space-x-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        {/* image */}
        <div>
          <img src={imagconnex} alt="" />
        </div>

        {/* formulaire */}
        <div className="px-10 w-full">
          <h1 className="text-3xl font-bold mt-5 py-5">INSCRIPTION</h1>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5 p-10">
            <input
              type="text"
              placeholder="Nom"
              className="p-2 rounded border border-gray-300 text-black"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="@gmail.com"
              className="p-2 rounded border border-gray-300 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="p-2 rounded border border-gray-300 text-black"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
            />

            <button
              type="submit"
              className="bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded mt-5 border border-[#17A2B8]"
            >
              S'inscrire
            </button>
          </form>

          <button onClick={() => navigate("/connexion")}>
            Vous avez déjà un compte ? Connectez-vous
          </button>
        </div>
      </div>

      {/* images decoratives3 */}
      <div className="mt-10 absolute right-0 bottom-0 h-120">
        <img src={img3} alt="" />
      </div>
    </div>
    </>
  );
};

export default inscript