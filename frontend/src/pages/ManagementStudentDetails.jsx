import { useState } from "react";
import { useParams } from "react-router-dom";
import {
    ClipboardCheck,
    Info,
    LineChart,
    PieChart
} from "lucide-react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { GraficoEvolucaoAluno } from "../components/GraficoEvolucaoAluno";
import { GraficoCompetenciasAluno } from "../components/GraficoCompetenciasAluno";
import { StudentTestsControlTable } from "../components/Management/StudentTestsControlTable";

export const ManagementStudentDetails = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [abaAtiva, setAbaAtiva] = useState("disponiveis");
    const [filtroTipo, setFiltroTipo] = useState("Todos");

    const { turma, aluno } = useParams();


    const avaliacoes = [

        {
            id: 1,
            nome: "1º Trimestre",
            descricao: "Avaliação do gestor realizada pelo instrutor",
            tipo: "Gestor → Aluno",
            disponibilizada: "01/07/2026",
            infoDisponibilizada: "Disponível",
            prazo: "20/07/2026",
            infoPrazo: "10 dias restantes",
            status: "Pendente"
        },

        {
            id: 2,
            nome: "2º Trimestre",
            descricao: "Avaliação realizada pelo aluno",
            tipo: "Aluno → Instrutor",
            disponibilizada: "01/04/2026",
            infoDisponibilizada: "Finalizada",
            prazo: "20/04/2026",
            infoPrazo: "Concluída",
            status: "Respondida"
        },

        {
            id: 3,
            nome: "Autoavaliação",
            descricao: "Autoavaliação do aluno",
            tipo: "Autoavaliação",
            disponibilizada: "15/01/2026",
            infoDisponibilizada: "Disponível",
            prazo: "30/01/2026",
            infoPrazo: "5 dias restantes",
            status: "Pendente"
        },

        {
            id: 4,
            nome: "Avaliação 360°",
            descricao: "Avaliação dos colegas",
            tipo: "360°",
            disponibilizada: "01/02/2026",
            infoDisponibilizada: "Finalizada",
            prazo: "15/02/2026",
            infoPrazo: "Concluída",
            status: "Respondida"
        }

    ];


    const disponiveis = avaliacoes.filter((avaliacao) => {

        return (
            avaliacao.status === "Pendente" ||
            avaliacao.status === "Em atraso"
        );

    });


    const feitas = avaliacoes.filter((avaliacao) => {

        return avaliacao.status === "Respondida";

    });


    const aplicarFiltroTipo = (lista) => {

        if (filtroTipo === "Todos") {
            return lista;
        }

        return lista.filter(
            (avaliacao) => avaliacao.tipo === filtroTipo
        );

    };


const disponiveisFiltradas = aplicarFiltroTipo(disponiveis);

const feitasFiltradas = aplicarFiltroTipo(feitas);



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


            <main className="mt-[8vh]">


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

                                    <LineChart
                                        size={20}
                                        className="text-[#0291F7]"
                                    />

                                </div>


                                <h2 className="text-xl font-bold">
                                    Evolução Trimestral
                                </h2>

                            </div>


                            <GraficoEvolucaoAluno />


                        </div>




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
                                    Competências do Aluno
                                </h2>


                            </div>


                            <GraficoCompetenciasAluno />


                        </div>


                    </section>

                    {/* CARD DE AVALIAÇÕES */}

                    <section className="mt-8">


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
                                    <ClipboardCheck
                                        size={20}
                                        className="text-[#0291F7]"
                                        strokeWidth={2}
                                    />
                                </div>


                                <h2 className="text-xl font-bold">
                                    Avaliações
                                </h2>


                            </div>



                            {/* ABAS + FILTRO */}

                            <section
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    border-b
                                    border-gray-300
                                "
                            >


                                <div className="flex gap-8">


                                    <button
                                        onClick={() => setAbaAtiva("disponiveis")}
                                        className={`
                                            px-2
                                            py-3
                                            text-lg
                                            border-b-2
                                            transition
                                            cursor-pointer

                                            ${
                                                abaAtiva === "disponiveis"
                                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                                    : "text-gray-500 border-transparent"
                                            }
                                        `}
                                    >

                                        Disponíveis ({disponiveisFiltradas.length})

                                    </button>



                                    <button
                                        onClick={() => setAbaAtiva("feitas")}
                                        className={`
                                            px-2
                                            py-3
                                            text-lg
                                            border-b-2
                                            transition
                                            cursor-pointer

                                            ${
                                                abaAtiva === "feitas"
                                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                                    : "text-gray-500 border-transparent"
                                            }
                                        `}
                                    >

                                        Feitas ({feitasFiltradas.length})

                                    </button>


                                </div>



                                <select
                                    value={filtroTipo}
                                    onChange={(e) => setFiltroTipo(e.target.value)}
                                    className="
                                        bg-white
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-2
                                        text-gray-700
                                        mb-2
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-[#0291F7]
                                    "
                                >

                                    <option value="Todos">
                                        Todos os tipos
                                    </option>


                                    <option value="Gestor → Aluno">
                                        Gestor → Aluno
                                    </option>


                                    <option value="Aluno → Instrutor">
                                        Aluno → Instrutor
                                    </option>


                                    <option value="Autoavaliação">
                                        Autoavaliação
                                    </option>


                                    <option value="360°">
                                        Avaliação 360°
                                    </option>


                                </select>


                            </section>



                            {/* TABELA */}

                            <div className="mt-6">


                                {
                                    abaAtiva === "disponiveis" && (

                                        <StudentTestsControlTable
                                            avaliacoes={disponiveisFiltradas}
                                            tipoAba="disponiveis"
                                        />

                                    )
                                }



                                {
                                    abaAtiva === "feitas" && (

                                        <StudentTestsControlTable
                                            avaliacoes={feitasFiltradas}
                                            tipoAba="feitas"
                                        />

                                    )
                                }


                            </div>


                        </div>


                    </section>





                    {/* AVISO */}


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

                                Visualize a evolução do aluno e acompanhe as avaliações disponíveis e concluídas.

                            </span>


                        </div>


                    </div>



                </div>


            </main>


        </>

    );

};