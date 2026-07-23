import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { CardProgresso360 } from "../../components/CardProgresso360";
import { TabelaColaboradores360 } from "../../components/User/TabelaColaboradores360";

export const UserAvaliacao360 = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

    }, []);


    const colaboradores = [

        {
            id: 1,
            nome: "João Silva",
            email: "joao.silva@empresa.com",
            cargo: "Analista de Produção",
            status: "Avaliado"
        },

        {
            id: 2,
            nome: "Maria Souza",
            email: "maria.souza@empresa.com",
            cargo: "Engenharia",
            status: "Pendente"
        },

        {
            id: 3,
            nome: "Carlos Oliveira",
            email: "carlos@empresa.com",
            cargo: "Técnico",
            status: "Avaliado"
        },

        {
            id: 4,
            nome: "Ana Lima",
            email: "ana@empresa.com",
            cargo: "Qualidade",
            status: "Pendente"
        },

        {
            id: 5,
            nome: "Lucas Santos",
            email: "lucas@empresa.com",
            cargo: "RH",
            status: "Pendente"
        },

        {
            id: 6,
            nome: "Fernanda Costa",
            email: "fernanda@empresa.com",
            cargo: "Produção",
            status: "Avaliado"
        }

    ];


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


            {/* CONTEÚDO */}

            <main className="min-h-screen bg-[#F7F8FC] p-10 mt-[8vh]">


                <div className="mx-auto pb-12">


                    {/* TÍTULO */}

                    <div>


                        <h1 className="text-4xl font-bold text-gray-800">

                            Avaliação 360°

                        </h1>


                        <p className="text-gray-500 mt-2">

                            Acompanhe o andamento das avaliações e responda os colaboradores pendentes.

                        </p>


                    </div>


                    {/* CARD DE PROGRESSO */}

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