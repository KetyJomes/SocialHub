import { useState } from "react";
import { GraduationCap, Info, BarChart3 } from "lucide-react";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { CardTurmaRanking } from "../components/CardTurmaRanking";
import { GraficoTurmas } from "../components/GraficoTurmas";

export const ManagementClasses = () => {

    const [isOpen, setIsOpen] = useState(false);


    const turmas = [

        {
            nome: "Turma 1EM",
            nota: 98
        },

        {
            nome: "Turma 9A",
            nota: 96
        },

        {
            nome: "Turma 2EM",
            nota: 59
        },

        {
            nome: "Turma 3EM",
            nota: 70
        },

        {
            nome: "Turma 9B",
            nota: 90
        },

        {
            nome: "Turma 8A",
            nota: 68
        },

        {
            nome: "Turma 7B",
            nota: 50
        },

        {
            nome: "Turma 6A",
            nota: 14
        },

        {
            nome: "Turma 5A",
            nota: 86
        },

        {
            nome: "Turma 4A",
            nota: 80
        }

    ];


    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <main>


                <Header
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />


                <div className="pt-28 px-10 pb-10">


                    <h1 className="text-3xl font-bold">
                        Turmas
                    </h1>


                    <p className="text-gray-500">
                        Visualize o desempenho geral de todas as turmas.
                    </p>



                    <section
                        className="
                            grid
                            grid-cols-2
                            gap-8
                            mt-8
                        "
                    >



                        {/* CARD DAS TURMAS */}


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
                                    <GraduationCap
                                        size={20}
                                        className="text-[#0291F7]"
                                    />
                                </div>


                                <h2 className="text-xl font-bold">
                                    Desempenho das Turmas
                                </h2>


                            </div>



                            <div
                                className="
                                    h-[520px]
                                    space-y-3
                                    overflow-y-auto
                                    pr-2
                                "
                            >


                                {
                                    turmas.map((turma, index) => (

                                        <CardTurmaRanking
                                            key={index}
                                            turma={turma.nome}
                                            nota={turma.nota}
                                        />

                                    ))
                                }


                            </div>


                        </div>





                        {/* CARD DO GRÁFICO */}


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
                                    Desempenho Geral
                                </h2>


                            </div>



                            <GraficoTurmas
                                dados={turmas}
                            />


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

                                Clique em uma turma para visualizar seu desempenho detalhado.

                            </span>


                        </div>


                    </div>



                </div>


            </main>


        </>

    );

};