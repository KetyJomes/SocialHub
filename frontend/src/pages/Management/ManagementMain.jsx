import { useEffect, useRef, useState } from "react";
import { Info, ClipboardCheck, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { CardTurma } from "../../components/CardTurma";
import { CardAvaliacao } from "../../components/CardAvaliacao";
import { SidebarManagement } from "../../components/SidebarManagement";


export const ManagementMain = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [turmaSelecionada, setTurmaSelecionada] = useState(null);
  const [turmaFiltroAvaliacao, setTurmaFiltroAvaliacao] = useState("");
  const [turmaFiltroFeedback, setTurmaFiltroFeedback] = useState("");

  const listaTurmas = useRef();

  const [usuario, setUsuario] = useState({
    nome: "",
    role: "",
  });

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");

    if (!usuarioSalvo) {
      console.log("SEM USUARIO");
      return;
    }

    const usuarioLogado = JSON.parse(usuarioSalvo);

    setUsuario(usuarioLogado);
  }, []);

  // Turmas
  const turmas = [
    {
      nome: "DTA 3",
      alunos: 16,
      nota: 98,
    },

    {
      nome: "MAN 8",
      alunos: 18,
      nota: 96,
    },

    {
      nome: "TDS 6",
      alunos: 16,
      nota: 90,
    },

    {
      nome: "MEC 12",
      alunos: 14,
      nota: 86,
    },

    {
      nome: "DTA 2",
      alunos: 18,
      nota: 80,
    }

  ];

  const alunosPendentes = [
    {
      id: 1,
      nome: "João Silva",
      turma: "DTA 2",
      avaliacao: "1º Trimestre",
      avaliacaoId: 1,
      status: "Pendente",
    },

    {
      id: 2,
      nome: "Maria Luisa",
      turma: "DTA 3",
      avaliacao: "1º Trimestre",
      avaliacaoId: 1,
      status: "Pendente",
    },

    {
      id: 3,
      nome: "Pedro Oliveira",
      turma: "MAN 8",
      avaliacao: "1º Trimestre",
      avaliacaoId: 1,
      status: "Pendente",
    },

    {
      id: 4,
      nome: "Ana Costa",
      turma: "MEC 12",
      avaliacao: "2º Trimestre",
      avaliacaoId: 2,
      status: "Pendente",
    },
  ];

  // Filtro avaliações pendentes

  const alunosPendentesFiltrados =
    turmaFiltroAvaliacao === ""
      ? alunosPendentes
      : alunosPendentes.filter((aluno) => aluno.turma === turmaFiltroAvaliacao);



  // Feedbacks pendentes
  const feedbackPendentes = [
    {
      id: 1,
      avaliacao: "Avaliação pelos Alunos",
      nome: "João Silva",
      turma: "DTA 2",
      status: "Pendente",
    },

    {
      id: 3,
      avaliacao: "Avaliação pela Equipe",
      nome: "Pedro Oliveira",
      turma: "MAN 8",
      status: "Em atraso",
    },

    {
      id: 4,
      avaliacao: "Avaliação 360°",
      nome: "Ana Costa",
      turma: "MEC 12",
      status: "Pendente",
    },

    {
      id: 5,
      avaliacao: "Feedback de Liderança",
      nome: "Lucas Ferreira",
      turma: "DTA 3",
      status: "Pendente",
    },

    {
      id: 6,
      avaliacao: "Avaliação Comportamental",
      nome: "Mariana Alves",
      turma: "TDS 6",
      status: "Em atraso",
    },

    {
      id: 7,
      avaliacao: "Feedback de Desenvolvimento",
      nome: "Carlos Eduardo",
      turma: "DTA 2",
      status: "Pendente",
    },

    {
      id: 8,
      avaliacao: "Avaliação de Competências",
      nome: "Beatriz Lima",
      turma: "MEC 12",
      status: "Pendente",
    },

    {
      id: 9,
      avaliacao: "Feedback de Trabalho em Equipe",
      nome: "Rafael Martins",
      turma: "MAN 8",
      status: "Respondida",
    },

    {
      id: 10,
      avaliacao: "Avaliação de Comunicação",
      nome: "Juliana Rocha",
      turma: "DTA 3",
      status: "Pendente",
    }
  ];

  // Filtro feedbacks pendentes

  const feedbacksPendentesFiltrados =
    turmaFiltroFeedback === ""
      ? feedbackPendentes
      : feedbackPendentes.filter(
        (feedback) => feedback.turma === turmaFiltroFeedback
      );

  function moverCards(direcao) {
    if (direcao === "direita") {
      listaTurmas.current.scrollLeft += 320;
    } else {
      listaTurmas.current.scrollLeft -= 320;
    }
  }
  return (
    <div>
      <SidebarManagement isOpen={isOpen} setIsOpen={setIsOpen} />

      {isOpen && (
        <div
          className="
                            fixed
                            inset-0
                            bg-black/20
                            z-40
                        "
          onClick={() => setIsOpen(false)}
        />
      )}

      <main className="mt-[10vh]">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="p-10">
          <h1 className="font-bold text-3xl">
            Bem-vindo(a), {usuario.nome || "Instrutor"}!
          </h1>

          <p className="text-gray-500">
            Acompanhe o desempenho das suas turmas e alunos.
          </p>

          {/* Turmas */}

          <section className="mt-8">
            <div className="mt-15 flex items-center gap-4 mb-8">
              <div className="w-1 h-10 bg-[#0291F7] rounded-full"></div>

              <h2 className="font-bold text-2xl">Turmas</h2>
            </div>

            <div className="relative">
              <button
                onClick={() => moverCards("esquerda")}
                className="
                                    absolute
                                    left-4
                                    top-1/2
                                    -translate-y-1/2
                                    bg-white
                                    shadow-md
                                    rounded-full
                                    w-9
                                    h-9
                                    z-10
                                "
              >
                ‹
              </button>

              <div
                ref={listaTurmas}
                className="
                                    flex
                                    gap-5
                                    overflow-x-hidden
                                    px-3
                                    py-2
                                "
              >
                {turmas.map((turma, index) => (
                  <CardTurma
                    key={index}
                    turma={turma.nome}
                    alunos={turma.alunos}
                    nota={turma.nota}
                    selecionado={turmaSelecionada === index}
                    onClick={() => setTurmaSelecionada(index)}
                  />
                ))}
              </div>

              <button
                onClick={() => moverCards("direita")}
                className="
                                    absolute
                                    -right-4
                                    top-1/2
                                    -translate-y-1/2
                                    bg-white
                                    shadow-md
                                    rounded-full
                                    w-9
                                    h-9
                                    z-10
                                "
              >
                ›
              </button>
            </div>
          </section>

          {/* Cards Inferiores */}

          <section
            className="
                            grid
                            grid-cols-2
                            gap-8
                            mt-10
                        "
          >
            {/* AValiações pendentes */}

            <div
              className="
                                bg-white
                                rounded-xl
                                border
                                border-gray-100
                                p-5
                                shadow-sm
                            "
            >
              <div
                className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-5
                                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#EAF4FF]
                                            flex
                                            items-center
                                            justify-center
                                        "
                  >
                    <ClipboardCheck
                      size={20}
                      className="text-[#0291F7]"
                      strokeWidth={2}
                    />
                  </div>

                  <h2 className="font-bold text-2xl">Avaliações Pendentes</h2>
                </div>

                {/* Filtro turma */}

                <select
                  value={turmaFiltroAvaliacao}
                  onChange={(e) => setTurmaFiltroAvaliacao(e.target.value)}
                  className="
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-2
                                        text-gray-700
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#0291F7]
                                    "
                >
                  <option value="">Todas as turmas</option>

                  {turmas.map((turma, index) => (
                    <option key={index} value={turma.nome}>
                      {turma.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="
                                    h-110
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
              >
                {alunosPendentesFiltrados.length > 0 ? (
                  alunosPendentesFiltrados.map((aluno) => (
                    <div
                      key={aluno.id}
                      onClick={() =>
                        navigate(`/realizar-avaliacao?id=${aluno.avaliacaoId}`)
                      }
                      className="
                                                        cursor-pointer
                                                        rounded-lg
                                                        transition
                                                        hover:bg-[#0291F7]/5
                                                    "
                    >
                      <CardAvaliacao
                        tipoCard="avaliacao"
                        nome={`${aluno.avaliacao} - ${aluno.nome}`}
                        turma={aluno.turma}

                        status={aluno.status}
                      />
                    </div>
                  ))
                ) : (
                  <div
                    className="
                                                flex
                                                justify-center
                                                items-center
                                                h-full
                                                text-gray-500
                                                text-sm
                                            "
                  >
                    Nenhuma avaliação pendente encontrada.
                  </div>
                )}
              </div>
            </div>

            {/* Feedbacks */}

            <div
              className="
                                bg-white
                                rounded-xl
                                border
                                border-gray-100
                                p-5
                                shadow-sm
                            "
            >
              <div
                className="
                                    flex
                                    items-center
                                    justify-between
                                    mb-5
                                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#EAF4FF]
                                            flex
                                            items-center
                                            justify-center
                                        "
                  >
                    <ClipboardCheck
                      size={20}
                      className="text-[#0291F7]"
                      strokeWidth={2}
                    />
                  </div>

                  <h2 className="font-bold text-2xl">Feedbacks Pendentes</h2>
                </div>

                {/* Filtro turma */}

                <select
                  value={turmaFiltroFeedback}
                  onChange={(e) => setTurmaFiltroFeedback(e.target.value)}
                  className="
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-2
                                        text-gray-700
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#0291F7]
                                    "
                >
                  <option value="">Todas as turmas</option>

                  {turmas.map((turma, index) => (
                    <option key={index} value={turma.nome}>
                      {turma.nome}
                    </option>
                  ))}
                </select>
              </div>

              <div
                className="
                                    h-110
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
              >
                {feedbacksPendentesFiltrados.map((feedback) => (
                  <div
                    key={feedback.id}
                    onClick={() =>
                      navigate(`/management-comparison/${feedback.turma}/${feedback.nome}`)
                    }
                    className="
                    cursor-pointer
                    rounded-lg
                    transition
                    hover:bg-[#0291F7]/5
                  "
                  >
                    <CardAvaliacao
                      tipoCard="feedback"
                      nome={`${feedback.avaliacao} - ${feedback.nome}`}
                      turma={feedback.turma}
                      status={feedback.status}
                    />
                  </div>
                ))}
                ) : (
                <div
                  className="
                          flex
                          justify-center
                          items-center
                          h-full
                          text-gray-500
                          text-sm
                      "
                >
                  Nenhuma feedback pendente encontrada.
                </div>
                )
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
