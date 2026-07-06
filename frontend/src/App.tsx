import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import {UserMain} from "./pages/UserMain.jsx"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/user-main" element={<UserMain />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
