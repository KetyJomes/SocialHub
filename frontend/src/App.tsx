import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

import {Login} from "./pages/Login.jsx"
import {Register} from "./pages/Register.jsx"
import {UserMain} from "./pages/UserMain.jsx"
import {ManagementMain} from "./pages/ManagementMain.jsx"
import {ManagementClasses} from "./pages/ManagementClasses.jsx"
import {ManagementClassDetails} from "./pages/ManagementClassDetails.jsx"
import {ManagementStudentDetails} from "./pages/ManagementStudentDetails.jsx"
import {ManagementManagerToStudent} from "./pages/ManagementManagerToStudent.jsx"
import {ManagementStudentToManager } from "./pages/ManagementStudentToManager.jsx"
import {ManagementSelfEvaluation} from "./pages/ManagementSelfEvaluation.jsx"
import {Management360Evaluation } from "./pages/Management360Evaluation.jsx";
import {ManagementStudentToLeader } from "./pages/ManagementStudentToLeader.jsx";
import {ManagementLeaderToClass } from "./pages/ManagementLeaderToClass.jsx";
import {ManagementPerformEvaluation} from "./pages/ManagementPerformEvaluation.jsx";
import { ManagementViewEvaluation } from "./pages/ManagementViewEvaluation";
import { ManagementAnswerEvaluation } from "./pages/ManagementAnswerEvaluation";
import {UserAvaliacoes} from "./pages/UserAvaliacoes"
import {UserResultados} from "./pages/UserResultados"
import {User360} from "./pages/User360"
import {UserRealizarAvaliacao} from "./pages/UserRealizarAvaliacao"
import {UserComparacao} from "./pages/UserComparacao"



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
          <Route path="/management-class/:turma" element={<ManagementClassDetails />} />
          <Route path="/management-student/:turma/:aluno" element={<ManagementStudentDetails />} />
          <Route path="/management-student/:turma/:aluno/gestor" element={<ManagementManagerToStudent />} />
          <Route path="/management-student-to-manager/:turma/:aluno" element={<ManagementStudentToManager />} />
          <Route path="/management-self-evaluation/:turma/:aluno" element={<ManagementSelfEvaluation />} />
          <Route path="/management-360-evaluation/:turma/:aluno" element={<Management360Evaluation />} />
          <Route path="/management-student-to-leader/:turma/:aluno" element={<ManagementStudentToLeader />} />
          <Route path="//management-leader-to-class/:turma" element={<ManagementLeaderToClass />} />
          <Route path="/management-perform-evaluation/:turma/:aluno/:id"element={<ManagementPerformEvaluation />}/>
          <Route path="/management-view-evaluation/:turma/:aluno/:id"element={<ManagementViewEvaluation />}/>
         <Route path="/management-answer-evaluation/:turma/:aluno/:id"element={<ManagementAnswerEvaluation />}/>
          <Route path="/avaliacoes" element={<UserAvaliacoes />} />
          <Route path="/resultados" element={<UserResultados />} />
          <Route path="/360" element={<User360 />} />
          <Route path="/realizar-avaliacao" element={<UserRealizarAvaliacao />} />
          <Route path="/comparacao" element={<UserComparacao />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
