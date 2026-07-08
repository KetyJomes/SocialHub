import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import './App.css'

import {Login} from "./pages/Login.jsx"
import {UserMain} from "./pages/UserMain.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login-page" element={<Login />} />
          <Route path="/user-main" element={<UserMain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
