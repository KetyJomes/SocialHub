// Tools
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Componentes
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { CardNotificacaoAvaliacao } from "../../components/CardNotificacaoAvaliacao";
import { GraficoPessoal } from "../../components/GraficoPessoal";

// Imagens
import bars from "../../assets/bars.png";
import people from "../../assets/people.png";
import exam from "../../assets/exam.png";
import bar_chart from "../../assets/bar-chart.png";
import people_purple from "../../assets/people-purple.png";

import blue from "../../assets/blue arrow.png";
import green from "../../assets/green arrow.png";
import purple from "../../assets/purple arrow.png";

export const UserMain = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);


    /*
    =====================================================
    SEMPRE COMEÇAR NO TOPO DA PÁGINA
    =====================================================
    */

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

                <div className="user-container p-10">


                    <h1 className="font-bold text-3xl mb-8">

                        Bem-Vindo, Usuário!

                    </h1>


                    <div className="flex justify-center">

                        <CardNotificacaoAvaliacao />

                    </div>


                    {/* ================================
                        MEU DESEMPENHO
                    ================================= */}

                    <div className="mt-15 flex items-center gap-4 mb-8">


                        <div className="w-1 h-10 bg-[#2563EB] rounded-full"></div>


                        <h1 className="font-bold text-3xl">

                            Meu Desempenho

                        </h1>


                    </div>


                    <div className="flex justify-between">


                        {/* =================================
                            DESEMPENHO COMPARATIVO
                        ================================== */}

                        <section className="w-[48%]">


                            <div className="flex items-center gap-5 mb-6">


                                <div className="w-16 h-16 bg-[#0291F7]/15 rounded-xl flex items-center justify-center">


                                    <img

                                        src={bars}

                                        alt=""

                                        className="w-10 h-10"

                                    />


                                </div>


                                <h1 className="font-bold text-xl">

                                    Desempenho Comparativo

                                </h1>


                            </div>


                            <div className="flex items-center justify-between">


                                {/* RESULTADO */}

                                <section className="w-70 bg-white rounded-3xl shadow-lg border border-gray-100 p-6">


                                    <p className="text-gray-500 text-center font-medium">

                                        Resultado Atual

                                    </p>


                                    <div className="flex justify-center mt-5">


                                        <div className="w-36 h-36 rounded-full border-8 border-[#2563EB] flex flex-col justify-center items-center">


                                            <h1 className="text-5xl font-bold text-[#2563EB]">

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


                                <div className="w-16 h-16 bg-[#0291F7]/15 rounded-xl flex items-center justify-center">


                                    <img

                                        src={people}

                                        alt=""

                                        className="w-10 h-8 scale-110"

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


                                        <div className="w-36 h-36 rounded-full border-8 border-[#2563EB] flex flex-col justify-center items-center">


                                            <h1 className="text-5xl font-bold text-[#2563EB]">

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

                    <div className="mt-15 flex items-center gap-4 mb-8">


                        <div className="w-1 h-10 bg-[#2563EB] rounded-full"></div>


                        <h1 className="font-bold text-3xl">

                            Acesso Rápido

                        </h1>


                    </div>


                    <section className="w-full p-2">


                        <div className="flex flex-row gap-50 justify-center">


                            {/* AVALIAÇÕES */}

                            <section

                                className="flex items-center w-[20%] gap-4 cursor-pointer"

                                onClick={() => navigate("/user-avaliacoes")}

                            >


                                <div className="w-30 h-20 bg-[#2563EB]/20 rounded-2xl flex items-center justify-center">


                                    <img

                                        src={exam}

                                        alt=""

                                        className="w-12 h-12 object-contain"

                                    />


                                </div>


                                <div className="ml-5">


                                    <h1 className="text-[#2563EB] font-bold text-2xl">

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


                                <div className="w-30 h-20 bg-[#31A74E]/20 rounded-2xl flex items-center justify-center">


                                    <img

                                        src={bar_chart}

                                        alt=""

                                        className="w-12 h-12 object-contain"

                                    />


                                </div>


                                <div className="ml-5">


                                    <h1 className="text-[#31A74E] font-bold text-2xl">

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


                            {/* AVALIAÇÃO 360 */}

                            <section

                                className="flex items-center w-[20%] gap-4 cursor-pointer"

                                onClick={() => navigate("/360")}

                            >


                                <div className="w-20 h-20 bg-[#6e12c3]/20 rounded-2xl flex items-center justify-center">


                                    <img

                                        src={people_purple}

                                        alt=""

                                        className="w-12 h-12 object-contain"

                                    />


                                </div>


                                <div className="ml-5">


                                    <h1 className="text-[#6e12c3] font-bold text-2xl">

                                        Feedback 360

                                    </h1>


                                    <p className="mt-2 text-gray-500">

                                        Confira o feedback 360

                                    </p>


                                </div>


                                <img

                                    src={purple}

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