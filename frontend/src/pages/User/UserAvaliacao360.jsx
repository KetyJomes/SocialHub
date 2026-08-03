import { useEffect, useState } from "react";
import { Users } from "lucide-react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CardProgresso360 } from "../../components/CardProgresso360";
import { TabelaColaboradores360 } from "../../components/User/TabelaColaboradores360";


import { colaboradores360Mock } from "../../data/colaboradores360Mock";


export const UserAvaliacao360 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [colaboradores, setColaboradores] = useState(colaboradores360Mock);

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

        const salvos =
            JSON.parse(
                localStorage.getItem(
                    "colaboradores360Respondidos"
                )
            ) || {};

        setColaboradores(prev =>
            prev.map(colaborador => {

                const colaboradorSalvo = salvos[colaborador.id];

                if (colaboradorSalvo) {

                    return {
                        ...colaborador,
                        status:
                            colaboradorSalvo.finalizada
                                ? "Avaliado"
                                : "Em andamento",
                        finalizada:
                            colaboradorSalvo.finalizada,
                        respostas:
                            colaboradorSalvo.respostas
                    };
                }

                return colaborador;

            })
        );

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
x
            <main
                className="
                    min-h-screen
                    bg-white
                    p-10
                    mt-[8vh]
                "
            >
                <div className="mx-auto pb-12">

                    {/* TÍTULO */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-[#EDE9FE]
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

                            <h1
                                className="
                                    text-4xl
                                    font-bold
                                    text-gray-800
                                "
                            >
                                Avaliação 360°
                            </h1>

                        </div>

                        <p
                            className="
                                text-gray-500
                                mt-2
                            "
                        >
                            Acompanhe o andamento das avaliações e responda os colaboradores pendentes.
                        </p>
                    </div>

                    {/* CARD PROGRESSO */}

                    <div className="mt-10">

                        <CardProgresso360
                            colaboradores={colaboradores}
                        />

                    </div>

                    {/* TABELA */}

                    <section className="mt-10">
                        <TabelaColaboradores360
                            colaboradores={colaboradores}
                        />
                    </section>
                </div>
            </main>
        </>

    );

};