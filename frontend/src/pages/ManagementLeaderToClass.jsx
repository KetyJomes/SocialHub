import { useState } from "react";
import { useParams } from "react-router-dom";

import { Header } from "../components/Header";
import { SidebarManagement } from "../components/SidebarManagement";
import { StudentTestsControlTable } from "../components/Management/StudentTestsControlTable";

export const ManagementLeaderToClass = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [abaAtiva, setAbaAtiva] = useState("disponiveis");
    const { turma } = useParams();
    const [avaliacoes, setAvaliacoes] = useState([

        {
            id: 1,
            nome: "Avaliação Geral da Turma",
            descricao: "Avaliação realizada pelo líder sobre o desempenho da turma",
            tipo: "Líder para turma",
            disponibilizada: "01/07/2026",
            infoDisponibilizada: "Disponível",
            prazo: "20/07/2026",
            infoPrazo: "Concluída",
            status: "Respondida",
        },


       {
            id: 2,
            nome: "Avaliação Técnica",
            descricao: "Avaliação das competências técnicas",
            tipo: "Líder para turma",
            disponibilizada: "20/06/2026",
            infoDisponibilizada: "há 22 dias",
            prazo: "30/06/2026",
            infoPrazo: "prazo encerrado",
            status: "Em atraso",
        },

    ]);

    const disponiveis = avaliacoes.filter(

        avaliacao =>
            avaliacao.status === "Pendente" ||
            avaliacao.status === "Em atraso"

    );

    const feitas = avaliacoes.filter(

        avaliacao =>
            avaliacao.status === "Respondida"

    );

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

            <Header
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <main className="mt-[8vh] h-[calc(100vh-11.5vh)]">
                <div className="p-10 h-full flex flex-col">
                    <h1 className="text-3xl font-bold">
                        {turma}
                    </h1>
                    <p className="text-gray-500 mt-2 mb-6">
                        Avaliação realizada pelo líder sobre o desempenho geral da turma.
                    </p>
                    <section className="flex gap-8 border-b border-gray-300">
                        <button
                            onClick={() => setAbaAtiva("disponiveis")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${
                                abaAtiva === "disponiveis"
                                ? "text-[#B8A4FF] border-[#B8A4FF] font-semibold"
                                : "text-gray-500 border-transparent"

                            }`}

                        >
                            Disponíveis ({disponiveis.length})
                        </button>

                        <button
                            onClick={() => setAbaAtiva("feitas")}
                            className={`px-2 py-3 text-lg border-b-2 cursor-pointer ${                              
                                abaAtiva === "feitas"

                                ? "text-[#B8A4FF] border-[#B8A4FF] font-semibold"

                                : "text-gray-500 border-transparent"
                            }`}
                        >
                            Feitas ({feitas.length})

                        </button>
                    </section>

                    <section className="mt-8">
                        {
                            abaAtiva === "disponiveis" &&

                            (

                                <StudentTestsControlTable
                                    avaliacoes={disponiveis}
                                    tipoAba="disponiveis"
                                />

                            )
                        }

                        {
                            abaAtiva === "feitas" &&

                            (

                                <StudentTestsControlTable
                                    avaliacoes={feitas}
                                    tipoAba="feitas"
                                />

                            )
                        }

                    </section>
                </div>
            </main>
        </>
    );

};