// Página de gerenciamento de avaliações

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { SidebarManagement } from "../../components/SidebarManagement";

export const TestControl = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const [abaAtiva, setAbaAtiva] = useState(
        location.state?.abaInicial || "avaliacoes"
    );

    return (

        <>

            <SidebarManagement
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            {
                isOpen && (

                    <div
                        className="fixed inset-0 bg-black/20 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                )
            }

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh] h-[calc(100vh-11.5vh)]">

                <div className="p-10">

                    <h1 className="text-3xl font-bold">
                        Gerenciar Avaliações
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Crie, reutilize e acompanhe todas as avaliações do sistema.
                    </p>

                    {/* ABAS */}

                    <section className="flex gap-8 border-b border-gray-300 mt-8">

                        <button
                            onClick={() => setAbaAtiva("avaliacoes")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "avaliacoes"
                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                    : "text-gray-500 border-transparent"
                            }`}
                        >
                            Avaliações
                        </button>

                        <button
                            onClick={() => setAbaAtiva("modelos")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "modelos"
                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                    : "text-gray-500 border-transparent"
                            }`}
                        >
                            Modelos
                        </button>

                        <button
                            onClick={() => setAbaAtiva("agendamentos")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "agendamentos"
                                    ? "text-[#0291F7] border-[#0291F7] font-semibold"
                                    : "text-gray-500 border-transparent"
                            }`}
                        >
                            Agendamentos
                        </button>

                    </section>

                    {/* ABA AVALIAÇÕES */}

                    {
                        abaAtiva === "avaliacoes" && (

                            <>

                                <section className="mt-8 flex justify-between items-center">

                                    <h2 className="text-2xl font-bold">
                                        Avaliações
                                    </h2>

                                    <button
                                        onClick={() => navigate("/management-evaluations/create")}
                                        className="bg-[#0291F7] text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition font-medium"
                                    >
                                        + Nova avaliação
                                    </button>

                                </section>

                                <section className="mt-8">

                                    <div className="text-gray-500">
                                        Área das avaliações.
                                    </div>

                                </section>

                            </>

                        )
                    }
                                        {/* ABA MODELOS */}

                    {
                        abaAtiva === "modelos" && (

                            <>

                                <section className="mt-8 flex justify-between items-center">

                                    <h2 className="text-2xl font-bold">
                                        Modelos
                                    </h2>

                                </section>

                                <section className="mt-8">

                                    <div className="text-gray-500">
                                        Área dos modelos.
                                    </div>

                                </section>

                            </>

                        )
                    }


                    {/* ABA AGENDAMENTOS */}

                    {
                        abaAtiva === "agendamentos" && (

                            <>

                                <section className="mt-8 flex justify-between items-center">

                                    <h2 className="text-2xl font-bold">
                                        Agendamentos
                                    </h2>

                                </section>

                                <section className="mt-8">

                                    <div className="text-gray-500">
                                        Área dos agendamentos.
                                    </div>

                                </section>

                            </>

                        )
                    }


                </div>

            </main>

        </>

    );

};