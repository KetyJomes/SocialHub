import { useState } from "react";
import { useParams } from "react-router-dom";
import { GraduationCap, Info, PieChart, BarChart3 } from "lucide-react";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";
import { CardAlunoRanking } from "../../components/CardAlunoRanking";
import { GraficoCompetencias } from "../../components/GraficoCompetencias";
import { GraficoAluno } from "../../components/GraficoAluno";

export const ManagementClassDetails = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { turma } = useParams();


    const alunos = [

        {
            nome: "Ana Souza",
            nota: 98
        },

        {
            nome: "João Silva",
            nota: 95
        },

        {
            nome: "Maria Oliveira",
            nota: 90
        },

        {
            nome: "Pedro Santos",
            nota: 82
        },

        {
            nome: "Lucas Mendes",
            nota: 76
        },

        {
            nome: "Beatriz Costa",
            nota: 68
        },

        {
            nome: "Carlos Lima",
            nota: 55
        },

        {
            nome: "Julia Rocha",
            nota: 45
        }

    ];


    const rankingAlunos = [...alunos].sort(
        (a, b) => b.nota - a.nota
    );


    return (

        <>

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


                    <h1 className="text-3xl font-bold">
                        {turma}
                    </h1>


                    <p className="text-gray-500">
                        Visualize o desempenho dos alunos desta turma.
                    </p>



                    <section
                        className="
                            grid
                            grid-cols-2
                            gap-8
                            mt-8
                        "
                    >



                        {/* CARD DOS ALUNOS */}


                        <div
                            className="
                                bg-white
                                rounded-xl
                                border
                                border-gray-100
                                shadow-sm
                                p-5
                                flex
                                flex-col
                                h-full
                            "
                        >


                            <div className="flex items-center gap-3 mb-5">


                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-[#0291F7]/15
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <GraduationCap
                                        size={20}
                                        className="text-[#0291F7]"
                                    />

                                </div>


                                <h2 className="text-xl font-bold">
                                    Alunos
                                </h2>


                            </div>



                            <div
                                className="
                                    flex-1
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
                            >

                                {
                                    rankingAlunos.map((aluno, index) => (

                                        <CardAlunoRanking
                                            key={index}
                                            aluno={aluno}
                                            posicao={index + 1}
                                            turma={turma}
                                        />

                                    ))
                                }

                            </div>


                        </div>





                        {/* COLUNA DOS GRÁFICOS */}



                        <div className="flex flex-col gap-8">


                            {/* PIZZA */}


                            <div
                                className="
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-100
                                    shadow-sm
                                    p-5
                                "
                            >


                                <div className="flex items-center gap-3 mb-5">


                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#0291F7]/15
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <PieChart
                                            size={20}
                                            className="text-[#0291F7]"
                                        />

                                    </div>


                                    <h2 className="text-xl font-bold">
                                        Competências da Turma
                                    </h2>


                                </div>


                                <GraficoCompetencias />


                            </div>





                            {/* BARRAS */}



                            <div
                                className="
                                    bg-white
                                    rounded-xl
                                    border
                                    border-gray-100
                                    shadow-sm
                                    p-5
                                "
                            >


                                <div className="flex items-center gap-3 mb-5">


                                    <div
                                        className="
                                            w-10
                                            h-10
                                            rounded-full
                                            bg-[#0291F7]/15
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <BarChart3
                                            size={20}
                                            className="text-[#0291F7]"
                                        />

                                    </div>


                                    <h2 className="text-xl font-bold">
                                        Desempenho dos Alunos
                                    </h2>


                                </div>


                                <GraficoAluno
                                    dados={rankingAlunos}
                                />


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
                                className="text-[#0291F7]"
                            />


                            <span className="text-sm text-gray-600">

                                Clique em um aluno para visualizar informações detalhadas.

                            </span>


                        </div>


                    </div>


                </div>


            </main>


        </>

    );

};