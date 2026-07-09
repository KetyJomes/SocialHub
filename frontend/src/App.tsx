import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

import {Login} from "./pages/Login.jsx"
import {Register} from "./pages/Register.jsx"
import {UserMain} from "./pages/UserMain.jsx"
import {ManagementMain} from "./pages/ManagementMain.jsx"
import {ManagementClasses} from "./pages/ManagementClasses.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-main" element={<UserMain />} />
          <Route path="/management-main" element={<ManagementMain />} />
          <Route path="/management-classes" element={<ManagementClasses />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
