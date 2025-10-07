import React from 'react'
import { IoPerson } from 'react-icons/io5'
import img1 from '../assets/image/Ellipse 6.png'
import img2 from '../assets/image/Ellipse 4.png'
import img3 from '../assets/image/Ellipse 5.png'
import { useNavigate } from 'react-router-dom'

const accueil = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className=' relative h-screen bg-[#28344A] text-white overflow-hidden'>
        {/* navbar  */}
        <div className='flex items-center justify-between p-5 p-5 relative z-10 '> 
             {/* image logo */}
          <div className='absolute left-0 top-0 h-72 opacity-30 px-2 py-2'> 
                <img src={img1} alt="" className='' />
          </div>
            {/* menu de navigation */}
          <ul className="ml-auto flex space-x-8 text-lg font-medium px-32 py-5 ">
            <li className="hover:text-violet-500 cursor-pointer" onClick={() => navigate('/') }>Accueil</li>
            <li className="hover:text-violet-500 cursor-pointer" onClick={() => navigate('/projets') }>Projets</li>
            <li className="hover:text-violet-500 cursor-pointer" onClick={() => navigate('/recherche') }>Recherche</li>
            <IoPerson className="text-2xl cursor-pointer" />
            </ul>
            <div className='opacity-30 absolute right-0 bottom-0 h-72  py-32'>
            <img src={img2} alt="" className="w-60 h-auto bg-[4A62DD]" />
          </div>
        </div>
       
        {/* corps de la page */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10'>
            <h1 className='text-4xl font-bold mt-5 py-5 space-y-10'>BONJOUR</h1>
            <p className='text-2xl font-semibold'>Bienvenue sur notre plateforme de gestion de projets</p>
            <p className='text-2xl font-semibold'>Gérez vos projets efficacement avec notre outil convivial.</p>
            {/* <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded mt-5 border border-[#17A2B8] mt-10'>Commencer</button> */}
            <button
        className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded mt-5 border border-[#17A2B8] mt-10'
        onClick={() => navigate('/connexion')}
      >
        Commencer
      </button>
        </div>
           {/* images decoratives */}
        <div className='mt-10 absolute right-0 bottom-0 h-120'>
            <img src={img3} alt="" className='' />
        </div>
    </div>
    <div className='bg-[#485AD2] text-white p-5'>
        <ul className='flex items-center space-x-5 text-lg font-medium px-10 py-4'>
            <li className="hover:text-violet-500 cursor-pointer">Accueil</li>
            <li className="hover:text-violet-500 cursor-pointer">Projets</li>
            <li className="hover:text-violet-500 cursor-pointer">Recherche</li>  
        </ul>
    </div>
    </>
  )
}

export default accueil