import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    ClipboardList,
    Info,
    LineChart,
    PieChart
} from "lucide-react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { CardAvaliacaoAluno } from "../components/CardAvaliacaoAluno";
import { GraficoEvolucaoAluno } from "../components/GraficoEvolucaoAluno";
import { GraficoCompetenciasAluno } from "../components/GraficoCompetenciasAluno";

export const ManagementStudentDetails = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { turma, aluno } = useParams();

    const avaliacoes = [

        {
            titulo: "Gestor → Aluno",
            quantidade: 4,
            ultima: "12/07/2026",
            tipo: "gestor"
        },

        {
            titulo: "Aluno → Gestor",
            quantidade: 4,
            ultima: "12/07/2026",
            tipo: "aluno"
        },

        {
            titulo: "Autoavaliação",
            quantidade: 4,
            ultima: "12/07/2026",
            tipo: "auto"
        },

        {
            titulo: "Avaliação 360°",
            quantidade: 8,
            ultima: "12/07/2026",
            tipo: "360"
        },

        {
            titulo: "Aluno → Líder de Turma",
            quantidade: 4,
            ultima: "12/07/2026",
            tipo: "lider-aluno"
        },

        {
            titulo: "Líder de Turma → Turma",
            quantidade: 4,
            ultima: "12/07/2026",
            tipo: "lider-turma"
        }

    ];

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
                        {aluno}
                    </h1>

                    <p className="text-lg font-semibold mt-1">
                        {turma}
                    </p>

                    <p className="text-gray-500">
                        Visualize o desempenho individual do aluno.
                    </p>

                    <section
                        className="
                            grid
                            grid-cols-2
                            gap-8
                            mt-8
                        "
                    >

                        {/* CARD DAS AVALIAÇÕES */}

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
                                        bg-[#F1EDFF]
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <ClipboardList
                                        size={20}
                                        className="text-[#B8A4FF]"
                                    />

                                </div>

                                <h2 className="text-xl font-bold">
                                    Avaliações
                                </h2>

                            </div>

                            <div
                                className="
                                    h-[620px]
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
                            >

                                {

                                    avaliacoes.map((avaliacao, index) => (

                                        <CardAvaliacaoAluno
                                            key={index}
                                            titulo={avaliacao.titulo}
                                            quantidade={avaliacao.quantidade}
                                            ultima={avaliacao.ultima}
                                            tipo={avaliacao.tipo}
                                            turma={turma}
                                            aluno={aluno}
                                        />

                                    ))

                                }

                            </div>

                        </div>

                        {/* COLUNA DOS GRÁFICOS */}

                        <div className="flex flex-col gap-8">

                            {/* EVOLUÇÃO */}

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
                                            bg-[#F1EDFF]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <LineChart
                                            size={20}
                                            className="text-[#B8A4FF]"
                                        />

                                    </div>

                                    <h2 className="text-xl font-bold">
                                        Evolução Trimestral
                                    </h2>

                                </div>

                                <GraficoEvolucaoAluno />

                            </div>

                            {/* COMPETÊNCIAS */}

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
                                            bg-[#F1EDFF]
                                            flex
                                            items-center
                                            justify-center
                                        "
                                    >

                                        <PieChart
                                            size={20}
                                            className="text-[#B8A4FF]"
                                        />

                                    </div>

                                    <h2 className="text-xl font-bold">
                                        Competências do Aluno
                                    </h2>

                                </div>

                                <GraficoCompetenciasAluno />

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
                            />

                            <span className="text-sm text-gray-600">
                                Visualize a evolução do aluno e compare os resultados das avaliações realizadas.
                            </span>

                        </div>

                    </div>

                </div>

            </main>

        </>

    );

};