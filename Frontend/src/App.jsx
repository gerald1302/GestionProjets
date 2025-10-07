import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Conex from "./pages/conex";
import { AuthProvider } from "../src/context/AuthContext";
import PrivateRoute from "../src/routes/PrivateRoute";

import Accueil from './pages/accueil'
import Inscript from './pages/inscript'

import AdminDashboard from "./pages/AdminDashboard";
import ChefDashboard from "./pages/ChefDashboard";
import MembreDashboard from "./pages/MembreDashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path='/' element={<Accueil />} />
          <Route path='/connexion' element={<Conex />} />
          <Route path='/inscription' element={<Inscript />} />
          <Route path="/login" element={<Conex />} />

          {/* Routes protégées */}
          <Route
            path="/admin"
            element={
              <PrivateRoute roles={["ADMIN"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/chef"
            element={
              <PrivateRoute roles={["CHEF"]}>
                <ChefDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/membre"
            element={
              <PrivateRoute roles={["MEMBRE"]}>
                <MembreDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;



// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Accueil from './pages/accueil'
// import Conex from './pages/conex'
// import Inscript from './pages/inscript'
// import Projets from './pages/projets'


// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Accueil />} />
//         <Route path='/connexion' element={<Conex />} />
//         <Route path='/inscription' element={<Inscript />} />
//         <Route path='/projets' element={<Projets />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App