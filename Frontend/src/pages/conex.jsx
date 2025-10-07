//src/pages/conex.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

import img1 from '../assets/image/Ellipse 6.png'
import img2 from '../assets/image/Ellipse 4.png'
import img3 from '../assets/image/Ellipse 5.png'
import imagconnex from '../assets/image/connexion.png'

import {loginApi} from '../api/authApi'

const conex = () => {
  const navigate = useNavigate()

    const { login } = useAuth();

  // État du formulaire
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [error, setError] = useState("");
  console.log("Email envoyé :", email);
  console.log("Mot de passe envoyé :", motDePasse);

  // Gestion de la soumission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    

    try {
    const { token, user } = await loginApi({ email, motDePasse });

    // Mise à jour du contexte
    login(user, token);

    // Redirection selon rôle
    if (user.role === "ADMIN") {
      navigate("/admin");
    } else if (user.role === "CHEF") {
      navigate("/chef");
    } else {
      navigate("/membre");
    }
  } catch (err) {
    setError("Échec de la connexion. Vérifiez vos informations. " + err.message);
  }
};

  return (
    <>
    <div className=' relative h-screen bg-[#28344A] text-white overflow-hidden'>
          
        <div className='flex items-center justify-between p-5 p-5 relative z-10 '> 

                 {/* image decorative1 */}
               <div className='absolute left-0 top-0 h-72 opacity-30 px-2 py-2'> 
                    <img src={img1} alt="" className='' />
               </div>

                {/* image decorative2 */}
                <div className='opacity-30 absolute right-0 bottom-0 h-72  py-32'>
                    <img src={img2} alt="" className="w-60 h-auto bg-[4A62DD]" />
                </div>
        </div>

              {/* corps de la page */}
              <div className=' flex items-center justify-center shadow-full bg-[#171622] w-3/5 h-4/5 rounded-2xl space-x-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
              {/* image pour la connexion */}
                  <div>
                    <img src={imagconnex} alt="" />
                  </div>
              {/* formulaire de connexion */}
                  <div className='px-10'>
                    <h1 className='text-3xl font-bold mt-5 py-5 space-y-10'>CONNEXION</h1>
                    <p className='text-1xl font-semibold'>Veuillez entre vos informations</p>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 p-10">
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
              className="bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded mt-10 border border-[#17A2B8]"
            >
              Connexion
            </button>
          </form>
                    <button onClick={() => navigate('/inscription')}>
                      Pas de compte? S'inscrire
                    </button>
                  </div>
             
              </div>

                  {/* images decoratives3 */}
               <div className='mt-10 absolute right-0 bottom-0 h-120'>
                   <img src={img3} alt="" className='' />
              </div>
    </div>
    </>
  )
}

export default conex