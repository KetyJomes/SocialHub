// Tools
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Componentes
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CardNotificacaoAvaliacao } from "../../components/CardNotificacaoAvaliacao";
import { GraficoPessoal } from "../../components/GraficoPessoal";


import blue from "../../assets/blue arrow.png";
import green from "../../assets/green arrow.png";

import {
    BarChart3,
    Users,
    ClipboardCheck,
    ChartColumn
} from "lucide-react";

export const UserMain = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    // Função que faz a página começar sempre do início
    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    }, []);


    return (

        <>

            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />


            <main className="mt-[8vh]">


                {/* CONTEÚDO DA TELA */}

                <div className="p-10">

                    <div>

                        <h1 className="font-bold text-3xl">
                            Bem-vindo(a), Usuário!
                        </h1>

                        <p className="text-gray-500">
                            Acompanhe seu desempenho e evolução nas avaliações.
                        </p>

                    </div>

                    <div className="flex justify-center">
                        <CardNotificacaoAvaliacao />
                    </div>


                    {/* Section de resultados de "Meu Desempenho" */}

                    <div className="mt-15 flex items-center gap-4 mb-8">

                        {/* Linha azul */}
                        <div className="w-1 h-10 bg-[#0291F7] rounded-full"></div>

                        <h1 className="font-bold text-2xl">
                            Meu Desempenho
                        </h1>

                    </div>

                    <div className="flex justify-between">


                        {/* Resultado comparativo */}

                        <section className="w-[48%]">

                            <div className="flex items-center gap-5 mb-6">

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
                                        strokeWidth={2}
                                    />

                                </div>

                                <h1 className="font-bold text-xl">
                                    Desempenho Comparativo
                                </h1>

                            </div>


                            <div className="flex items-center justify-between">

                                {/* Card de porcentagem
                                 */}
                                <section className="w-70 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">


                                    <p className="text-gray-500 text-center font-medium">

                                        Resultado Atual

                                    </p>


                                    <div className="flex justify-center mt-5">


                                        <div className="w-36 h-36 rounded-full border-8 border-[#0291F7] flex flex-col justify-center items-center">


                                            <h1 className="text-5xl font-bold text-[#0291F7]">

                                                90%

                                            </h1>


                                            <span className="text-green-600 font-semibold text-sm">

                                                Excelente

                                            </span>


                                        </div>


                                    </div>


                                    <div className="text-center mt-5">


                                        <p className="text-green-600 font-bold text-lg">

                                            ▲ +5%

                                        </p>


                                        <p className="text-gray-400 text-sm">

                                            em relação ao último ciclo

                                        </p>


                                    </div>


                                </section>


                                <GraficoPessoal />


                            </div>


                        </section>


                        {/* =================================
                            DESEMPENHO 360
                        ================================== */}

                        <section className="w-[48%]">


                            <div className="flex items-center gap-5 mb-6">


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


                                    <Users
                                        size={20}
                                        className="text-[#0291F7]"
                                        strokeWidth={2}
                                    />


                                </div>


                                <h1 className="font-bold text-xl">

                                    Desempenho 360

                                </h1>


                            </div>


                            <div className="flex items-center justify-between">


                                {/* RESULTADO */}

                                <section className="w-70 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">


                                    <p className="text-gray-500 text-center font-medium">

                                        Resultado Atual

                                    </p>


                                    <div className="flex justify-center mt-5">


                                        <div className="w-36 h-36 rounded-full border-8 border-[#0291F7] flex flex-col justify-center items-center">


                                            <h1 className="text-5xl font-bold text-[#0291F7]">

                                                90%

                                            </h1>


                                            <span className="text-green-600 font-semibold text-sm">

                                                Excelente

                                            </span>


                                        </div>


                                    </div>


                                    <div className="text-center mt-5">


                                        <p className="text-green-600 font-bold text-lg">

                                            ▲ +5%

                                        </p>


                                        <p className="text-gray-400 text-sm">

                                            em relação ao último ciclo

                                        </p>


                                    </div>


                                </section>


                                <GraficoPessoal />


                            </div>


                        </section>


                    </div>


                    {/* ================================
                        ACESSO RÁPIDO
                    ================================= */}

                    <div className="mt-15 flex items-start gap-4 mb-8">


                        <div className="w-1 h-10 bg-[#0291F7] rounded-full"></div>


                        <h1 className="font-bold text-2xl">

                            Acesso Rápido

                        </h1>


                    </div>


                    <section className="w-full p-2">


                        <div className="flex flex-row gap-50 justify-center">


                            {/* AVALIAÇÕES */}

                            <section

                                className="flex items-start w-[20%] gap-4 cursor-pointer"

                                onClick={() => navigate("/user-avaliacoes")}

                            >


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


                                <div className="ml-5">


                                    <h1 className="text-[#0291F7] font-bold text-2xl">

                                        Avaliações

                                    </h1>


                                    <p className="mt-2 text-gray-500">

                                        Acompanhe e gerencie suas avaliações

                                    </p>


                                </div>


                                <img

                                    src={blue}

                                    alt=""

                                    className="w-5"

                                />


                            </section>


                            {/* RESULTADOS */}

                            <section

                                className="flex items-center w-[20%] gap-4 cursor-pointer"

                                onClick={() => navigate("/resultados")}

                            >


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


                                    <ChartColumn
                                        size={20}
                                        className="text-[#0291F7]"
                                        strokeWidth={2}
                                    />


                                </div>


                                <div className="ml-5">


                                    <h1 className="text-[#0291F7] font-bold text-2xl">

                                        Resultados

                                    </h1>


                                    <p className="mt-2 text-gray-500">

                                        Visualize seus resultados e indicadores

                                    </p>


                                </div>


                                <img

                                    src={green}

                                    alt=""

                                    className="w-5"

                                />


                            </section>
                            
                        </div>


                    </section>


                </div>


            </main>

        </>

    );

};