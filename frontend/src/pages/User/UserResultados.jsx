import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { TabelaAvaliacoes } from "../../components/TabelaAvaliacoes";
import { UserGraficoCompetencias } from "../../components/UserGraficoCompetencias";
import { ProgressCircle } from "../../components/ProgressCircle";
import { avaliacoes } from "../../data/avaliacoes";
import {
    ClipboardCheck,
    Users,
    UserCheck
} from "lucide-react";


export const UserResultados = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();



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





            <main className="min-h-screen bg-white p-10 mt-[8vh]">


                <div className="mx-auto pb-12">





                    {/* SAUDAÇÃO */}

                    <div>


                        <h1 className="text-4xl font-bold text-gray-800">

                            Olá, Usuário!

                        </h1>



                        <p className="text-gray-500 mt-2">

                            Acompanhe seu desempenho nas avaliações e continue evoluindo.

                        </p>


                    </div>









                    {/* CARDS */}


                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center mt-10">





                        {/* MEU DESEMPENHO GERAL */}


                        <div
                            onClick={() => navigate("/realizar-avaliacao")}
                            className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 w-[75%] cursor-pointer hover:shadow-md transition"
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


                                <h3 className="font-bold text-2xl">
                                    Meu Desempenho Geral
                                </h3>

                            </div>





                            <div className="flex justify-between items-center mt-7">


                                <ProgressCircle
                                    value={75}
                                    color="#0291F7"
                                />



                                <div>


                                    <h2
                                        className="text-5xl font-bold"
                                        style={{
                                            color:"#0291F7"
                                        }}
                                    >

                                        75%

                                    </h2>



                                    <p
                                        className="font-semibold mt-1"
                                        style={{
                                            color:"#0291F7"
                                        }}
                                    >

                                        Acima

                                    </p>





                                    <div className="mt-4 text-sm flex items-center gap-2">


                                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600">

                                            +10

                                        </span>



                                        <span className="text-gray-400">

                                            vs. período anterior

                                        </span>


                                    </div>


                                </div>


                            </div>


                        </div>









                        {/* DESEMPENHO 360 */}


                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 w-[75%]">


                            <div className="flex items-center gap-3">

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-purple-100
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <Users
                                        size={20}
                                        className="text-[#7C3AED]"
                                        strokeWidth={2}
                                    />

                                </div>


                                <h3 className="font-bold text-2xl">

                                    Desempenho 360°

                                </h3>

                            </div>





                            <div className="flex justify-between items-center mt-7">


                                <ProgressCircle
                                    value={55}
                                    color="#7C3AED"
                                />



                                <div>


                                    <h2
                                        className="text-5xl font-bold"
                                        style={{
                                            color:"#7C3AED"
                                        }}
                                    >

                                        55%

                                    </h2>



                                    <p
                                        className="font-semibold mt-1"
                                        style={{
                                            color:"#7C3AED"
                                        }}
                                    >

                                        Bom

                                    </p>





                                    <div className="mt-4 text-sm flex items-center gap-2">


                                        <span className="px-2 py-1 rounded-full bg-red-100 text-red-500">

                                            -5

                                        </span>



                                        <span className="text-gray-400">

                                            vs. período anterior

                                        </span>


                                    </div>


                                </div>


                            </div>


                        </div>









                        {/* AVALIAÇÃO GESTÃO */}


                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 w-[75%]">


                            <div className="flex items-center gap-3">

                                <div
                                    className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-green-100
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >

                                    <UserCheck
                                        size={20}
                                        className="text-[#10B981]"
                                        strokeWidth={2}
                                    />

                                </div>


                                <h3 className="font-bold text-2xl">

                                    Avaliação Gestão

                                </h3>

                            </div>





                            <div className="flex justify-between items-center mt-7">


                                <ProgressCircle
                                    value={68}
                                    color="#10B981"
                                />



                                <div>


                                    <h2
                                        className="text-5xl font-bold"
                                        style={{
                                            color:"#10B981"
                                        }}
                                    >

                                        68%

                                    </h2>



                                    <p
                                        className="font-semibold mt-1"
                                        style={{
                                            color:"#10B981"
                                        }}
                                    >

                                        Bom

                                    </p>





                                    <div className="mt-4 text-sm flex items-center gap-2">


                                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-600">

                                            +8

                                        </span>



                                        <span className="text-gray-400">

                                            vs. período anterior

                                        </span>


                                    </div>


                                </div>


                            </div>


                        </div>



                    </div>









                    {/* TABELA + GRÁFICO */}


                    <section className="flex gap-8 mt-10 items-center">



                        <div className="w-[70%]">


                            <TabelaAvaliacoes

                                avaliacoes={avaliacoes}

                            />


                        </div>





                        <div className="w-[30%] bg-white rounded-3xl shadow-sm border border-gray-100 p-6">


                            <h2 className="font-bold text-2xl">

                                Competências

                            </h2>



                            <UserGraficoCompetencias />


                        </div>



                    </section>





                </div>



            </main>


        </>

    );

};