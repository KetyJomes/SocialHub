import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

import {Login} from "./pages/Login.jsx"
import {Register} from "./pages/Register.jsx"
import {UserMain} from "./pages/User/UserMain.jsx"
import {UserAvaliacoes} from "./pages/User/UserAvaliacoes.jsx"
import {UserResultados} from "./pages/User/UserResultados.jsx"
import {UserRealizarAvaliacao} from "./pages/User/UserRealizarAvaliacao.jsx"
import {UserComparacao} from "./pages/User/UserComparacao.jsx"
import {UserAvaliacao360} from "./pages/User/UserAvaliacao360.jsx"
import {ManagementMain} from "./pages/Management/ManagementMain.jsx"
import {ManagementClasses} from "./pages/Management/ManagementClasses.jsx"
import {ManagementClassDetails} from "./pages/Management/ManagementClassDetails.jsx"
import {ManagementStudentDetails} from "./pages/Management/ManagementStudentDetails.jsx"
import {ManagementPerformEvaluation} from "./pages/Management/ManagementPerformEvaluation.jsx";
import { ManagementViewEvaluation } from "./pages/Management/ManagementViewEvaluation.jsx";
import {ManagementAnswerEvaluation } from "./pages/Management/ManagementAnswerEvaluation.jsx";
import { TestControl } from "./pages/Management/TestControl.jsx";
import { CreateEvaluation } from "./pages/Management/CreateTest.jsx";
import { ManagementEvaluationClasses } from "./pages/Management/ManagementEvaluationClasses.jsx";
import { ManagementEvaluationClassDetails } from "./pages/Management/ManagementEvaluationClassDetails.jsx";
import { Admin } from "./pages/Adm/Admin.jsx";
import { AdminUsuarios } from "./pages/Adm/AdminUsuarios.jsx";
import { AdminTurmas } from "./pages/Adm/AdminTurmas.jsx";
import { ManagementView360Evaluation } from "./pages/Management/ManagementView360Evaluation.jsx";
import { ManagementAnswer360Evaluation } from "./pages/Management/ManagementAnswer360Evaluation.jsx";
import { ManagementFeedbackStudents } from "./pages/Management/ManagementFeedbackStudents.jsx";
import { ManagementComparison } from "./pages/Management/ManagementComparison";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-main" element={<UserMain />} />
          <Route path="/user-avaliacoes" element={<UserAvaliacoes />} />
          <Route path="/resultados" element={<UserResultados />} />
          <Route path="/realizar-avaliacao" element={<UserRealizarAvaliacao />} />
          <Route path="/comparacao" element={<UserComparacao />} />
          <Route path="/360" element={<UserAvaliacao360 />} />
          <Route path="/management-main" element={<ManagementMain />} />
          <Route path="/management-classes" element={<ManagementClasses />} />
          <Route path="/management-class/:turma" element={<ManagementClassDetails />} />
          <Route path="/management-student/:turma/:aluno" element={<ManagementStudentDetails />} />
          <Route path="/management-perform-evaluation/:turma/:aluno/:id"element={<ManagementPerformEvaluation />}/>
          <Route path="/management-answer-evaluation/:turma/:aluno/:avaliacaoId"element={<ManagementAnswerEvaluation />}/>
          <Route path="/management-view-evaluation/:turma/:aluno/:avaliacaoId" element={<ManagementViewEvaluation />}/>
          <Route path="/management-evaluations"  element={<TestControl />}/>
          <Route path="/management-evaluations/create" element={<CreateEvaluation />}/>
          <Route path="/management-avaliacoes-turmas" element={<ManagementEvaluationClasses />}/>
          <Route path="/management-avaliacoes-turmas-alunos" element={<ManagementEvaluationClassDetails />}/>
          <Route path="/adm-main" element={<Admin /> } />
          <Route path="/adm-control-user" element={<AdminUsuarios /> } />
          <Route path="/admin/turmas" element={<AdminTurmas /> } />
          <Route path="/management-answer-360-evaluation/:turma/:aluno/:avaliacaoId/:colega" element={<ManagementAnswer360Evaluation />}/>
          <Route path="/management-view-360-evaluation/:turma/:aluno/:avaliacaoId/:colega" element={<ManagementView360Evaluation />} />
          <Route path="/management-feedbacks"element={<ManagementFeedbackStudents />} />
          <Route path="/management-comparison/:turma/:aluno" element={<ManagementComparison />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
