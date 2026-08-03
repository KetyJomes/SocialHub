import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SummaryCards } from "../../components/SummaryCards";
import { EvaluationCard } from "../../components/EvaluationCard";
import { FeedbackModal } from "../../components/FeedbackModal";

import { exportarAvaliacaoPDF } from "../../export/exportarAvaliacaoPDF.js";

import {
  Award,
  Target,
  Users,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  Pencil,
  Save,
  Download,
  Info,
} from "lucide-react";

export const UserComparacao = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editando, setEditando] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [abrirFeedback, setAbrirFeedback] = useState(false);

  const [selfEvaluation, setSelfEvaluation] = useState([]);
  const [managerEvaluation, setManagerEvaluation] = useState([]);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const idAvaliacao = params.get("id");

  useEffect(() => {
    const avaliacoes =
      JSON.parse(localStorage.getItem("avaliacoesRespondidas")) || {};

    const avaliacao = avaliacoes[idAvaliacao];

    if (!avaliacao) return;
  }, [idAvaliacao]);

  const handleExportar = () => {
    exportarAvaliacaoPDF(selfEvaluation, managerEvaluation);
  };

  return (
    <div className="min-h-screen bg-white">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="p-8 mt-16">
        <div className="max-w-[1700px] mx-auto">
          {/* CABEÇALHO */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                Comparativo de Resultados
              </h1>

              <p className="text-gray-500 mt-2 text-[15px]">
                Acompanhe o desempenho das avaliações e identifique
                oportunidades de melhoria.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="
                                    w-9
                                    h-9
                                    rounded-full
                                    border
                                    border-gray-200
                                    flex
                                    items-center
                                    justify-center
                                    hover:bg-gray-100
                                    transition
                                "
              >
                <Info size={18} className="text-gray-500" />
              </button>

              {/* EXPORTAR */}

              <button
                onClick={handleExportar}
                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-white
                                    border
                                    border-[#0291F7]
                                    text-[#0291F7]
                                    font-semibold
                                    hover:bg-blue-50
                                    transition
                                    shadow-sm
                                "
              >
                <Download size={18} />
                Exportar relatório
              </button>

              {/* FEEDBACK */}

              <button
                onClick={() => setAbrirFeedback(true)}
                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-white
                                    border
                                    border-[#0291F7]
                                    text-[#0291F7]
                                    font-semibold
                                    hover:bg-blue-50
                                    transition
                                    shadow-sm
                                "
              >
                Feedback do Gestor
              </button>

              {/* EDITAR */}

              <button
                onClick={() => setEditando(!editando)}
                className="
                                    flex
                                    items-center
                                    gap-3
                                    px-5
                                    py-3
                                    rounded-xl
                                    bg-[#0291F7]
                                    text-white
                                    font-semibold
                                    hover:bg-blue-700
                                    transition
                                    shadow-sm
                                "
              >
                {editando ? (
                  <>
                    <Save size={18} />
                    Salvar
                  </>
                ) : (
                  <>
                    <Pencil size={18} />
                    Editar
                  </>
                )}
              </button>
            </div>
          </div>

          {/* CONTEÚDO */}
          <div className="flex gap-6 mt-8 items-start">
            {/* RESUMO */}
            <div className="w-[22%] min-w-[280px]">
              <SummaryCards />
            </div>

            {/* AVALIAÇÕES */}
            <div
              className="
                                flex
                                flex-1
                                gap-6
                                max-h-[70vh]
                                overflow-y-auto
                                pr-2
                                scrollbar-thin
                                scrollbar-thumb-gray-300
                                scrollbar-track-transparent
                            "
            >
              <div className="flex-1">
                <EvaluationCard
                  title="Autoavaliação"
                  color="blue"
                  data={selfEvaluation}
                  editando={editando}
                />
              </div>

              <div className="flex-1">
                <EvaluationCard
                  title="Avaliação Gestão"
                  color="purple"
                  data={managerEvaluation}
                  editando={editando}
                />
              </div>
            </div>
          </div>

          <FeedbackModal
            isOpen={abrirFeedback}
            fechar={() => setAbrirFeedback(false)}
            feedback={feedback}
            setFeedback={setFeedback}
          />
        </div>
      </main>
    </div>
  );
};
