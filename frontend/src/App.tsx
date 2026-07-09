import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

import {Login} from "./pages/Login.jsx"
import {Register} from "./pages/Register.jsx"
import {UserMain} from "./pages/UserMain.jsx"
import {ManagementMain} from "./pages/ManagementMain.jsx"
import {UserAvaliacoes} from "./pages/UserAvaliacoes"
import {UserResultados} from "./pages/UserResultados"
import {User360} from "./pages/User360"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-main" element={<UserMain />} />
          <Route path="/management-main" element={<ManagementMain />} />
          <Route path="/avaliacoes" element={<UserAvaliacoes />} />
          <Route path="/resultados" element={<UserResultados />} />
          <Route path="/360" element={<User360 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
