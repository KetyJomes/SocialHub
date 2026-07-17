import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TabelaAvaliacoesEnviadas } from "../components/TabelaAvaliacoesEnviadas";

import { avaliacoesEnviadas } from "../data/avaliacoesEnviadas";

export const ManagementAvaliacoesEnviadas = () => {

    const [isOpen, setIsOpen] = useState(false);

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

            <main className="min-h-screen bg-[#F7F8FC] p-10 mt-[8vh]">

                <div className="mx-auto pb-12">

                    <div>

                        <h1 className="text-4xl font-bold text-gray-800">

                            Avaliações Enviadas

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Gerencie as avaliações publicadas e acompanhe o andamento das respostas.

                        </p>

                    </div>

                    <section className="mt-10">

                        <TabelaAvaliacoesEnviadas

                            avaliacoes={avaliacoesEnviadas}

                        />

                    </section>

                </div>

            </main>

        </>

    );

};