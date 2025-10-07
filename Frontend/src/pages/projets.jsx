import React from 'react'
import { IoPerson } from 'react-icons/io5'
import img1 from '../assets/image/Ellipse 6.png'
import img2 from '../assets/image/Ellipse 4.png'
import img3 from '../assets/image/Ellipse 5.png'
import { useNavigate } from 'react-router-dom'
const projets = () => {
    const navigate = useNavigate()    
  return (
     <>
        <div className=' relative min-h-screen bg-[#28344A] text-white pb-24 overflow-hidden'>
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
                <li className="hover:text-violet-500 cursor-pointer" onClick={() => navigate('/projets') }>Recherche</li>
                <IoPerson className="text-2xl cursor-pointer" />
                </ul>

            </div>
            {/* genre titre */}
            <div className='flex items-center justify-between p-5 p-5 relative z-10 '>
                {/* titre */}
                <div>
                    <h1 className='text-4xl font-bold mt-5 py-5 space-y-10'>TOUS LES PROJETS</h1>
                </div>
                {/* Recherche */}
                <div className='flex items-center justify-between space-x-4'>
                    <input type="text" placeholder='Rechercher un projet' className='p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                    <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Rechercher</button>
                </div>
            </div>
           
            {/* crud la page */}
            <div className='flex items-center px-32'>
                <table>
                    <thead>
                        <tr>
                            <th className='px-4 py-2'>Nom du Projet</th>
                            <th className='px-4 py-2'>Description</th>
                            <th className='px-4 py-2'>Date de Début</th>
                            <th className='px-4 py-2'>Date de Fin</th>
                            <th className='px-4 py-2'>Statut</th>
                            <th className='px-4 py-2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td className=' px-4 py-2'>Projet 1</td>
                            <td className=' px-4 py-2'>Description du Projet 1</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>01/01/2023</td>
                            <td className=' px-4 py-2'>En cours</td>
                            <td className=' px-4 py-2 space-x-2'>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Modifier</button>
                                <button className='bg-[#E2E8F0] text-[#17A2B8] font-bold py-2 px-4 rounded border border-[#17A2B8]'>Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
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

export default projets