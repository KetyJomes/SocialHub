import { useRef, useState } from "react";
import { Info } from "lucide-react";
import { House } from "lucide-react";

import { Header } from "../components/Header";
import { CardTurma } from "../components/CardTurma";
import { CardAvaliacao } from "../components/CardAvaliacao";
import { CardAvaliacao360 } from "../components/CardAvaliacao360";
import { SidebarManagement } from "../components/SidebarManagement";


export const ManagementMain = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [turmaSelecionada, setTurmaSelecionada] = useState(null);
    const listaTurmas = useRef();
    const turmas = [

        {
            nome:"Turma 9A",
            alunos:32,
            nota:90
        },

        {
            nome:"Turma 9B",
            alunos:28,
            nota:85
        },

        {
            nome:"Turma 1EM",
            alunos:35,
            nota:95
        },

        {
            nome:"Turma 2EM",
            alunos:30,
            nota:88
        },

        {
            nome:"Turma 3EM",
            alunos:33,
            nota:91
        },

        {
            nome:"Turma 8A",
            alunos:27,
            nota:82
        },

        {
            nome:"Turma 7B",
            alunos:31,
            nota:87
        },

        {
            nome:"Turma 6A",
            alunos:25,
            nota:79
        }

    ];

    const avaliacoes = [

        {
            nome:"Avaliação Diagnóstica - 1º Bimestre",
            turma:"Turma 9A"
        },

        {
            nome:"Atividade de Feedback - Projeto",
            turma:"Turma 9B"
        },

        {
            nome:"Avaliação de Competências Socioemocionais",
            turma:"Turma 1EM"
        },

        {
            nome:"Pesquisa de Clima Escolar",
            turma:"Turma 2EM"
        },

        {
            nome:"Avaliação de Participação em Sala",
            turma:"Turma 3EM"
        },

        {
            nome:"Avaliação de Trabalho em Equipe",
            turma:"Turma 8A"
        },

        {
            nome:"Avaliação de Desenvolvimento",
            turma:"Turma 7B"
        },

        {
            nome:"Avaliação de Desempenho Semestral",
            turma:"Turma 6A"
        },

        {
            nome:"Avaliação de Projeto Integrador",
            turma:"Turma 9C"
        },

        {
            nome:"Avaliação de Competências",
            turma:"Turma 2EM"
        }

    ];

    const avaliacoes360 = [

        {
            tipo:"Avaliação pelos Alunos",
            descricao:"Como os alunos avaliam o líder",
            status:"concluido"
        },

        {
            tipo:"Avaliação pelos Pares",
            descricao:"Como os pares avaliam o líder",
            status:"concluido"
        },

        {
            tipo:"Avaliação pelo Líder",
            descricao:"Autoavaliação do líder",
            status:"concluido"
        },

        {
            tipo:"Avaliação pela Equipe",
            descricao:"Como a equipe avalia o líder",
            status:"pendente"
        },

        {
            tipo:"Resumo Consolidado",
            descricao:"Visão geral das avaliações 360",
            status:"concluido"
        },

        {
            tipo:"Avaliação pelo Líder",
            descricao:"Autoavaliação do líder",
            status:"concluido"
        },

        {
            tipo:"Avaliação pela Equipe",
            descricao:"Como a equipe avalia o líder",
            status:"pendente"
        },

        {
            tipo:"Resumo Consolidado",
            descricao:"Visão geral das avaliações 360",
            status:"concluido"
        }

    ];

    function moverCards(direcao){
        if(direcao === "direita"){
            listaTurmas.current.scrollLeft += 320;

        }else{
            listaTurmas.current.scrollLeft -= 320;

        }

    }

    return (
        <div>
            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
                <main className="mt-[10vh]">
                        <Header
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />

                    <div className="p-10">
                        <h1 className="font-bold text-3xl">
                            Bem-vindo(a), Gestor!
                        </h1>
                        <p className="text-gray-500">
                            Acompanhe o desempenho das suas turmas e alunos.
                        </p>

                        {/* Turmas */}
                        <section className="mt-8">

                            <h2 className="text-xl font-bold mb-4">
                                Turmas
                            </h2>

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
                                {
                                    turmas.map((turma,index)=>(
                                    <CardTurma
                                    key={index}
                                    turma={turma.nome}
                                    alunos={turma.alunos}
                                    nota={turma.nota}
                                    selecionado={
                                    turmaSelecionada === index
                                }
                                    onClick={() =>
                                    setTurmaSelecionada(index)
                                }

                            />
                                    ))
                                }
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
                        <section
                            className="
                                grid
                                grid-cols-2
                                gap-8
                                mt-10
                            "
                        >
                            {/* AVALIAÇÕES ENVIADAS */}
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
                                <div className="flex items-center gap-3 mb-5">
                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#F1EDFF]
                                            flex
                                            items-center
                                            justify-center
                                            text-xl
                                        "
                                    >
                                        📩
                                    </div>
                                    <h2 className="text-xl font-bold">
                                        Avaliações Enviadas
                                    </h2>
                                </div>
                                <div
                                    className="
                                        h-110
                                        space-y-3
                                        overflow-y-auto
                                        pr-2
                                    "
                                >
                                {
                                    avaliacoes.map((item,index)=>(
                                        <CardAvaliacao
                                            key={index}
                                            nome={item.nome}
                                            turma={item.turma}

                                        />
                                    ))
                                }

                                </div>

                            </div>

                            {/* AVALIAÇÃO 360 */}
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
                                <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-[#F1EDFF]
                                        flex
                                        items-center
                                        justify-center
                                        text-xl
                                    "
                                >
                                    🔄
                                </div>
                                <h2 className="text-xl font-bold">
                                    Avaliações 360
                                </h2>
                                </div>
                                <div className="
                                    h-110
                                    space-y-3
                                    overflow-y-auto
                                    pr-2"
                                >
                                    {
                                        avaliacoes360.map((item,index)=>(
                                            <CardAvaliacao360
                                                key={index}
                                                tipo={item.tipo}
                                                descricao={item.descricao}
                                                status={item.status}

                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </section>
                    
                            <div
                                className="
                                    flex
                                    justify-center
                                    mt-8
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        bg-gray-50
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-6
                                        py-3
                                    "
                                >
                                    <Info
                                        size={18}
                                        className="text-[#B8A4FF]"
                                        strokeWidth={2}
                                    />

                                    <span className="text-sm text-gray-600">
                                        Clique em uma turma acima para visualizar o desempenho detalhado dos alunos.
                                    </span>
                                </div>
                            </div>
                    </div>
                </main>
        </div>
    )
}