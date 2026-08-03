import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { EvaluationTable } from "../../components/EvaluationTable";

import { SidebarManagement } from "../../components/SidebarManagement";

import { evaluationsCompleteMock } from "../../data/evaluationsCompleteMock";

export const UserRealizarAvaliacao = () => {
  const usuarioLogado = {
    nome: localStorage.getItem("name"),
    tipo: localStorage.getItem("role"),
  };

  console.log("Usuário logado:", usuarioLogado);

  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);

  const alunoAvaliado = params.get("avaliado");
  const turma = params.get("turma");
  const idAvaliacao = params.get("id");

  const idColaborador = params.get("idColaborador");
  const tipo = params.get("tipo");

  const avaliacaoAtual = evaluationsCompleteMock.find(
    (item) => item.id === Number(idAvaliacao)
  );

  console.log("ID AVALIACAO:", idAvaliacao);
  console.log("AVALIACAO:", avaliacaoAtual);
  console.log("Qtd Perguntas:", avaliacaoAtual.perguntas.length);
  console.log("usuario", usuarioLogado);

  const [answers, setAnswers] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [avaliacaoFinalizada, setAvaliacaoFinalizada] = useState(false);

  /* Pega as respostas salvas */
  useEffect(() => {
    if (tipo === "360") {
      const salvas =
        JSON.parse(localStorage.getItem("colaboradores360Respondidos")) || {};

      const colaboradorSalvo = salvas[idColaborador];

      if (colaboradorSalvo) {
        setAnswers(colaboradorSalvo.respostas || {});
        setAvaliacaoFinalizada(colaboradorSalvo.finalizada || false);
      }
      return;
    }

    if (!idAvaliacao) return;

    const avaliacoesSalvas =
      JSON.parse(localStorage.getItem("avaliacoesRespondidas")) || {};

    const avaliacaoSalva = avaliacoesSalvas[idAvaliacao];

    if (avaliacaoSalva) {
      setAvaliacaoFinalizada(avaliacaoSalva.finalizada || false);
      setAnswers(avaliacaoSalva.respostas || {});
    }
  }, [idAvaliacao]);

  /* Seleciona resposta */
  const handleSelect = (questionId, nivel) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: nivel,
    }));
  };

  const limparRespostas = () => {
    if (
      window.confirm("Deseja realmente limpar todas as respostas da avaliação?")
    ) {
      setAnswers({});
    }
  };

  const calcularMedia = () => {
    const valores = Object.values(answers)
      .map((resposta) => resposta.valor)
      .filter((valor) => valor !== undefined);

    if (valores.length === 0) {
      return 0;
    }

    const soma = valores.reduce((total, valor) => total + valor, 0);

    return Number(((soma / valores.length) * 25).toFixed(2));
  };
  /* SALVAR AVALIAÇÃO COMPLETA */
  const salvarAvaliacao = (finalizada) => {
    const media = calcularMedia();

    const avaliacoesSalvas =
      JSON.parse(localStorage.getItem("avaliacoesRespondidas")) || {};

    avaliacoesSalvas[idAvaliacao] = {
      ...avaliacaoAtual,
      respostas: answers,
      finalizada,
      media,
      dataConclusao: new Date().toISOString(),
      user: usuarioLogado,
      status: finalizada ? "Respondida" : "Em andamento",
    };

    console.log("SALVANDO AVALIAÇÃO:", avaliacoesSalvas[idAvaliacao]);

    localStorage.setItem(
      "avaliacoesRespondidas",
      JSON.stringify(avaliacoesSalvas)
    );
  };

  const salvarAvaliacao360 = (finalizada) => {
    const media = calcularMedia();

    const avaliacoesSalvas =
      JSON.parse(localStorage.getItem("colaboradores360Respondidos")) || {};

    avaliacoesSalvas[idAvaliacao] = {
      ...avaliacaoAtual,
      respostas: answers,
      finalizada,
      media,
      dataConclusao: new Date().toISOString(),
      user: usuarioLogado,
      status: finalizada ? "Respondida" : "Em andamento",
    };
    localStorage.setItem(
      "colaboradores360Respondidos",
      JSON.stringify(avaliacoesSalvas)
    );
  };

  const confirmarEnvio = () => {
    if (tipo === "360") {
      salvarAvaliacao360(true);
      setShowConfirm(false);

      navigate("/360");
      return;
    }

    salvarAvaliacao(true);
    setShowConfirm(false);

    if (usuarioLogado.tipo === "Manager") {
      navigate("/management-main");
    } else {
      navigate("/user-avaliacoes");
    }
  };

  const salvarEContinuarDepois = () => {
    if (tipo === "360") {
      salvarAvaliacao360(false);
      setShowConfirm(false);

      navigate("/360");
      return;
    }

    salvarAvaliacao(false);
    setShowConfirm(false);

    navigate("/user-avaliacoes");
  };

  const totalQuestoes = avaliacaoAtual?.perguntas.length || 0;
  const respondidas = Object.keys(answers).length;
  const avaliacaoCompleta = respondidas === totalQuestoes;
  return (
    <>
      {
        usuarioLogado.tipo === "Manager" ? (
          <SidebarManagement 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
          />
        ) : (
          <Sidebar 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
          />
        )
      }

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <main className="p-8 overflow-y-auto mt-[8vh]">
        <div className="w-[80vw] mx-auto">
          <h1 className="text-3xl font-bold">Realizar Avaliação</h1>

          {alunoAvaliado && (
            <div className="mt-5 mb-8 rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5">
              <p className="text-sm text-gray-500">
                {avaliacaoFinalizada ? "Você avaliou" : "Você está avaliando"}
              </p>

              <h2 className="text-2xl font-semibold text-[#0291F7]">
                {alunoAvaliado}
              </h2>
              {turma && <p className="text-gray-500 mt-1">{turma}</p>}
            </div>
          )}

          <div className="flex justify-between items-center mt-2 mb-8">
            <span className="bg-[#0291F7]/15 text-[#0291F7] font-semibold px-4 py-2 rounded-full">
              {respondidas}/{totalQuestoes} respondidas
            </span>
          </div>

          {avaliacaoAtual && (
            <EvaluationTable
              data={avaliacaoAtual.perguntas}
              answers={answers}
              onSelect={handleSelect}
            />
          )}

          {!avaliacaoFinalizada && (
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={limparRespostas}
                className="border border-red-500 text-red-500 rounded-xl px-10 py-4 hover:bg-red-50 transition"
              >
                Limpar respostas
              </button>

              <button
                onClick={() => setShowConfirm(true)}
                className="bg-[#0291F7] text-white rounded-xl px-12 py-4 hover:bg-blue-700 transition"
              >
                Enviar Avaliação
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal de Confirmação */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-[420px]">
            {avaliacaoCompleta ? (
              <>
                <h2 className="text-2xl font-bold mb-4">Confirmar envio</h2>

                <p className="text-gray-600 mb-8">
                  Todas as competências foram respondidas.
                  <br />
                  <br />
                  Após enviar esta avaliação ela não poderá mais ser alterada.
                  <br />
                  <br />
                  Deseja realmente finalizar?
                </p>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="border border-gray-300 rounded-lg px-5 py-2 hover:bg-gray-100 transition"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={confirmarEnvio}
                    className="bg-[#0291F7] text-white rounded-lg px-5 py-2 hover:bg-blue-700 transition"
                  >
                    Confirmar
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">
                  Avaliação incompleta
                </h2>

                <p className="text-gray-600 mb-8">
                  Você respondeu {respondidas} de {totalQuestoes} competências.
                  <br />
                  <br />
                  Sua avaliação será salva e você poderá continuar depois.
                  <br />
                  <br />
                  Deseja salvar e sair?
                </p>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="border border-gray-300 rounded-lg px-5 py-2 hover:bg-gray-100 transition"
                  >
                    Continuar avaliação
                  </button>

                  <button
                    onClick={salvarEContinuarDepois}
                    className="bg-[#0291F7] text-white rounded-lg px-5 py-2 hover:bg-blue-700 transition"
                  >
                    Salvar e sair
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
